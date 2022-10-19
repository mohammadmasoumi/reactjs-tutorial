# Nested Routing

## App.js

```jsx
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='content'>
          <Routes>
            <Route
              path='/'
              element={<Home />}>
              <Route
                path='/products'
                element={<Products />}
              />
              <Route
                path='/posts'
                element={<Posts />}
              />
              <Route
                path='/admin'
                element={<Dashboard />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
```

## Home

```jsx
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <h1>Home</h1>
      {/* Load child router in nested routers */}
      <Outlet />
    </Fragment>
  );
};

export default Home;
```
