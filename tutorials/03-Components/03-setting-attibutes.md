# Setting Attributes

```jsx
// imrc
import React, { Component } from "react";

// cc
// export default class Counter extends Component {
class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
  };

  styles = {
    // default: px
    fontSize: 20, // "20px"
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        {/* <img
          src={this.state.imageUrl}
          alt='random pic from a website'></img> */}
        {/* inline styles */}
        <span
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
          className='badge bg-primary m-2'>
          {this.formatCount()}
        </span>
        {/* dynamic styles */}
        <span
          style={this.styles}
          className='badge bg-primary m-2'>
          {this.formatCount()}
        </span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
```
