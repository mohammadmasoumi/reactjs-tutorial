# Default Routing

## App

Adding a **"No Match"** Route

The **"\*"** has special meaning here. It will match only when no other routes do.

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
              element={<Home />}
            />
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
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
```
