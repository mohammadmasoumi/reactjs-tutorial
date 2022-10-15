# Pagination Component Interface

## App

```jsx
import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <main className='container'>
        <Movies />
      </main>
    );
  }
}

export default App;
```

## Movies

```jsx
import React, { Component } from "react";
import Liked from "./commons/liked";
import Pagination from "./commons/pagination";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    // HandleToggleLike
    const liked = !(movie.liked || false);
    const movies = this.state.movies.map((m) =>
      m._id === movie._id ? { ...m, liked: liked } : { ...m }
    );
    this.setState({ movies });
  };

  handlePageChange = () => {
    console.log("handlePageChange Called!");
  };

  render() {
    const { movies, pageSize } = this.state;
    const { length: count } = movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Liked
                    item={movie}
                    onLike={this.handleLike}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className='btn btn-danger btn-sm'>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
```

## Pagination

```jsx
import React from "react";

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  // detemine component interface
  return null;
};

export default Pagination;
```

## Like

```jsx
import React from "react";

const Liked = ({ item: movie, onLike }) => {
  // icons => fa-solid
  // icons-o(empty) => fa-regular
  const getIconClasses = () => {
    let classes = movie.liked ? "fa-regular" : "fa-solid";
    classes += " fa-heart";
    return classes;
  };
  return (
    <i
      onClick={() => onLike(movie)}
      style={{ cursor: "pointer" }}
      className={getIconClasses()}></i>
  );
};

export default Liked;
```
