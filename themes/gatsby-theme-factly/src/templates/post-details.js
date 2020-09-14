import React from "react";
import { graphql } from "gatsby";
import Post from "../components/Post";

function PostDetails({ data }) {
  const {
    dega: { post },
  } = data;

  return <Post post={post} />;
}

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
          claim_source
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
