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
