import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      <Outlet />
    </Fragment>
  );
};

export default Home;
