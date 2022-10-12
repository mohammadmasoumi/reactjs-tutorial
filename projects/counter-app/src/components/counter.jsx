import React from "react";

const Counter = ({ counter, onIncrement, onDecrement, onDelete }) => {
  const getBadgeclasses = () => {
    let classes = "badge bg-lg bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div className='row'>
      {/* div.col-1+div.col */}
      <div className='col-1'>
        <h2>
          <span className={getBadgeclasses()}>{formatCount()}</span>
        </h2>
      </div>
      <div className='col'>
        <button
          onClick={() => onIncrement(counter)}
          className='btn btn-secondary btn-lg m-1'>
          +
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className='btn btn-secondary btn-lg m-1'
          disabled={counter.value === 0}>
          -
        </button>
        <button
          onClick={() => onDelete(counter)}
          className='btn btn-danger btn-lg m-1'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
