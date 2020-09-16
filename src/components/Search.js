import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=100";

export default function SearchPokemon(props) {
  const [pokemonData, setPokemonData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function handleSearch(e) {
    setPokemonData(e.target.value);
  }

  function fetchData(e) {
    console.log("masuk");
    e.preventDefault();
    setLoading(true);
    fetch(`${baseUrl}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        // let filterPokemon = items.filter((item) => {
        //   item.name;
        // });
        // console.log(filterPokemon);
        props.getItems(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally((_) => {
        setLoading(true);
      });
  }

  return (
    <div>
      <Form onSubmit={(e) => fetchData(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search your pokemon</Form.Label>
          <Form.Control
            onChange={(e) => handleSearch(e)}
            value={pokemonData}
            type="text"
            placeholder="Search pokemon"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
