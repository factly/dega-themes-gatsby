/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Seo from '@components/Seo';
import StoryCard from '@components/UI/StoryCard';
import Layout from '@components/Layout';

function Homepage({ data }) {
  const { degaSpace, allDegaCategory, factchecks, posts } = data;
  return (
    <Layout>
      <Seo title={degaSpace.site_title} canonical={degaSpace.site_address} type="website" />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
        }}
      >
        {/* Main/ Middle part of the homepage */}
        <div
          className="main-content"
          sx={{ width: ['full', null, '3/4', null, '2/4'], mx: 'auto' }}
        >
          {/* Featured Card */}
          {posts.nodes.length > 0 ? (
            <StoryCard
              cardStyle="featured"
              storyData={posts.nodes[0]}
              // imageSize="w-full h-64"
              imageSize={{ width: 'full', height: 64 }}
            />
          ) : null}

          {/* Articles list */}
          <div
            sx={{
              display: 'flex',
              flexDirection: 'column',
              py: (theme) => `${theme.space.spacing6}`,
            }}
          >
            {posts.nodes.slice(1, 20).map((item, index) => (
              <StoryCard
                key={`homepage-post-${index}`}
                cardStyle="card"
                storyData={item}
                imageSize={{
                  width: ['full', null, '1/3'],
                  height: [48, null, 'full'],
                  py: [(theme) => `${theme.space.spacing6}`, null, 0],
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
            <div
              sx={{
                mb: (theme) => `${theme.space.spacing5}`,
                py: (theme) => `${theme.space.spacing5}`,
                px: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: 'px',
              }}
            >
              <h5 className="heading">Recent In Factchecks</h5>
            </div>
            {factchecks.nodes.map((item, index) => (
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
