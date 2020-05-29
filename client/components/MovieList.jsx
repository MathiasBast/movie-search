import React from 'react'
import { connect } from 'react-redux'

class MovieList extends React.Component {
  render () {
    return (
    <>
    {console.log(this.props.movies)}
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

        : <h2>Search A Movie</h2>}
    </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(MovieList)
