import React from "react"

import Header from '../components/header'

export default class Videos extends React.Component {
  componentDidMount() {
    document.title = 'Videos'
  }

  render() {
    return (
      <div className="videos">
        <Header/>
        <div className="container">
          <div className="video">
            <a href="">Vacation</a>
          </div>
        </div>
      </div>
    )
  }
}
