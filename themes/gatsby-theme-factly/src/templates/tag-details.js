/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsAll = ({ data }) => {
  const { allDegaPost, degaTag, allDegaFormat } = data;
  /**
   * TODO: add description under category name
   */
  return (
    <FormatPageLayout
      type="tag"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaTag}
    />
  );
}

export default TagDetailsAll;

export const query = graphql`
  query ($id: String!) {
    degaTag(degaId: { eq: $id }) {
      description
      id
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
    allDegaPost(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
      nodes {
        users {
          id
          first_name
          last_name
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
