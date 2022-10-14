import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  // [1 ... pagesCount].map()
  const pages = _.range(1, pagesCount + 1);

  const getNextAndPreviousClasses = (name) => {
    const isDisabled =
      name === "next" ? currentPage === pagesCount : currentPage === 1;

    return isDisabled ? "page-item disabled" : "page-item";
  };

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className={getNextAndPreviousClasses("previous")}>
          <a
            onClick={() => onPageChange(currentPage - 1)}
            className='page-link'>
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}>
            <a
              onClick={() => onPageChange(page)}
              className='page-link'>
              {page}
            </a>
          </li>
        ))}
        <li className={getNextAndPreviousClasses("next")}>
          <a
            onClick={() => onPageChange(currentPage + 1)}
            className='page-link'>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
