import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/BasicLayout";
import StoryCard from "../components/StoryCard";

function FormatDetails({ data }) {
  const { dega } = data;

  return (
    <Layout>
      <div className="mx-auto lg:-my-16" style={{ maxWidth: "1024px" }}>
        <div className="flex flex-col pb-6 lg:pt-16">
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

export default FormatDetails;

export const query = graphql`
  query($id: Int!) {
    dega {
      posts(formats: [$id]) {
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
