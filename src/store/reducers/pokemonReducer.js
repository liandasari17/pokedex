const initialState = {
  pokemons: [],
  pokemon: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
      return { ...state, pokemons: action.payload.pokemons };
    case "GET_POKEMON":
      return { ...state, pokemon: action.payload.pokemon };
    default:
      return state;
  }
};
