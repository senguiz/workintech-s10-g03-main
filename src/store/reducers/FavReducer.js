import { ADD_FAV, REMOVE_FAV } from '../actions/FavAction';

const initialState = {
  favList: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, favList: [...state.favList, action.payload] };
    case REMOVE_FAV:
      return {
        ...state,
        favList: state.favList.filter((movie) => movie.id !== action.payload),
      };
    default:
      return state;
  }
};

export default favReducer;
