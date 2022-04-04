/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import BlogCard from '../components/UI/BlogCard';

const FormatDetails = ({ data }) => {
  const { allDegaPost } = data;

  return (
    <Layout>
      <div sx={{ mx: 'auto', maxWidth: 1560 }}>
        <h1
          sx={{
            mt: (theme) => `${theme.space.layout4}`,
            mb: (theme) => `${theme.space.layout2}`,
            textAlign: 'center',
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
          }}
        >
          {allDegaPost[0]?.format.name}
        </h1>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
            pt: [null, null, null, (theme) => `${theme.space.spacing7}`],
          }}
        >
          {allDegaPost.nodes.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(3,1fr)'],
                gridGap: (theme) => `${theme.space.spacing6}`,
                px: [null, null, (theme) => `${theme.space.spacing6}`],
              }}
            >
              {allDegaPost.nodes.map((item, index) => (
                <BlogCard
                  post={item}
                  key={index}
                  type="basic"
                />
              ))}
            </div>
          ) : (
            <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default FormatDetails;

export const query = graphql`
  query ($id: String!) {
    allDegaPost(filter: { format: { id: { eq: $id } } }) {
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
