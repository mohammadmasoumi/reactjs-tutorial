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
