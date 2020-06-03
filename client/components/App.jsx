import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Home'
import MovieList from './MovieList'
import Pages from './Pages'

const App = () => {
  return (
    <>
      <Route path='/' component={Home} />
      <Route exact path='/search' component={MovieList} />
      <Route path='/search' component={Pages} />
    </>
  )
}

export default App
