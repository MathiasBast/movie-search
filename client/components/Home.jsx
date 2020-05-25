import React from 'react'
import { connect } from 'react-redux'

import { getMovies } from '../actions/movies'

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
    event.preventDefault()
    console.log(this.props.dispatch)
    this.props.dispatch(getMovies(this.state.title))
  }
  render () {
    return (
      <>
      <form>
        <input placeholder='movie title' value={this.state.title} onChange={this.titleHandler} />
        <button type='button' onClick={this.submitHandler} >Submit</button>
      </form>
      </>
    )
  }
}

export default connect()(Home)
