import React from "react";
import _ from "lodash";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const styles = {
    cursor: "pointer",
  };

  const raiseSort = (path) => {
    const order =
      sortColumn.order === "asc" && path === sortColumn.path ? "desc" : "asc";

    onSort({ path, order });
  };

  const renderSortIcon = (column) => {
    return (_.get(column, "path") || _.get(sortColumn, "key")) ===
      sortColumn.path ? (
      sortColumn.order === "asc" ? (
        <i className='fa-solid fa-sort-asc' />
      ) : (
        <i className='fa-solid fa-sort-desc' />
      )
    ) : null;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.label || column.key}
            style={styles}
            onClick={() => raiseSort(column.path)}>
            {column.label}
            {renderSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
