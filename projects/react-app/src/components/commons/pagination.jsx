import React from "react";
import _ from "lodash";

// itemCount
// pageSize
// currentPage
// onChangePage

const Pagination = ({ itemCount, pageSize, currentPage, onChangePage }) => {
  const pageCount = _.ceil(itemCount / pageSize);
  const pageRange = _.range(1, pageCount + 1);

  const getPageClasses = (page) => {
    return page === currentPage ? "page-link active" : "page-link";
  };

  if (pageCount === 1) return null;

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pageCount > 1 && (
          <li className="page-item">
            <a
              className={currentPage === 1 ? "page-link disabled" : "page-link"}
              onClick={() => onChangePage(currentPage - 1)}
            >
              Previous
            </a>
          </li>
        )}
        {pageCount > 1 &&
          pageRange.map((page) => (
            <li key={page} className="page-item">
              <a
                className={getPageClasses(page)}
                onClick={() => onChangePage(page)}
              >
                {page}
              </a>
            </li>
          ))}
        {pageCount > 1 && (
          <li className="page-item">
            <a
              className={
                currentPage === pageCount ? "page-link disabled" : "page-link"
              }
              onClick={() => onChangePage(currentPage + 1)}
            >
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
