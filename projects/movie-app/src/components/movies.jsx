import React, { Component } from "react";
import Liked from "./commons/liked";
import Pagination from "./commons/pagination";
import ListGroup from "./commons/listgroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    // Why empty list?
    genres: [],
    currentPage: 1,
    pageSize: 4,
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
    });
  }

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

    const filteredMovies = selectedGenre
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
