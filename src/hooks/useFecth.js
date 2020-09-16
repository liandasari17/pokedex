import { useState, useEffect } from "react";
let baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=100";

export default function useFetch() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        const result = json.results.map((pokemon, index) => {
          let newFormat = {
            name: pokemon.name,
            image:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
              (index + 1) +
              ".png",
            id: index + 1,
          };
          return newFormat;
        });
        setItems(result);
      })
      .catch((error) => {
        setError(error);
      })
      .finally((_) => {
        setLoading(false);
      });
  });
  return {
    items,
    loading,
    error,
  };
}
