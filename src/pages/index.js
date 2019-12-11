import React from "react"

import comics from '../../data/comics.json'
import Header from '../components/header'

export default class Index extends React.Component {
  componentDidMount() {
    document.title = 'Little Laffs'
  }

  render() {
    return (
      <div className="home">
        <Header/>
        <div className="container">
          Welcome to Little Laffs!
        </div>
      </div>
    )
  }
}
