/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import FormatPageLayout from '../components/FormatPageLayout';

function TagDetailsAll({ data }) {
  const { dega } = data;
  /**
   * TODO: add description under category name
   */
  return (
    <FormatPageLayout
      type="tag"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.tag}
    />
  );
}

export default TagDetailsAll;

export const query = graphql`
  query ($id: Int!) {
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
      posts(tags: { ids: [$id] }) {
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
  }
`;
