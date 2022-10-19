# Adding Routing

## App.js

First things first, we want to connect your app to the browser's URL: import `BrowserRouter` and render it around your whole app.

- What component should be rendered with provided URL pattern
- Smart routing - No ordering
- One component

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
        {/* What should render with provided URL */}
        {/* Smart routing - no ordering */}
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
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
```

## Index

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
// abbreviation
// import { BrowserRouter } from 'rrd';
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // wraps history object in browsers and
  // pass it down to the component tree
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

## Caveat

- `Routers` take no children other than `Route` and `React.Fragment`

  `[Home]` is not a `<Route>` component. All component children of `<Routes>` must be a `<Route>` or `<React.Fragment>`

```jsx
<Routes>
  <Route
    path='/'
    //   element={<Home />}
  >
    <Home />
  </Route>
</Routes>
```

- No default route

  No routes matched location `"/posts/2018/06"`

- No `/` is needed at start of the URL

```jsx
<Routes>
  <Route
    path='/'
    element={<Home />}
  />
  <Route
    path='products'
    element={<Products />}
  />
  <Route
    path='posts'
    element={<Posts />}
  />
  <Route
    path='admin'
    element={<Dashboard />}
  />
</Routes>
```
