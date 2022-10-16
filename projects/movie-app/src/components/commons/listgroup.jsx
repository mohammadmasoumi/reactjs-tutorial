import React from "react";
import _ from "lodash";

// component interface
const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  // ul.list-group>li.list-group-item

  return (
    <ul className='list-group'>
      {items.map((item) => (
        <li
          key={_.get(item, valueProperty)}
          onClick={() => onItemSelect(item)}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }>
          {_.get(item, textProperty)}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
