import React from "react";

// props
// liked
// onClick
const Like = ({ item, onClick }) => {
  const renderIcon = () => {
    return item.liked
      ? "fa-solid fa-heart clickable"
      : "fa-regular fa-heart clickable";
  };
  return <i className={renderIcon()} onClick={() => onClick(item)} />;
};

export default Like;
