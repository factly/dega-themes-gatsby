/** @jsx jsx */
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import parseEditorJsData from '@utils/parseEditorJsData';
import FormatPageLayout from '@components/FormatPageLayout';
import { isBrowser } from '@utils/isBrowser';

const CategoryDetailsFormat = ({ data }) => {
  const { degaCategory, allDegaFormat, allDegaPost } = data;


  const header = (item) => {
    return (
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
      >
        <h1
          sx={{
            textAlign: 'center',
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
        >
          {item.name}
        </h1>
        <div
          id="category-description"
          sx={{
            maxHeight: (theme) => ('100%'),
            overflow: 'hidden',
            px: (theme) => `${theme.space.spacing5}`,
          }}
        >
          {parseEditorJsData({ content: item.description })}
        </div>
      </div>
    );
  };
  return (
    <FormatPageLayout
      type="category"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaCategory}
      header={header}
    />
  );
}

export default CategoryDetailsFormat;

export const query = graphql`
  query ($id: String!, $format_id: String!) {
    degaCategory(id: { eq: $id }) {
      description
      id
      medium {
        alt_text
        url
        dimensions
      }
      name
      slug
    }
    allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    allDegaPost(
      filter: {
        categories: { elemMatch: { id: { eq: $id } } }
        format: { id: { eq: $format_id } }
      }
    ) {
      nodes {
        users {
          id
          first_name
          last_name
          display_name
        }
        categories {
          slug
          name
        }
        format {
          name
          slug
        }
        medium {
          alt_text
          url
          dimensions
        }
        published_date
        id
        excerpt
        status
        subtitle
        title
        slug
      }
    }
  }
`;
