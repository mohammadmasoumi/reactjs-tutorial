import React, { Component, Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Like from "./commons/like";
import Pagination from "./commons/pagination";
import { getMovies } from "./../services/fakeMovieService";
import { paginate } from "./../utils/paginate";
import ListGroup from "./commons/listgroup";
import { getGenres } from "../services/fakeGenreService";
import { notify } from "./../utils/notify";
import _ from "lodash";

class MoviesTable extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  /*
  Lifecycle
  - constructor
  - render
  - componentDidMount
  */
  componentDidMount() {
    const defaultGenre = { _id: "All Genres", name: "All Genres" };
    this.setState({
      movies: getMovies(),
      genres: [defaultGenre, ...getGenres()],
      selectedGenre: defaultGenre,
    });
  }

  handleLike = (movie) => {
    // toggle
    const { movies } = this.state;
    const newMovies = movies.map((m) =>
      m._id === movie._id ? { ...m, liked: !m.liked } : m
    );
    this.setState({ movies: newMovies });
  };

  handleDelete = (movie) => {
    const { movies } = this.state;
    const newMovie = movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovie });
    notify();
  };

  handleChangePage = (currentPage) => {
    this.setState({ currentPage });
  };

  handleChangeGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  handleSort = (path) => {
    const { sortColumn } = this.state;
    const newSortColumn = {
      path: path,
      order:
        sortColumn.path == path
          ? sortColumn.order === "asc"
            ? "desc"
            : "asc"
          : "asc",
    };

    this.setState({ sortColumn: newSortColumn });
  };

  renderSortIcon = (path) => {
    const { sortColumn } = this.state;
    return path === sortColumn.path ? (
      sortColumn.order === "asc" ? (
        <i className="fa-solid fa-sort-asc" />
      ) : (
        <i className="fa-solid fa-sort-desc" />
      )
    ) : null;
  };

  render() {
    const { movies, pageSize, currentPage, genres, selectedGenre, sortColumn } =
      this.state;
    const filteredMovies =
      selectedGenre && selectedGenre._id != "All Genres"
        ? movies.filter((movie) => movie.genre.name === selectedGenre.name)
        : movies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );
    const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);

    if (movies.length === 0) return <p>There are no movies in the database.</p>;

    return (
      // ctrl + shift + l
      <Fragment>
        <p>Showing {filteredMovies.length} in the database.</p>
        {/* div.row>div.col-1+div.col */}
        <div className="row">
          <div className="col-2">
            <ListGroup
              genres={genres}
              selectedGenre={selectedGenre}
              onChangeGenre={this.handleChangeGenre}
            />
          </div>
          <div className="col">
            <table className="table">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="clickable"
                    onClick={() => this.handleSort("title")}
                  >
                    Title {this.renderSortIcon("title")}
                  </th>
                  <th
                    scope="col"
                    className="clickable"
                    onClick={() => this.handleSort("genre.name")}
                  >
                    Genre {this.renderSortIcon("genre.name")}
                  </th>
                  <th
                    scope="col"
                    className="clickable"
                    onClick={() => this.handleSort("numberInStock")}
                  >
                    Stock {this.renderSortIcon("numberInStock")}
                  </th>
                  <th
                    scope="col"
                    className="clickable"
                    onClick={() => this.handleSort("dailyRentalRate")}
                  >
                    Rate {this.renderSortIcon("dailyRentalRate")}
                  </th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {paginatedMovies.map((movie) => (
                  <tr key={movie._id}>
                    <th scope="row">{movie.title}</th>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like item={movie} onClick={this.handleLike} />
                    </td>

                    <td>
                      {/* button.btn.btn-danger */}
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(movie)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemCount={sortedMovies.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onChangePage={this.handleChangePage}
            />
          </div>
        </div>

        <ToastContainer
          className="toast-position"
          position="bottom-left"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Fragment>
    );
  }
}

export default MoviesTable;
