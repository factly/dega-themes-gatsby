/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import { navigate } from '@reach/router';
import Pagination from './Pagination';

const Pager = ({ data }) => {
  const {
    humanPageNumber,
    limit,
    numberOfPages,
    pageNumber,
    skip } = data;

  const handlePageClick = (event) => {
    navigate(event.selected === 0 ? '/personal-embryo-adoption-stories/' : `/personal-embryo-adoption-stories/${event.selected + 1}/`)
  }
  return (
    <div sx={{
      maxWidth: '1400px',
      mx: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      px: '48px',
      pt: '3rem',
      pb: ['3rem', null, '5rem'],
      a: { 'color': '#667085' }
    }}>

      <div sx={{
        display: ['none', null, 'block'],
        width: '100%',
        ul: {
          listStyleType: 'none',
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        },

        a: {
          color: '#DEDBEE',
          px: '14px',
          py: '10px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          '&:hover': {
            color: '#FFFFFF',
          }
        },
        '.next': {
          ml: 'auto'
        },
        '.previous': {
          mr: 'auto'
        },
        '.disabled': {
          cursor: 'not-allowed'
        }
      }}>
        <Pagination onPageChange={handlePageClick} totalCount={numberOfPages * limit} siblingCount={1} currentPage={humanPageNumber} pageSize={limit} />
      </div>

      {/* mobile */}

      <div sx={{
        display: ['block', null, 'none'],
        width: '100%',
        ul: {
          listStyleType: 'none',
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        },

        a: {
          color: '#667085;',
          px: '14px',
          py: '10px',
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          '&:hover': {
            color: '#FFFFFF',
          }
        },
        '.next': {
          ml: 'auto'
        },
        '.previous': {
          mr: 'auto'
        },
        '.disabled': {
          cursor: 'not-allowed'
        }
      }}>
        <Pagination onPageChange={handlePageClick} totalCount={numberOfPages * limit} siblingCount={1} currentPage={humanPageNumber} pageSize={limit} />
      </div>
    </div>
  )
}

export default Pager