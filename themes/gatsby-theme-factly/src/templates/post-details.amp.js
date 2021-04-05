/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import parseEditorJsData from '../utils/parseEditorJsData';
import LayoutAmp from '../components/Layout.amp';

const PostDetails = ({ data }) => {
  const {
    dega: { post },
  } = data;
  return (
    <LayoutAmp>
      <Helmet>
        <html lang="en" amp />
        <title>{post.title}</title>
        {/* <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
        <script async custom-element="amp-facebook" src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js"></script>
        <script async custom-element="amp-instagram" src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"></script>
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script> */}
        {/* <script async custom-element="amp-pinterest" src="https://cdn.ampproject.org/v0/amp-pinterest-0.1.js"></script> */}
      </Helmet>
      <article>
        <h1 sx={{ fontSize: 7 }}>
          <strong>{post.title}</strong>
        </h1>
        {post.users.map((user, i, arr) => (
          <div key={i}>
            By <a href={`/users/${user.id}`}>{`${user.first_name} ${user.last_name}`}</a>
            {arr.length - i > 1 && ','}
          </div>
        ))}
        <div>
          <strong>Excerpt</strong>
          <p>{post.excerpt}</p>
          <strong>Description</strong>
          <div className="parsed">
            {parseEditorJsData({ content: post.description, scripts: true, amp: true })}
          </div>
        </div>
      </article>
    </LayoutAmp>
  );
};

export default PostDetails;

export const query = graphql`
  query($id: Int!) {
    dega {
      post(id: $id) {
        published_date
        description
        excerpt
        id
        schemas
        slug
        status
        subtitle
        title
        updated_at
        users {
          email
          first_name
          last_name
          id
        }
        tags {
          id
          name
          slug
          description
        }
        medium {
          alt_text
          id
          url
        }
        format {
          name
          slug
          id
          description
        }
        claims {
          checked_date
          claim_date
          claim_sources
          claimant {
            description
            id
            name
            slug
            tag_line
          }
          description
          id
          review
          review_sources
          review_tag_line
          slug
          title
          rating {
            description
            id
            name
            numeric_value
            slug
            medium {
              alt_text
              id
              url
            }
          }
        }
        categories {
          description
          created_at
          id
          name
          slug
          medium {
            alt_text
            id
            url
          }
        }
      }
    }
  }
`;
