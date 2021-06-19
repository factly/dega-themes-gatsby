/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import FormatPageLayout from '../components/FormatPageLayout';

function TagDetailsFormat({ data }) {
  const { dega } = data;

  return (
    <FormatPageLayout
      type="tag"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.tag}
    />
  );
}

export default TagDetailsFormat;

export const query = graphql`
  query ($id: Int!, $format_id: Int!) {
    dega {
      tag(id: $id) {
        description
        id
        name
        slug
      }
      formats {
        nodes {
          id
          slug
          name
        }
      }
      posts(tags: [$id], formats: [$format_id]) {
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
  }
`;
