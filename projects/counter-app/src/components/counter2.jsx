// imrc
// import React, { Component, Fragment } from 'react';
import React, { Component } from "react";

// cc
// export default class Counter extends Component {
class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <img
          src={this.state.imageUrl}
          alt='Image'></img>
        <span className='badge bg-primary m-2'>{this.stats.count}</span>
        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
