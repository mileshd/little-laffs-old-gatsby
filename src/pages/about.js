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
            Little Laffs is the best I can be. I strive to express value as much as possible. Everything is made with love and passion.
          </div>
          <div className="about-section">
            My goal is to generate as much wealth and happiness as possible.
          </div>
          <div className="about-section">
            I'm happy you are here.
          </div>
        </div>
      </div>
    )
  }
}
