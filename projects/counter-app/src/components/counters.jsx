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
