# Link

Full page rendering with `anchor` for navigation.

![alt navigation-with-anchor](./resources/navigation-with-anchor.png)

## Navbar

```jsx
import React from "react";
import { Link } from "react-router-dom";

// select all occurences
// ctrl + shift + L

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/products'>Products</Link>
      </li>
      <li>
        <Link to='/posts/2018/06'>Posts</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;
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
