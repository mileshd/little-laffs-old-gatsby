import React from "react"
import $ from 'jquery';

import comics from '../../data/comics.json'
import Header from '../components/header'

export default class Comics extends React.Component {
  state = {
    index: -1
  }

  componentDidMount() {
    document.title = 'Comics'

    // Arrow Key integration
    $(document).on('keydown', evt => {
      evt.stopPropagation()

      const { keyCode } = evt
      const { index } = this.state

      // Left Arrow
      if (keyCode === 37) {
        if (index >= -1) {
          this.setState({
            ...this.state,
            index: index - 1
          })
        }
      }
      // Right Arrow
      if (keyCode === 39) {
        if (index < comics.length) {
          this.setState({
            ...this.state,
            index: index + 1
          })
        }
      }
    })
  }

  componentWillUnmount() {
    // Remove Event Handlers
    $(document).off('keydown')
  }

  render() {
    const {
      index
    } = this.state

    // Sort Comics by latest to earliest in collection
    // I guess I can sort an object as well as a list, go figure
    const sortedComics = comics.sort((a, b) => {
      const date1 = new Date(a.date)
      const date2 = new Date(b.date)

      if (date1 < date2) {
        return 1
      } else if (date1 > date2) {
        return -1
      } else {
        return 0
      }
    })

    if (Number.isInteger(index) && sortedComics[index]) {
      const activeComic = sortedComics[index]

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
              <div className="comic__date">
                {activeComic.date}
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
          <div className="comics__section">
            Comics have been called the "One True" medium. A unique blend of visuals and words that wax poetic the limits of our humor and imagination. If you're in need of a chukle or two, you've come to the right place.
          </div>
          <div className="comics__section">
            <b>
              Pro Tip: Use the left and right arrow keys for quicker navigation.
            </b>
          </div>
          <div className="comics-list">
            {sortedComics.map((comic, index) => {
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
