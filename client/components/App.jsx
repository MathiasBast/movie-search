import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import MovieList from './MovieList'

const App = () => {
  return (
    <>
      <Route path='/' component={Home} />
      <Route exact path='/search' component={MovieList} />
    </>
  )
}

export default App
