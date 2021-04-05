/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import FormatPageLayout from '../components/FormatPageLayout';

function TagDetailsFormat({ data }) {
  const { dega } = data;

  return (
    <FormatPageLayout
      type="tags"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.tag}
    />
  );
}

export default TagDetailsFormat;

export const query = graphql`
  query($id: Int!, $format_id: Int!, $sid: [Int!]) {
    dega {
      tag(id: $id) {
        description
        id
        name
        slug
      }
      formats(spaces: $sid) {
        nodes {
          id
          slug
          name
        }
      }
      posts(tags: [$id], formats: [$format_id], spaces: $sid) {
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
