# Removing The Local State

## index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## counter.jsx

```jsx
import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm m-2'>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className='btn btn-danger btn-sm m-2'>
          Delete
        </button>
      </div>
    );
  }

  getBadgeclasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
```

## counters.jsx

```jsx
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // this doesn't work unless Counter component remove it's local state
  handleReset = () => {
    const counters = this.state.counters.map((c) => ({ id: c.id, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : { ...c }
    );
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {this.state.counters.map((item) => (
          <Counter
            key={item.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
```
