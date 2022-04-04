/** @jsx jsx */
import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import parseEditorJsData from '@utils/parseEditorJsData';
import { isBrowser } from '@utils/isBrowser';
import FormatPageLayout from '@components/FormatPageLayout';

const CategoryDetailsAll = ({ data }) => {
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

export default CategoryDetailsAll;

export const query = graphql`
  query ($id: String!) {
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
    allDegaPost(filter: { categories: { elemMatch: { id: { eq: $id } } } }) {
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
        medium {
          alt_text
          url
          dimensions
        }
        format {
          name
          slug
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
