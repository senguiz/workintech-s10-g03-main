import { combineReducers } from 'redux';
import favReducer from './FavReducer';
import moviesReducer from './MoviesReducer';

const rootReducer = combineReducers({
  fav: favReducer,
  movies: moviesReducer,
});

export default rootReducer;
