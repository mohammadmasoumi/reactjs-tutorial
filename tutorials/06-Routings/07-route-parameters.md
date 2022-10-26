# Route Parameters

## Shows product's detail under product page!

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
              element={<Products />}>
              <Route
                path=':productId'
                element={<ProductDetails />}
              />
            </Route>
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
import { Link, Outlet } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  render() {
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
        <Outlet />
      </div>
    );
  }
}

export default Products;
```

## ProductDetails

```jsx
import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  render() {
    return (
      <div>
        <h1>Product Details - </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
```

## Shows product's detail stand alone!

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
              element={<Products />}
            />
            <Route
              path='/products/:productId'
              element={<ProductDetails />}
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
import { Link, Outlet } from "react-router-dom";

class Products extends Component {
  state = {
    products: [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ],
  };

  render() {
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
        <Outlet />
      </div>
    );
  }
}

export default Products;
```

## ProductDetails

```jsx
import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  render() {
    return (
      <div>
        <h1>Product Details - </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
```
