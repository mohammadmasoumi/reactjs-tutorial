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
