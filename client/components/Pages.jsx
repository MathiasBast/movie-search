import React from 'react'
import { connect } from 'react-redux'

import { getMoviePage } from '../actions/movies'

class Pages extends React.Component {
  pages (number) {
    number = Number(number)
    if (number <= 10) {
      // eslint-disable-next-line no-useless-return
      return
    } else {
      var final = []
      const pages = Math.ceil(number / 10)
      for (let i = 0; i < pages; i++) {
        final.push(<button key={i} onClick={this.clickHandler}>{i + 1}</button>)
      }
      return final
    }
  }

  clickHandler = event => {
    const number = event.target.innerHTML
    this.props.dispatch(getMoviePage(number, this.props.name))
  }

  render () {
    return (
      <>
        <div className='page-numbers' >
          {this.pages(this.props.movies.totalResults)}
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Pages)
