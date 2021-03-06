/* eslint-disable no-unused-expressions */
import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class MovieList extends React.Component {
  MovieChecker (res) {
    if (res.Response === 'False') {
      if (res.Error === 'Movie not found!') {
        return <h1>Movie Not Found</h1>
      } else if (res.Error === 'Too many results.') {
        return <h1>Too many resluts to show</h1>
      }
    } else if (res.length !== 0) {
      return this.props.movies.Search.map(movie => {
        return <div className='movie-display' key={movie.imbdId}>
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
          {movie.Poster === 'N/A'
            ? <img className='movie-image' src='/pictures/NoFound.jpg' alt={movie.Title} />
            : <img className='movie-image' src={movie.Poster} alt={movie.Title} />
          }
        </div>
      })
    } else {
      /* eslint-disable-line */
      <Redirect to='/' />
    }
  }
  render () {
    return (
    <>
      <div className='container'>
        {this.MovieChecker(this.props.movies)}
      </div>
    </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(MovieList)
