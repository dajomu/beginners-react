import React, { Component } from 'react';

class GameSquare extends Component {
  render() {
    const {coord, player, selectSquare} = this.props;
    return (
      <div id={coord} onClick={selectSquare} className={"game-square player" + player}>
      </div>
    );
  }
}

export default GameSquare;