# Sorting - Moving Responsibilities

- sorting - moving responsibilities
- sorting - extracting table hader
- sorting - extracting table body
- sorting - redering cell content
- sorting - unique keys

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
import _ from "lodash";
import Pagination from "./commons/pagination";
import ListGroup from "./commons/listgroup";
import MoviesTable from "./moviesTable";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    sortColumn: { path: "title", order: "asc" },
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    const defaultGenre = { _id: "All Genres", name: "All Genres" };

    this.setState({
      movies: getMovies(),
      genres: [defaultGenre, ...getGenres()],
      selectedGenre: defaultGenre,
    });
  }

  // MoviesTable handlers
  handleLike = (movie) => {
    const liked = !(movie.liked || false);
    const movies = this.state.movies.map((m) =>
      m._id === movie._id ? { ...m, liked: liked } : { ...m }
    );
    this.setState({ movies });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  // Pagination handlers
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleItemSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    const {
      movies: allMovies,
      genres,
      pageSize,
      sortColumn,
      currentPage,
      selectedGenre,
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id !== "All Genres"
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    const movies = paginate(sorted, currentPage, pageSize);

    if (movies.length === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>Showing {movies.length} movies in the database.</p>
        <div className='row'>
          <div className='col-2'>
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleItemSelect}
            />
          </div>
          <div className='col'>
            <MoviesTable
              movies={movies}
              sortColumn={sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />
            <Pagination
              itemsCount={filteredMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
```

## MoviesTable

```jsx
import React from "react";
import Liked from "./commons/liked";
import TableHeader from "./commons/tableHeader";
import TableBody from "./commons/tableBody";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const colums = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Liked
          item={movie}
          onLike={onLike}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => onDelete(movie)}
          className='btn btn-danger btn-sm'>
          Delete
        </button>
      ),
    },
  ];

  return (
    <table className='table'>
      <TableHeader
        columns={colums}
        sortColumn={sortColumn}
        onSort={onSort}
      />
      <TableBody
        valueProperty='_id'
        items={movies}
        columns={colums}
      />
    </table>
  );
};

export default MoviesTable;
```

## TableBody

```jsx
import React from "react";
import _ from "lodash";

const TableBody = ({ items, columns, valueProperty }) => {
  const renderCell = (item, column) => {
    return _.get(item, column.path) || column.content(item);
  };

  const createKey = (item, column) => {
    return _.get(item, valueProperty) + (column.path + column.key);
  };

  return (
    <tbody>
      {items.map((item) => (
        <tr key={_.get(item, valueProperty)}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.defaultProps = {
  valueProperty: "_id",
};

export default TableBody;
```

## TableHeader

```jsx
import React from "react";
import _ from "lodash";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const styles = {
    cursor: "pointer",
  };

  const raiseSort = (path) => {
    const order =
      sortColumn.order === "asc" && path === sortColumn.path ? "desc" : "asc";

    onSort({ path, order });
  };

  const renderSortIcon = (column) => {
    return (_.get(column, "path") || _.get(sortColumn, "key")) ===
      sortColumn.path ? (
      sortColumn.order === "asc" ? (
        <i className='fa-solid fa-sort-asc' />
      ) : (
        <i className='fa-solid fa-sort-desc' />
      )
    ) : null;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.label || column.key}
            style={styles}
            onClick={() => raiseSort(column.path)}>
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
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

## paginate

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

## ListGroup

```jsx
import React from "react";
import _ from "lodash";

// component interface
const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  // ul.list-group>li.list-group-item

  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={_.get(item, valueProperty)}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }>
          {_.get(item, textProperty)}
        </li>
      ))}
    </ul>
  );
};

// be careful with the spelling
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
```
