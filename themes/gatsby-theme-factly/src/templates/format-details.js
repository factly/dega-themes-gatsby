/** @jsx jsx */
import React from 'react';
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import StoryCard from '../components/StoryCard';


function FormatDetails({ data }) {
  const { dega } = data;
  return (
    <Layout>
      <div className="mx-auto" style={{ maxWidth: '1024px' }}>
      <h1 sx={{marginTop:'4.5rem', textAlign:'center',fontSize:'3rem'}}>{dega.posts.nodes[0].format.name}</h1>
        <div className="flex flex-col pb-6 lg:pt-8">
         { dega.posts.nodes.length>0 ?(<div sx={{display:'grid', gridTemplateColumns:['1fr','1fr','repeat(2,1fr)'], gridGap:'0.5rem'}}>
              {dega.posts.nodes.map((item, index) => (
                <StoryCard
                  key={index}
                  cardStyle="iframely"
                  storyData={item}
                  excerpt
                  imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-4"
                />
              ))}
            </div>): <h2 sx={{textAlign:'center'}}>No posts found</h2>}
        </div>
      </div>
    </Layout>
  );
}

export default FormatDetails;

export const query = graphql`
  query($id: Int!, $sid: [Int!]) {
    dega {
      posts(formats: [$id], spaces: $sid) {
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
