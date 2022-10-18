import React from "react";
import Liked from "./commons/liked";
import Table from "./commons/table";

const MoviesTable = ({ movies, sortColumn, onLike, onDelete, onSort }) => {
  const columns = [
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
    <Table
      data={movies}
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
    />
  );
};

export default MoviesTable;
