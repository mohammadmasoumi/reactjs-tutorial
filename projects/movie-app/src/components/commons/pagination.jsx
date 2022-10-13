import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  // [1 ... pagesCount].map()

  return (
    <nav aria-label='Page navigation example'>
      <ul className='pagination'>
        <li className='page-item'>
          <a className='page-link'>Previous</a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className='page-item'>
            <a className='page-link'>{page}</a>
          </li>
        ))}
        <li className='page-item'>
          <a className='page-link'>Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
