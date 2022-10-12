import React from "react";

// destructure props
const Counter = ({ counter, onIncrement, onDelete }) => {
  console.log("Counter - Rendered!");

  const getBadgeclasses = () => {
    let classes = "badge m-2 bg-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  };

  return (
    <div>
      <span className={getBadgeclasses()}>{formatCount()}</span>
      <button
        onClick={() => onIncrement(counter)}
        className='btn btn-secondary btn-sm m-2'>
        Increment
      </button>
      <button
        onClick={() => onDelete(counter)}
        className='btn btn-danger btn-sm m-2'>
        Delete
      </button>
    </div>
  );
};

export default Counter;
