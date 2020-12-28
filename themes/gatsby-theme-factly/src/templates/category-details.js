/** @jsx jsx */
import React from 'react';
import { graphql, Link } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import Tabs from '../components/Tabs';
import Category from '../components/Category';

function CategoryDetailsAll({ data }) {
  const { dega } = data;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto">
          <div className="flex flex-col pb-6">
            <h1 sx={{ textAlign: 'center', fontSize: 8, mb: 4, textTransform: 'capitalize' }}>
              {dega.category.name}
            </h1>
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
                  <Link to={`/categories/${dega.category.slug}`} activeClassName="active">
                    All
                  </Link>
                </li>
                {data.dega.formats.nodes.map((tab, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={`/categories/${dega.category.slug}/formats/${tab.slug}`}
                        activeClassName="active"
                      >
                        {tab.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <Tabs baseUrl={`/categories/${dega.category.slug}`} /> */}
            {dega.posts.nodes.length > 0 ? (
              <div
                sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gridGap: '0.5rem' }}
              >
                {dega.posts.nodes.map((item, index) => (
                  <StoryCard
                    key={index}
                    cardStyle="iframely"
                    storyData={item}
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-4"
                  />
                ))}
              </div>
            ) : (
              <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
            )}
          </div>
        </div>
        {/* <div sx={{display:'grid', gridTemplateColumns:'repeat(2,1fr)', gridGap:'0.5rem'}}>
              {dega.posts.nodes.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="iframely-small"
                  storyData={item}
                  excerpt
                  imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-4"
                />
              ))}
            </div> */}
        {/* <div className="flex flex-col order-1 lg:order-2 w-full lg:w-2/5 border-l pt-10 lg:pt-20 top-0 h-auto lg:h-screen static lg:sticky overflow-y-hidden">
          <Category
            category={{
              name: dega.category.name,
              medium: {
                url: { raw: 'https://source.unsplash.com/150x150?person' },
                alt_text: 'Category Image',
              },
            }}
          />
        </div> */}
      </div>
    </Layout>
  );
}

export default CategoryDetailsAll;

export const query = graphql`
  query($id: Int!, $sid: [Int!]) {
    dega {
      category(id: $id) {
        description
        id
        medium {
          alt_text
          url
        }
        name
        slug
      }
      formats(spaces: $sid) {
        nodes {
          id
          slug
          name
        }
      }
      posts(categories: [$id], spaces: $sid) {
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
          format {
            name
          }
          created_at
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
