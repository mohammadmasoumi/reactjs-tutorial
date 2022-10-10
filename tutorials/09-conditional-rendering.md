# Conditional Rendering

```jsx
// imrc
import React, { Component } from "react";

// cc
// export default class Counter extends Component {
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There is no tags!</p>;

    return (
      <ul>
        {this.state.tags.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  /*
    return the last operand 

    - true && false 
        flase
    - true && 'Hi'
        "Hi"
    - true && 'Hi' && 1
        1 
   */
  render() {
    return (
      <div>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
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
