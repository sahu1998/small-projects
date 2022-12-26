import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

class FlipCardTest extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipDirection="horizontal"
      >
        <div>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card">
        This is the front of the card.
        <button
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          Click to flip
        </button>
      </div>

      <div className="card">
        This is the back of the card.
        <button
          onClick={() => {
            setIsFlipped(!isFlipped);
          }}
        >
          Click to flip
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCardTest;
