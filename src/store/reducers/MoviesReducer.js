import { ADD_MOVIE, REMOVE_MOVIE } from '../actions/MoviesAction';
import { movies } from '../../data.js';

const initialState = {
  movieList: movies,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_MOVIE:
      return {
        ...state,
        movieList: state.movieList.filter(
          (movie) => action.payload !== movie.id
        ),
      };
    case ADD_MOVIE:
      return { ...state, movieList: [...state.movieList, action.payload] };
    default:
      return state;
  }
};

export default moviesReducer;
