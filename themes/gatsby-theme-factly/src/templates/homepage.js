/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import CategoriesGroup from '../components/CategoriesGroup';

function Homepage({ data }) {
  const { dega } = data;
  return (
    <Layout>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
        }}
      >
        {/* Left sidebar */}
        <div
          className="sidebar"
          sx={{
            display: [null, null, null, null, 'flex'],
            width: [null, null, null, null, '1/4'],
            borderRightWidth: 'px',
            position: 'sticky',
          }}
        >
          <div sx={{ display: 'bblock' }}>
            <div sx={{ mb: 4, pb: 4, px: 6, borderBottomWidth: 'px' }}>
              <h5 className="heading">Categories</h5>
              <CategoriesGroup categories={dega.categories.nodes} />
            </div>
          </div>
        </div>
        {/* Main/ Middle part of the homepage */}
        <div
          className="main-content"
          sx={{ width: ['full', null, '3/4', null, '2/4'], mx: 'auto' }}
        >
          {/* Featured Card */}
          {dega.posts.nodes.length > 0 ? (
            <StoryCard
              cardStyle="featured"
              storyData={dega.posts.nodes[0]}
              // imageSize="w-full h-64"
              imageSize={{ width: 'full', height: 64 }}
            />
          ) : null}

          {/* Articles list */}
          <div sx={{ display: 'flex', flexDirection: 'column', py: 6 }}>
            {dega.posts.nodes.slice(1, 20).map((item, index) => (
              <StoryCard
                key={`homepage-post-${index}`}
                cardStyle="card"
                storyData={item}
                imageSize={{
                  width: ['full', null, '1/3'],
                  height: [48, null, 'full'],
                  py: [4, null, 0],
                }}
              />
            ))}
          </div>
        </div>
        {/* Right sidebar */}
        <div
          className="sidebar"
          sx={{
            display: [null, null, null, 'flex'],
            width: [null, null, null, '2/6', '1/4'],
            borderLeftWidth: 'px',
            position: 'sticky',
          }}
        >
          <div sx={{ display: 'block' }}>
            <div sx={{ mb: 4, pb: 4, px: 6, borderBottomWidth: 'px' }}>
              <h5 className="heading">Recent In Factchecks</h5>
            </div>
            {dega.factchecks.nodes.map((item, index) => (
              <StoryCard
                key={`homepage-factcheck-${index}`}
                cardStyle="vertical"
                storyData={item}
                imageSize={{ height: 40 }}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;

export const query = graphql`
  query($format_factcheck: [Int!], $format_without_factcheck: [Int!], $sid: [Int!]) {
    dega {
      categories(spaces: $sid) {
        nodes {
          id
          slug
          name
        }
      }
      posts: posts(formats: $format_without_factcheck) {
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
          }
          created_at
          id
          status
          subtitle
          title
          slug
          excerpt
        }
      }
      factchecks: posts(formats: $format_factcheck) {
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
          }
          created_at
          id
          status
          subtitle
          title
          slug
        }
      }
    }
  }
`;
