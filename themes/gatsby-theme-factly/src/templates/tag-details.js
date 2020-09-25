import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import Tabs from '../components/Tabs';

function Tag({ data }) {
  const { dega } = data;

  return (
    <Layout>
      <div className="mx-auto lg:-mt-8" style={{ maxWidth: '1024px' }}>
        <div className="flex flex-col pb-6 lg:pt-16">
          <h2 className="text-center my-4">Browsing: {dega.tag.name}</h2>
          <Tabs baseUrl={`/tags/${dega.tag.slug}`} />
          <div className="grid grid-cols-1 md:grid-cols-2">
            {dega.posts.nodes.map((item, i) => (
              <StoryCard
                key={i}
                cardStyle="basic"
                storyData={item}
                excerpt
                imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tag;

export const query = graphql`
  query($id: Int!) {
    dega {
      tag(id: $id) {
        description
        id
        name
        slug
      }
      posts(tags: [$id]) {
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
