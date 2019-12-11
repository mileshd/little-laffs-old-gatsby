import React from "react"

import Header from '../components/header'

export default class Games extends React.Component {
  componentDidMount() {
    document.title = 'Games'
  }

  render() {
    return (
      <div className="games">
        <Header/>
        <div className="container">
          <div className="game">
            <a href="https://equals.rocks">Equals</a>
          </div>
        </div>
      </div>
    )
  }
}
