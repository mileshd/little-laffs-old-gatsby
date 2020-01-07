import React from "react"

import comics from '../../data/comics.json'
import Header from '../components/header'

export default class Comics extends React.Component {
  state = {
    index: -1
  }

  componentDidMount() {
    document.title = 'Comics'
  }

  render() {
    const {
      index
    } = this.state

    if (Number.isInteger(index) && comics[index]) {
      const activeComic = comics[index]

      return (
        <div className="comic">
          <Header/>
          <div className="container">
            <div className="comic__body">
              <div className="comic__navigation">
                <button
                  className="btn btn-default"
                  onClick={() => {
                    if (index >= -1) {
                      this.setState({
                        ...this.state,
                        index: index - 1
                      })
                    }
                  }}
                >
                  Previous
                </button>
                <button
                  className="btn btn-default"
                  onClick={() => {
                    if (index < comics.length) {
                      this.setState({
                        ...this.state,
                        index: index + 1
                      })
                    }
                  }}
                >
                  Next
                </button>
              </div>
              <div className="comic__title">
                {activeComic.name}
              </div>
              <div className="comic__image">
                <img
                  alt={activeComic.name}
                  style={{ maxWidth: activeComic.maxWidth + 'px' }}
                  src={require(`../../comics/${activeComic.image}`)}
                />
              </div>
              <div className="comic__description">
                {activeComic.description}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="comics">
        <Header/>
        <div className="container">
          <div className="comics-list">
            {comics.map((comic, index) => {
              return (
                <div
                  key={index}
                  className="comic-list-item"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      index 
                    })
                  }}
                >
                  <div className="comic__title">
                    {comic.name}
                  </div>
                  <div className="comic__date">
                    {comic.date}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
