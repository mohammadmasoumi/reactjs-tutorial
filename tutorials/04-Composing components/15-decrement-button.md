# Decrement Button

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

  handleReset = () => {
    const counters = this.state.counters.map((c) => ({ ...c, value: 0 }));
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : { ...c }
    );
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value - 1 } : { ...c }
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
        <Navbar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main>
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
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
import React from "react";

// destructure props
const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  // const { counter, onIncrement, onDelete } = props;
  const getBadgeclasses = () => {
    let classes = "badge bg-lg bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div className='row'>
      {/* div.col-1+div.col */}
      <div className='col-1'>
        <h2>
          <span className={getBadgeclasses()}>{formatCount()}</span>
        </h2>
      </div>
      <div className='col'>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-lg m-1'>
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className='btn btn-secondary btn-lg m-1'
          disabled={counter.value === 0}>
          -
        </button>
        <button
          onClick={() => onDelete(counter)}
          className='btn btn-danger btn-lg m-1'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

## counters.jsx

```jsx
import React from "react";
import Counter from "./counter";

const Counters = ({
  counters,
  onReset,
  onIncrement,
  onDecrement,
  onDelete,
}) => {
  return (
    <div>
      <button
        onClick={onReset}
        className='btn btn-primary btn-lg m-2'>
        Reset
      </button>
      {counters.map((item) => (
        <Counter
          key={item.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onDelete={onDelete}
          counter={item}
        />
      ))}
    </div>
  );
};

export default Counters;
```

## navbar.jsx

```jsx
import React from "react";

// sfc
// stateless functional component
const Navbar = ({ totalCounters }) => {
  const getBadgeClasses = () => {
    let classes = "badge rounded-pill text-bg-";

    classes +=
      totalCounters === 0 ? "danger" : totalCounters < 2 ? "warning" : "info";

    return classes;
  };

  return (
    <nav className='navbar navbar-light bg-light'>
      <a
        className='navbar-brand'
        href='#'>
        Navbar
        <span className={getBadgeClasses()}>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
```
