# Updating The State

```jsx
// imrc
import React, { Component } from "react";

// cc
// export default class Counter extends Component {
class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement() {
    // solution #1
    // this.setState({ count: this.state.count + 1 });

    // solution #2
    // object destructure
    let { count } = this.state;
    count += 1;
    this.setState({ count });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
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
