'use strict';

const Element = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comics: [
        {
          "id": "1",
          name: "Hipster Harvey",
          artistComments: "Good stuff"
        } 
      ]
    };
  }

  render() {
    return Element(
      'button',
      { onClick: () => console.log('hello') },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(Element(LikeButton), domContainer);
