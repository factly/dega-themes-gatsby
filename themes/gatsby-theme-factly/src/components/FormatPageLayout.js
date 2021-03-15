/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from './Layout';
import StoryCard from './StoryCard';

const FormatPageLayout = ({ type, posts, formats, item, header, useSlug = true }) => {
  const slug = useSlug ? item.slug : item.id;
  const defaultHeader = (item) => (
    <h1 sx={{ textAlign: 'center', fontSize: [5, 6], mb: 4, textTransform: 'capitalize' }}>
      {item.name}
    </h1>
  );
  return (
    <Layout>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', null, null, 'row'],
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
        }}
      >
        <div
          className="main-content"
          sx={{ order: [2, null, null, null, 1], width: [null, null, null, '3/5'], mx: 'auto' }}
        >
          <div sx={{ display: 'flex', flexDirection: 'column', pb: 6 }}>
            {header ? header(item) : defaultHeader(item)}
            <div
              className="tabs"
              sx={{
                lineHeight: '18.4px',
                overflow: 'auto',
                overflowX: 'auto',
                overflowY: 'auto',
                textAlign: 'center',
                textRendering: 'optimizelegibility',
                whiteSpace: 'nowrap',
                borderBottom: '1px solid #919191',
                marginBottom: '1rem',
              }}
            >
              <ul
                sx={{
                  fontSize: ' inherit',
                  fontFamily: 'inherit',
                  margin: 0,
                  padding: 0,
                  border: 0,
                  lineHeight: 'inherit',
                  listStyle: 'none',
                  display: 'inline-flex',
                  maxWidth: '100vw',
                  li: {
                    fontSize: '16px',
                    fontWeight: 700,
                    hyphens: 'auto',
                    lineHeight: '16.8px',
                    marginBottom: '0px',
                    marginRight: '16px',
                    marginLeft: '16px',
                    marginTop: '0px',
                    paddingBottom: '14px',
                    paddingLeft: '0px',
                    paddingRight: '0px',
                    paddingTop: '16px',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  },
                }}
              >
                <li>
                  <Link to={`/${type}/${slug}`} activeClassName="active">
                    All
                  </Link>
                </li>
                {formats.map((tab, index) => (
                  <li key={index}>
                    <Link to={`/${type}/${slug}/formats/${tab.slug}`} activeClassName="active">
                      {tab.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* <Tabs baseUrl={`/categories/${dega.category.slug}`} /> */}
            {posts.length > 0 ? (
              <div
                sx={{
                  display: 'grid',
                  gridTemplateColumns: ['1fr', '1fr', 'repeat(2,1fr)'],
                  gridGap: '0.5rem',
                }}
              >
                {posts.map((item, index) => (
                  <StoryCard
                    key={index}
                    cardStyle="iframely"
                    storyData={item}
                    excerpt={item.format.slug !== 'fact-check'}
                  />
                ))}
              </div>
            ) : (
              <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FormatPageLayout;
