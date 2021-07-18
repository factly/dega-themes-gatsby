/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsFormat=({ data }) =>{
  const { allDegaPost, degaTag, allDegaFormat } = data;

  return (
    <FormatPageLayout
      type="tag"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaTag}
    />
  );
}

export default TagDetailsFormat;

export const query = graphql`
  query ($id: String!, $format_id: String!) {
    degaTag(id: { eq: $id }) {
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
    allDegaPost(
      filter: { tags: { elemMatch: { id: { eq: $id } } }, format: { id: { eq: $format_id } } }
    ) {
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
        status
        subtitle
        title
        excerpt
        slug
      }
    }
  }
`;
