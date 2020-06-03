import * as api from '../api/movies'

export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const GET_MOVIE_NAME = 'GET_MOVIE_NAME'

export function getMoviesSuccess (movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies: movies
  }
}

export function movieName (name) {
  return {
    type: GET_MOVIE_NAME,
    name: name
  }
}

export function getMoviePage (page, movie) {
  return dispatch => {
    return api.getMoviePage(page, movie)
      .then(res => {
        const movies = JSON.parse(res.text)
        dispatch(getMoviesSuccess(movies))
      })
  }
}

export function getMovies (name) {
  return dispatch => {
    return api.getMovies(name)
      .then(res => {
        const movies = JSON.parse(res.text)
        dispatch(getMoviesSuccess(movies))
      })
  }
}
