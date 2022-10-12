# Updating Phase

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

  constructor(props) {
    super(props);
    console.log("App - constructor!");
    // this.state = this.props.something;
    this.state = this.state;
  }

  componentDidMount() {
    console.log("App - componentDidMount!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App - componentDidUpdate!");
    console.log("prevProps", prevProps);
    console.log("preState", prevState);

    if (prevProps.counters.length !== this.props.counters.length) {
      console.log("Ajax call and get new data from server!");
    }
  }

  // this doesn't work unless Counter component remove it's local state
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

  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  render() {
    console.log("App - render!");
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
import React from "react";

// destructure props
const Counter = ({ counter, onIncrement, onDelete }) => {
  console.log("Counter - Rendered!");

  const getBadgeclasses = () => {
    let classes = "badge m-2 bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div>
      <span className={getBadgeclasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className='btn btn-secondary btn-sm m-2'>
        Increment
      </button>
      <button
        onClick={() => onDelete(counter)}
        className='btn btn-danger btn-sm m-2'>
        Delete
      </button>
    </div>
  );
};

export default Counter;
```

## counters.jsx

```jsx
import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
  console.log("Counters - Rendered!");

  return (
    <div>
      <button
        onClick={onReset}
        className='btn btn-primary btn-sm m-2'>
        Reset
      </button>
      {counters.map((item) => (
        <Counter
          key={item.id}
          onIncrement={onIncrement}
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
  console.log("Navbar - Rendered!");

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

## Output

```txt
App - render!
Navbar - Rendered!
Counters - Rendered!
Counter - Rendered!
Counter - Rendered!
Counter - Rendered!
Counter - Rendered!
App - componentDidUpdate!
```
