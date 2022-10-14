// imrc
// import React, { Component } from "react";
import React from "react";

// stateless functional component
// sft
// const Counter = (props) => {

const Counter = ({ counter, onReset, onDelete, onDecrement, onIncrement }) => {
  const getBadgeClasses = () => {
    const { value: count } = counter;
    let classes = "badge bg-lg m-2 bg-";
    classes +=
      count % 5 === 0
        ? "danger"
        : count % 5 === 1
        ? "warning"
        : count % 5 === 2
        ? "info"
        : count % 5 === 3
        ? "success"
        : "secondary";

    return classes;
  };

  const getBadgeContext = () => {
    // tenary operator
    //           condition ? true value : false value

    // deconstruction
    // const count = this.state.count;
    // const { count } = this.state;
    const { value: count } = counter;
    return count === 0 ? "Zero" : count;
  };

  return (
    <React.Fragment>
      <div>
        <span className={getBadgeClasses()}>{getBadgeContext()}</span>
        <button
          className="btn btn-primary m-2"
          //   NO BINDING IS NEEDED
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-primary m-2"
          disabled={counter.value === 0}
          //   NO BINDING IS NEEDED
          onClick={() => onDecrement(counter)}
        >
          Decrement
        </button>
        <button
          className="btn btn-secondary m-2"
          onClick={() => onReset(counter)}
          // onClick={this.handleReset2}
        >
          Reset
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => onDelete(counter)}
          // onClick={this.handleReset2}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
};

export default Counter;

// class Counter extends Component {
//   // component without state
//   // controlled componenet

//   //   state = {
//   //     count: this.props.counter.value,
//   //     // styles: {
//   //     //   display: "flex",
//   //     //   flexDirection: "column",
//   //     //   justifyContent: "center",
//   //     //   justifyContent: "space-around",
//   //     //   alignItems: "center",
//   //     // },
//   //   };

//   //   constructor(props) {
//   //     // Call just once at the beginning
//   //     super(props);
//   //     // this.handleIncrease = this.handleIncrement.bind(this);
//   //   }

//   //   NO BINDING IS NEEDED
//   //   handleReset2 = () => {
//   //     const count = 0;
//   //     this.setState({ count });
//   //   };

//   render() {
//     const { counter, onIncrement, onReset } = this.props;

//     return (
//       <React.Fragment>
//         <div>
//           <span className={this.getBadgeClasses()}>
//             {this.getBadgeContext()}
//           </span>
//           <button
//             className="btn btn-primary m-2"
//             //   NO BINDING IS NEEDED
//             onClick={() => onIncrement(counter)}
//           >
//             Count
//           </button>
//           <button
//             className="btn btn-danger m-2"
//             onClick={() => onReset(counter)}
//             // onClick={this.handleReset2}
//           >
//             Reset
//           </button>
//         </div>
//       </React.Fragment>
//     );
//   }

//   getBadgeClasses() {
//     const { value: count } = this.props.counter;
//     let classes = "badge bg-lg m-2 bg-";
//     classes +=
//       count % 5 === 0
//         ? "danger"
//         : count % 5 === 1
//         ? "warning"
//         : count % 5 === 2
//         ? "info"
//         : count % 5 === 3
//         ? "success"
//         : "secondary";

//     return classes;
//   }

//   getBadgeContext() {
//     // tenary operator
//     //           condition ? true value : false value

//     // deconstruction
//     // const count = this.state.count;
//     // const { count } = this.state;
//     const { value: count } = this.props.counter;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;
