# Raising and Handling Events

# Passing Data to Components

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
  state = {
    count: this.props.counter.value,
  };

  handleIncrement() {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
  }

  render() {
    // console.log(this.props);
    // {
    //   "value": 0,
    //   "selected": true
    // }

    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className='btn btn-secondary btn-sm m-2'>
          Increment
        </button>
        {/* button.btn.btn-danger.btn-sm */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'>
          Delete
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

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((item) => (
          //   mostly use for dialogue component
          <Counter
            key={item.id}
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
