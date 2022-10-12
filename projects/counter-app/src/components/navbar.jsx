import React from "react";

// sfc
// stateless functional component
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered!");

  const getBadgeClasses = () => {
    let classes = "badge rounded-pill text-bg-";

    classes +=
      totalCounters === 0 ? "danger" : totalCounters < 2 ? "warning" : "info";

    return classes;
  };

  return (
    <nav className='navbar navbar-light bg-light'>
      <a
        className='navbar-brand'
        href='#'>
        Navbar
        <span className={getBadgeClasses()}>{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
