# Handling Events

```jsx
// imrc
import React, { Component } from "react";

// cc
// export default class Counter extends Component {
class Counter extends Component {
  state = {
    count: 0,
  };

  // convention: handle+event
  handleIncrement() {
    // Binding issue
    // counter.jsx:13 Uncaught TypeError: Cannot read properties of undefined (reading 'state')
    // this: undefined
    console.log("Increment Clicked!", this.state.count);
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
```
