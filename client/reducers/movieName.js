import { GET_MOVIE_NAME } from '../actions/movies'

export default function movieNameReducer (state = '', action) {
  switch (action.type) {
    case GET_MOVIE_NAME:
      return action.name

    default:
      return state
  }
}
