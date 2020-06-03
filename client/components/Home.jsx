import React from 'react'
import { connect } from 'react-redux'

import { getMovies, movieName } from '../actions/movies'
import { Link, Redirect } from 'react-router-dom'

class Home extends React.Component {
  state={
    title: '',
    search: false
  }
  titleHandler = event => {
    this.setState({
      title: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.props.dispatch(getMovies(this.state.title))
    this.props.dispatch(movieName(this.state.title))
  }

  keyHandler = event => {
    event.preventDefault()
    if (event.keyCode === 13) {
      this.props.dispatch(getMovies(this.state.title))
      // eslint-disable-next-line semi
      this.props.dispatch(movieName(this.state.title));
      this.setState({ search: true })
    }
  }
  render () {
    return (
      <>
        <div className='home-center'>
          <form>
            <input onKeyUp={this.keyHandler} placeholder='movie title' value={this.state.title} onChange={this.titleHandler} />
            <Link to='/search'>
              <button type='submit' onClick={this.submitHandler} >Submit</button>
            </Link>
          </form>
          <h2>Search A Movie</h2>
        </div>
        {this.state.search && <Redirect to='/search' />}
      </>
    )
  }
}

export default connect()(Home)
