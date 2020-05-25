import api from './api/movies'

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'

export function getMoviesSuccess (movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies: movies
  }
}

export function getMovies (name) {
  return dispatch => {
    return api.getMovies(name)
      .then(movies => {
        dispatch(getMoviesSuccess(movies))
      })
  }
}