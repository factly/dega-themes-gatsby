import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
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
      </Helmet>
      <article>
        <h1 className="text-4xl">
          <strong>{post.title}</strong>
        </h1>
        {post.users.map((user, i, arr) => (
          <React.Fragment key={i}>
            <a href={`/users/${user.id}`}>{`${user.first_name} ${user.last_name}`}</a>
            {arr.length - i > 1 && ','}
          </React.Fragment>
        ))}
        <div>
          <strong>Excerpt</strong>
          <p>{post.excerpt}</p>
          <strong>Description</strong>
          <div
            dangerouslySetInnerHTML={{
              __html: parseEditorJsData(post.description),
            }}
          ></div>
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
        created_at
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
