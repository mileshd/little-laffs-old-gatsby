import React from "react"

import videos from '../../data/videos.json'
import Header from '../components/header'

export default class Videos extends React.Component {
  state = {
    index: -1
  }

  componentDidMount() {
    document.title = 'Videos'
  }

  render() {
    const {
      index
    } = this.state

    if (Number.isInteger(index) && videos[index]) {
      const activeVideo = videos[index]

      return (
        <div className="video">
          <Header/>
          <div className="container">
            <div className="video__body">
              <div className="video__navigation">
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
                    if (index < videos.length) {
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
              <div className="video__title">
                {activeVideo.name}
              </div>
              <div className="video__image">
                <img
                  style={{ maxWidth: activeVideo.maxWidth + 'px' }}
                  src={require(`../../videos/${activeVideo.image}`)}
                />
              </div>
              <div className="comic__description">
                {activeVideo.description}
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="videos">
        <Header/>
        <div className="container">
          <div className="videos-list">
            {videos.map((video, index) => {
              return (
                <div
                  key={index}
                  className="video-list-item"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      index 
                    })
                  }}
                >
                  <div className="video__title">
                    {video.name}
                  </div>
                  <div className="video__date">
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
