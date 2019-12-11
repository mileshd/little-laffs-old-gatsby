import React from "react"

import Header from '../components/header'

export default class About extends React.Component {
  componentDidMount() {
    document.title = 'About'
  }

  render() {
    return (
      <div className="about">
        <Header/>
        <div className="container">
          <div>
            About Little Laffs
          </div>
        </div>
      </div>
    )
  }
}
