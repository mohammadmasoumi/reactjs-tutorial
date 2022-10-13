import React from "react";

const Liked = ({ item: movie, onLike }) => {
  const getIconClasses = () => {
    let classes = movie.liked ? "fa-regular" : "fa-solid";
    classes += " fa-heart";
    return classes;
  };
  return (
    <i
      onClick={() => onLike(movie)}
      style={{ cursor: "pointer" }}
      className={getIconClasses()}></i>
  );
};

export default Liked;
