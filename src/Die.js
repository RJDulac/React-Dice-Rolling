import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <div className="Die">
        <i className={this.props.die} />
      </div>
    );
  }
}

export default Die;
