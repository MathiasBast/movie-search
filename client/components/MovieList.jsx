import React from 'react'
import { connect } from 'react-redux'

class MovieList extends React.Component {
  render () {
    return (
    <>
    {console.log(this.props)}
    <h1>Hithere</h1>
    </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(MovieList)
