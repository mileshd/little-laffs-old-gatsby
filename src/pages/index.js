import React from "react"

import comics from '../../data/comics.json'
import Header from '../components/header'

export default class Index extends React.Component {
  componentDidMount() {
    document.title = 'Little Laffs'
  }

  render() {
    const sortedComics = Object.values(comics).sort((a, b) => {
      if (a.date > b.date) {
        return -1
      } else if (b.date > a.date) {
        return 1
      } else {
        return 0
      }
    })
    const truncatedComics = sortedComics.slice(0, 5)

    return (
      <div className="home">
        <Header/>
        <div className="container">
          <div className="home-section">
            Welcome to Little Laffs!
          </div>
          <p>
            Home to insightful comics, ground-breaking music, cutting edge videos, amazing games, and the best vibes.
          </p>
          <p>
             I hope you enjoy your stay.
          </p>
        </div>
      </div>
    )
  }
}

          //<div className="row">
            //<div className="col-xs-12 col-xs-4">
              //<div className="latest-comics">
                //<div className="latest-comics__title">
                  //Latest Comics:
                //</div>
                //<div className="latest-comics__body">
                //{truncatedComics.map((comic) => {
                  //return (
                    //<div className="latest-comics__comic">
                      //{comic.name}
                    //</div>
                  //)
                //})}
                //</div>
              //</div>
            //</div>
          //</div>
