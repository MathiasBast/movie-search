import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class MovieList extends React.Component {
  render () {
    return (
    <>
      {this.props.movies.Error !== 'Movie not found!'
        ? <>
      {this.props.movies.length !== 0
        ? <>
        {this.props.movies.Search.map(movie => {
          return <div key={movie.imbdId}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        })}
        </>

        : <Redirect to='/' />}</>
        : <p>No Movie Found</p> }
    </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(MovieList)
