import React, { Component } from "react";
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

  handleSort = (path) => {
    console.log(path);
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
      currentPage,
      selectedGenre,
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id !== "All Genres"
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

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
