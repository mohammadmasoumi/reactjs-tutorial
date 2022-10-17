import React from "react";
import Liked from "./commons/liked";
import TableHeader from "./commons/tableHeader";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const colums = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" },
  ];

  return (
    <table className='table'>
      <TableHeader
        columns={colums}
        sortColumn={sortColumn}
        onSort={onSort}
      />

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
