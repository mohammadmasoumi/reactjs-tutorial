// imrc
import React from "react";
import Counter from "./counter";

// cc
const Counters = ({
  counters,
  onResetAll,
  onReset,
  onDelete,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div>
      {/* button.btn.btn-primary.m-2 */}
      <button onClick={() => onResetAll()} className="btn btn-secondary m-2">
        ResetAll
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onReset={onReset}
          onDelete={onDelete}
          onDecrement={onDecrement}
          onIncrement={onIncrement}
        />
        // children
        //   <Counter><div></div></Counter>
      ))}
    </div>
  );
};

export default Counters;

// class Counters extends Component {

//   render() {
//     return (
//       <div>
//         {/* button.btn.btn-primary.m-2 */}
//         <button
//           onClick={() => this.handleResetAll()}
//           className="btn btn-secondary m-2"
//         >
//           ResetAll
//         </button>
//         {this.state.counters.map((counter) => (
//           <Counter
//             key={counter.id}
//             counter={counter}
//             onReset={this.handleReset}
//             onIncrement={this.handleIncrement}
//           />
//           // children
//           //   <Counter><div></div></Counter>
//         ))}
//       </div>
//     );
//   }
// }

// export default Counters;
