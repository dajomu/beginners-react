import React, { Component } from 'react';
import GameSquare from './components/gameSquare';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: '1',
      a1: '0',
      a2: '0',
      a3: '0',
    };
  }

  selectSquare = (event) => {
    const {id} = event.target;
    const {currentPlayer} = this.state;
    if (this.state[id] === '0') {
      this.setState({
        [id]: currentPlayer,
        currentPlayer: currentPlayer === '1' ? '2' : '1',// if statement that sets to 2 if true
      });
    }
  }

  render() {
    const {a1, a2, a3, currentPlayer} = this.state;
    return (
      <div className="App">
        <p className="App-intro">
          Player {currentPlayer}, it's your turn!
        </p>
        <GameSquare coord="a1" selectSquare={this.selectSquare} player={a1}/>
        <GameSquare coord="a2" selectSquare={this.selectSquare} player={a2}/>
        <GameSquare coord="a3" selectSquare={this.selectSquare} player={a3}/>
      </div>
    );
  }
}

export default App;
