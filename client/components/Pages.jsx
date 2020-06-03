import React from 'react'
import { connect } from 'react-redux'

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
    console.log(event.target.innerHTML)
    
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
