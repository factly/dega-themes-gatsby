import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import Tabs from '../components/Tabs';
import Category from '../components/Category';

function CategoryDetailsFormat({ data }) {
  const { dega } = data;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto lg:-mt-8">
          <div className="flex flex-col pb-6">
            <Tabs baseUrl={`/categories/${dega.category.slug}`} />
            <div>
              {dega.posts.nodes.map((item, index) => (
                <StoryCard
                  cardStyle="basic"
                  storyData={item}
                  excerpt
                  imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col order-1 lg:order-2 w-full lg:w-2/5 border-l pt-10 lg:pt-20 top-0 h-auto lg:h-screen static lg:sticky overflow-y-hidden">
          <Category
            category={{
              name: dega.category.name,
              medium: {
                url: 'https://source.unsplash.com/150x150?person',
                alt_text: 'Category Image',
              },
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default CategoryDetailsFormat;

export const query = graphql`
  query($id: Int!, $format_id: Int!) {
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
      posts(categories: [$id], formats: [$format_id]) {
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
