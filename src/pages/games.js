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
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <a
                className="game equals" 
                href=""
              >
                <div className="game-title">
                  Equals (Coming Soon)
                </div>
                <div className="game-description">
                  Solve, Discover, and Steal puzzles to become the most powerful player in the game. Add, Subtract, Multiply, and Divide in the quest from start to finish. Where competition meets meditation, that's Equals. Play now!
                </div>
              </a>
            </div>
            <div className="col-xs-12 col-sm-6">
              <a
                className="game rally-omelet" 
                href=""
              >
                <div className="game-title">
                  Rally Omelet (Coming Soon)
                </div>
                <div className="game-description">
                  Beat my game, win a real prize. Will it be easy, no. Will you have to break a few eggs, yes. But is it worth it? Indubitably. Play today. 
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

                //<div>
                  //<div className="game-operator add">
                    //+
                  //</div>
                  //<div className="game-operator subtract">
                    //-
                  //</div>
                  //<div className="game-operator multiply">
                    //x
                  //</div>
                  //<div className="game-operator divide">
                    ///
                  //</div>
                //</div>
