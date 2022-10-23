import React from "react";

const ListGroup = ({ genres, selectedGenre, onChangeGenre }) => {
  return (
    <ul className="list-group">
      {genres.map((genre) => (
        <li
          key={genre._id}
          className={
            selectedGenre === genre
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onChangeGenre(genre)}
        >
          {genre.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
