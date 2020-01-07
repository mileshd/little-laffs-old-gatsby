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
          <div className="about-title">
            About Little Laffs
          </div>
          <div className="about-section">
            Little Laffs is the best he can be. He strives to be as weird and expressive as possible to be the value he sees in the world. Everything is made with love and passion.
          </div>
          <div className="about-section">
            Our goal is to generate as much wealth and happiness as possible. All profits are donated to the following organizations below:
          </div>
        </div>
      </div>
    )
  }
}
