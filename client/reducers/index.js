import { combineReducers } from 'redux'

import movies from './movies'
import name from './movieName'

export default combineReducers({
  movies,
  name
})
