import "./App.css";
import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleResetAll = () => {
    // console.log("i am working ...");
    let { counters } = this.state;
    counters = counters.map((counter) => ({ ...counter, value: 0 }));
    // this.setState({ counters: counters });
    this.setState({ counters });
    // console.log(this.state.counters);
  };

  handleIncrement = (counter) => {
    // let count = this.state.count
    // let { count } = this.state;
    // count += 1;
    // // {'count': count} <=> {count}
    // this.setState({ count });

    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value + 1 } : c
    );

    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    console.log("hello");
    // let count = this.state.count
    // let { count } = this.state;
    // count += 1;
    // // {'count': count} <=> {count}
    // this.setState({ count });

    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: c.value - 1 } : c
    );

    this.setState({ counters });
  };

  handleReset = (counter) => {
    // const count = 0;
    // this.setState({ count });
    const counters = this.state.counters.map((c) =>
      c.id === counter.id ? { ...c, value: 0 } : c
    );

    this.setState({ counters });
  };

  handleDelete = (counter) => {
    // const count = 0;
    // this.setState({ count });
    const counters = this.state.counters.filter((c) => c.id !== counter.id);

    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;

    return (
      <div className="container">
        <Navbar counts={counters.length} />
        <Counters
          counters={counters}
          onResetAll={this.handleResetAll}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default App;
