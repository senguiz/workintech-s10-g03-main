export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export const addFav = (movie) => {
  console.log("a");
  return { type: ADD_FAV, payload: movie };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};
