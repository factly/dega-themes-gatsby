/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import { Link } from 'gatsby';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';


const Pagination = props => {
  const {
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  let lastPage = paginationRange[paginationRange.length - 1];
  return (

    <div
      className={classnames('pagination-container', { [className]: className })}
    >
      <Link
        className={classnames('pagination-item', {
          disabled: currentPage === 1
        })}
        to={currentPage === 2 ? '/blog' : `/blog/${currentPage - 1}`}
      >

        <div><BsArrowLeftShort /></div>
        <span sx={{ display: ['none', null, 'block'] }}>Previous</span>
      </Link>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <Link
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            to={pageNumber === 1 ? '/blog' : `/blog/${pageNumber}`}
          >
            {pageNumber}
          </Link>
        );
      })}
      <Link
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        to={`/blog/${currentPage + 1}`}
      >
        <span sx={{ display: ['none', null, 'block'] }}>Next</span>
        <div><BsArrowRightShort /></div>
      </Link>
    </div>

  );
};

export default Pagination;
