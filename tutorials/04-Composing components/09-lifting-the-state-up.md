# Lifting The State Up

# Multiple Component In Sync

## index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## App.jsx

```jsx
import React, { Component, Fragment } from "react";

import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
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
    const counters = this.state.counters.map((c) => ({ ...c, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    // const counters = [...this.state.counters];
    // const index = counter.id;
    // counters[index] = { ...counter };
    // counters[index].value++;

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
      <Fragment>
        {/* this.state.counters.length */}
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
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
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {this.props.counters.map((item) => (
          <Counter
            key={item.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={item}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
```

## navbar.jsx

```jsx
import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className='navbar navbar-light bg-light'>
        <a
          className='navbar-brand'
          href='#'>
          Navbar
          <span className={this.getBadgeClasses()}>
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }

  getBadgeClasses() {
    let classes = "badge rounded-pill text-bg-";

    classes +=
      this.props.totalCounters === 0
        ? "danger"
        : this.props.totalCounters < 2
        ? "warning"
        : "info";

    console.log(classes);

    return classes;
  }
}

export default Navbar;
```
