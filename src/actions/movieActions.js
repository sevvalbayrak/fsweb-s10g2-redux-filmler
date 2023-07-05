export const DELETE_MOVIE = "DELETE_MOVIE";
export const ADD_MOVIE = "ADD_MOVıE";

export const deleteMovie = (id) => {
  return { type: DELETE_MOVIE, payload: id };
};

export const addMovie = (movie) => {
  const newMovie = { ...movie, id: Date.now() };
  return { type: ADD_MOVIE, payload: newMovie };
};
