import React from "react";
import _ from "lodash";

const TableBody = ({ items, columns, valueProperty }) => {
  const renderCell = (item, column) => {
    return _.get(item, column.path) || column.content(item);
  };

  const createKey = (item, column) => {
    return _.get(item, valueProperty) + (column.path + column.key);
  };

  return (
    <tbody>
      {items.map((item) => (
        <tr key={_.get(item, valueProperty)}>
          {columns.map((column) => (
            <td key={createKey(item, column)}>{renderCell(item, column)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBody.defaultProps = {
  valueProperty: "_id",
};

export default TableBody;
