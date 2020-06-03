import React from 'react'
import { connect } from 'react-redux'

class Pages extends React.Component {
  pages (number) {
    if (number <= 10) {
      return
    } else {
      return <h1>Hiiii</h1>
    }
  }
  render () {
    return (
      <>
        {this.pages(this.props.movies.totalResults)}
      </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Pages)
