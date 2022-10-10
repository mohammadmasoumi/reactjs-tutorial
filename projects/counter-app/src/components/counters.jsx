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
