import React from "react";
import Counter from "./counter";

const Counters = ({ counters, onReset, onDelete, onIncrement }) => {
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
