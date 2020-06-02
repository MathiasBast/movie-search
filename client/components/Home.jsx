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
        <div className='home-center'>
          <form>
            <input placeholder='movie title' value={this.state.title} onChange={this.titleHandler} />
            <Link to='/search'>
              <button type='button' onClick={this.submitHandler} >Submit</button>
            </Link>
          </form>
          <h2>Search A Movie</h2>
        </div>
      </>
    )
  }
}

export default connect()(Home)
