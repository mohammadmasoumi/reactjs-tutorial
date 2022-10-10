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
