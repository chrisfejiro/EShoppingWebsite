import React from "react";
import attack from "./images/Attack.jpg";
import defence from "./images/Defence.jpg";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    // this.handleAttack = this.handleAttack.bind(this);
    // this.handleDefence = this.handleDefence.bind(this);
    // this.handleRandomPlay = this.handleRandomPlay.bind(this);
    this.state = {
      count: 0,
      LastPlay: "",
      gameStatus: "",
    };
  }
  handleAttack = () => {
    this.setState((previousState) => {
      const newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
        LastPlay: "Attack",
        gameStatus: newCount > 10 ? "You Won !!" : previousState.gameStatus,
      };
    });
  };

  handleDefence = () => {
    this.setState((previousState) => {
      const newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
        LastPlay: "Defence",
        gameStatus: newCount < -10 ? "You Lost!!" : previousState.gameStatus ,
      };
    });
  };
  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };
  handleReset = () => {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  };

  render() {
    return (
      <div className="row text-center">
        <h1>Game Score:{this.state.count} </h1>
        <p> You win at +10 points and lose at -10 points!</p>
        <p>Last Play:{this.state.LastPlay} </p>
        <h3>Game Status:{this.state.gameStatus} </h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            src={attack}
            alt=""
            style={{
              width: "40%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded "
            onClick={this.handleAttack}
          />
        </div>

        <div className="col-6 col-md-3 ">
          <img
            src={defence}
            alt=""
            style={{
              width: "35%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded "
            onClick={this.handleDefence}
          />
        </div>
        <div className="col-12 col-md-4 offset-md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
