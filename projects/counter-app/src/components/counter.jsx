// imrc
import React, { Component } from "react";

// cc
// export default class Counter extends Component {
class Counter extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    // solution #1
    this.handleIncrement1 = this.handleIncrement1.bind(this);
  }

  // convention: handle+event
  handleIncrement1() {
    // Binding issue
    // counter.jsx:13 Uncaught TypeError: Cannot read properties of undefined (reading 'state')
    // this: undefined

    /*
    [Method is bind to obj]
    obj.method()

    [Method is not bind to obj]
    const newMethod = obj.method
    newMethod()
    */

    console.log("Increment Clicked!", this.state.count);
  }

  // solution #2
  handleIncrement2(btnNumber) {
    console.log(`${btnNumber} has Clicked!`, this.state.count);
  }

  // solution #3
  handleIncrement3 = () => {
    console.log("Increment Clicked!", this.state.count);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement1}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>
        <button
          onClick={() => this.handleIncrement2(2)}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>
        <button
          onClick={this.handleIncrement3}
          className='btn btn-secondary btn-sm'>
          Increment
        </button>
      </div>
    );
  }

  getBadgeclasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
