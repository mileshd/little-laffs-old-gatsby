import React from "react"

import comics from '../../data/comics.json'
import Header from '../components/header'

export default class Comics extends React.Component {
  componentDidMount() {
    document.title = 'Comics'
  }

  render() {
    return (
      <div className="comics">
        <Header/>
        <div className="container">
          <div className="comics-list">
            {comics.map((comic) => {
              return <div>{comic.name}</div>
            })}
          </div>
        </div>
      </div>
    )
  }
}
