/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout/index';
import StoryCard from '../components/UI/StoryCard';

function FormatDetails({ data }) {
  const { dega } = data;
  const filteredPosts = dega.posts.nodes.filter((post) => post.published_date !== null);
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
          {filteredPosts[0]?.format.name}
        </h1>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            pb: (theme) => `${theme.space.spacing6}`,
            pt: [null, null, null, (theme) => `${theme.space.spacing7}`],
          }}
        >
          {filteredPosts.length > 0 ? (
            <div
              sx={{
                display: 'grid',
                gridTemplateColumns: ['1fr', null, 'repeat(2, 1fr)', 'repeat(3,1fr)'],
                gridGap: (theme) => `${theme.space.spacing6}`,
                px: [null, null, (theme) => `${theme.space.spacing6}`],
              }}
            >
              {filteredPosts.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="iframely"
                  storyData={item}
                  excerpt={item.format.slug !== 'fact-check'}
                  imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-4"
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
  query ($id: Int!) {
    dega {
      posts(formats: { ids: [$id] }) {
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
