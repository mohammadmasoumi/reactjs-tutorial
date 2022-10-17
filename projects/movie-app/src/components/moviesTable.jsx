import React from "react";
import Liked from "./commons/liked";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const styles = {
    cursor: "pointer",
  };

  handleSort = (path) => {
    const order =
      sortColumn.order === "asc" && path === sortColumn.path ? "desc" : "asc";

    this.setState({
      sortColumn: {
        path,
        order,
      },
    });
  };

  return (
    <table className='table'>
      <thead>
        <tr>
          <th
            style={styles}
            onClick={() => onSort("title")}>
            Title
          </th>
          <th
            style={styles}
            onClick={() => onSort("genre.name")}>
            Genre
          </th>
          <th
            style={styles}
            onClick={() => onSort("numberInStock")}>
            Stock
          </th>
          <th
            style={styles}
            onClick={() => onSort("dailyRentalRate")}>
            Rate
          </th>
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
                onLike={onLike}
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className='btn btn-danger btn-sm'>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
