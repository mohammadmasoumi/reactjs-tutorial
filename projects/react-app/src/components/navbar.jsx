import React from "react";

// npm i prop-types
const Navbar = ({ counts }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar <span className="badge bg-info">{counts}</span>
        </a>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  counts: 10,
};

// Navbar.propTypes = {

// }

export default Navbar;

// class Navbar extends Component {
//   state = {};
//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar <span className="badge bg-info">1</span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

// export default Navbar;
