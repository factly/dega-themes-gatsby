/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import FormatPageLayout from '../components/FomatPageLayout';
function UserDetailsFormat({ data }) {
  const { dega } = data;
  const header = (item) => (
    <>
      <h1 sx={{ textAlign: 'center', fontSize: 4, mb: 4, textTransform: 'capitalize' }}>
        {`${item.first_name} ${item.last_name}`}
      </h1>
      <p sx={{ textAlign: 'center', pb: 4 }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit iste nulla ipsum, earum
        pariatur quos debitis unde, accusantium quod quaerat modi atque corporis! Facilis officia
        illum deserunt amet placeat quia!
      </p>
      <div sx={{ textAlign: 'center', fontSize: 4, mb: 4 }}>
        Mail:<a href={`mailto:${item.email}`}> {item.email}</a>
      </div>
    </>
  );
  return (
    <FormatPageLayout
      type="users"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.user}
      header={header}
    />
  );
}

export default UserDetailsFormat;

export const query = graphql`
  query($id: Int!, $format_id: Int!, $sid: [Int!]) {
    dega {
      user(id: $id) {
        id
        first_name
        last_name
        email
      }
      formats(spaces: $sid) {
        nodes {
          id
          slug
          name
        }
      }
      posts(users: [$id], formats: [$format_id], spaces: $sid) {
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
          created_at
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
