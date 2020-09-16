const initialState = {
  favorites: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_FAVORITES":
      return { ...state, favorites: action.payload.favorite };
    case "ADD_FAVORITES":
      console.log(action.payload);
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
 