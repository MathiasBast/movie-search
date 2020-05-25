import { GET_MOVIES_SUCCESS } from '../actions/movies'

export default function moviesReducer (state = [], action) {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return action.movies

    default:
      return state
  }
}
