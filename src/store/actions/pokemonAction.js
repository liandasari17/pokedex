export const getPokemons = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const json = await res.json();
    const pokemons = json.results.map((pokemon, index) => {
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
    dispatch({
      type: "GET_POKEMONS",
      payload: { pokemons },
    });
  };
};

export const getPokemon = (id) => {
  return async (dispatch) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await resp.json();
    dispatch({
      type: "GET_POKEMON",
      payload: {
        pokemon,
      },
    });
  };
};
