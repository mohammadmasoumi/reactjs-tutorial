# Pagination Type Checking With prop-types

## Dependencies

```bash
npm i lodash
npm i prop-types
```

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
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    currentPage: 1,
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

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { movies: allMovies, pageSize, currentPage } = this.state;
    const movies = paginate(allMovies, currentPage, pageSize);

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
            {movies.map((movie) => (
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
          itemsCount={"abc"}
          pageSize={pageSize}
          currentPage={currentPage}
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
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  // [1 ... pagesCount].map()
  const pages = _.range(1, pagesCount + 1);

  const getNextAndPreviousClasses = (name) => {
    const isDisabled =
      name === "next" ? currentPage === pagesCount : currentPage === 1;

    return isDisabled ? "page-item disabled" : "page-item";
  };

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className={getNextAndPreviousClasses("previous")}>
          <a
            onClick={() => onPageChange(currentPage - 1)}
            className='page-link'>
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}>
            <a
              onClick={() => onPageChange(page)}
              className='page-link'>
              {page}
            </a>
          </li>
        ))}
        <li className={getNextAndPreviousClasses("next")}>
          <a
            onClick={() => onPageChange(currentPage + 1)}
            className='page-link'>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
```

## Paginate

```jsx
import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  // lodash object
  // _(items)

  // object list
  // .value()

  return _(items).slice(startIndex).take(pageSize).value();
}
```
