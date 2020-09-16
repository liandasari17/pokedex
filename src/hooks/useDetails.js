import { useState, useEffect } from "react";

export default function useDetails(url) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(false);
    // console.log("masukHook");
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setItems(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally((_) => {
        setLoading(false);
      });
  }, []);
  return {
    items,
    loading,
    error,
  };
}
