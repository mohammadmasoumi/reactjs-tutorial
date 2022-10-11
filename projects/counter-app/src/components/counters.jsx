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
