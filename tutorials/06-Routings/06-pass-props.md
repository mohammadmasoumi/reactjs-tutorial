# Link

Full page rendering with `anchor` for navigation.

![alt navigation-with-anchor](./resources/navigation-with-anchor.png)

## App

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
              element={<Products customProp='product_id' />}
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

## Products

```jsx
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  render() {
    console.log("Passed props:", this.props.customProp);
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {this.state.products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Products;
```
