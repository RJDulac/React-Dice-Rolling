import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

const dieArray = [
  "fas fa-dice-one",
  "fas fa-dice-two",
  "fas fa-dice-three",
  "fas fa-dice-four",
  "fas fa-dice-five",
  "fas fa-dice-six"
];
class RollDice extends Component {
  state = {
    dieNum: dieArray[Math.floor(Math.random() * 6)],
    dieNum2: dieArray[Math.floor(Math.random() * 6)],
    isAnimating: false
  };

  randomizer = () => {
    setTimeout(() => {
      this.setState({ dieNum: dieArray[Math.floor(Math.random() * 6)] });
      this.setState({ dieNum2: dieArray[Math.floor(Math.random() * 6)] });
    }, 700);
  };
  clickHandler = () => {
    this.setState({ isAnimating: true });
    setTimeout(() => {
      this.setState({ isAnimating: false });
    }, 600);

    return this.randomizer();
  };
  render() {
    return (
      <div>
        <div className={this.state.isAnimating ? "animated" : "not-animated"}>
          <Die die={this.state.dieNum} />
          <Die die={this.state.dieNum2} />
        </div>
        <button
          disabled={this.state.isAnimating ? true : false}
          className="btn-roll"
          onClick={this.clickHandler}
        >
          {this.state.isAnimating ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
