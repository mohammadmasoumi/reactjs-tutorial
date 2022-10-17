import React from "react";

// component interface
// columns
// sortColumn
// onSort

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const styles = {
    cursor: "pointer",
  };

  const raiseSort = (path) => {
    const order =
      sortColumn.order === "asc" && path === sortColumn.path ? "desc" : "asc";

    onSort({ path, order });
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
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
