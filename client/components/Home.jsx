import React from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../actions/movies'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  state={
    title: ''
  }
  titleHandler = event => {
    this.setState({
      title: event.target.value
    })
  }

  submitHandler = event => {
    this.props.dispatch(getMovies(this.state.title))
  }
  render () {
    return (
      <>
      <form>
        <input placeholder='movie title' value={this.state.title} onChange={this.titleHandler} />
        <Link to='/search'>
          <button type='button' onClick={this.submitHandler} >Submit</button>
        </Link>
      </form>
      </>
    )
  }
}

export default connect()(Home)
