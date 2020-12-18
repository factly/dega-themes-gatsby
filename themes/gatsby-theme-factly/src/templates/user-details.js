import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';
import Tabs from '../components/Tabs';
import User from '../components/User';

function UserDetailsAll({ data }) {
  const { dega } = data;

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto lg:-mt-8">
          <div className="flex flex-col pb-6">
            <Tabs baseUrl={`/users/${dega.user.id}`} />
            <div>
              {dega.posts.nodes.map((item, index) => (
                <StoryCard
                  key={index}
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
          <User
            user={{
              display_name: dega.user ? dega.user.first_name + ' ' + dega.user.last_name : '',
              medium: {
                url: { raw: 'https://source.unsplash.com/150x150?person' },
                alt_text: 'Author Image',
              },
              email: dega.user ? dega.user.email : '',
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default UserDetailsAll;

export const query = graphql`
  query($id: Int!) {
    dega {
      user(id: $id) {
        id
        first_name
        last_name
        email
      }
      posts(users: [$id]) {
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
