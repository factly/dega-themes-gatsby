import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import StoryCard from "../components/StoryCard";
import CategoriesGroup from "../components/CategoriesGroup";

function Homepage({ data }) {
  const { dega } = data;
  return (
    <Layout>
      <div className="flex flex-row justify-between lg:border-b">
        {/* Left sidebar */}
        <div className="sidebar xl:flex xl:w-1/4 border-r sticky">
          <div className="block">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="heading">Headlines</h5>
              <CategoriesGroup categories={dega.categories.nodes}/>
            </div>
          </div>
        </div>
        {/* Main/ Middle part of the homepage */}
        <div className="main-content w-full md:w-3/4 xl:w-2/4 mx-auto">
          {/* Featured Card */}
          {dega.posts.nodes.length > 0 ? (
            <StoryCard
              cardStyle="featured"
              storyData={dega.posts.nodes[0]}
              imageSize="w-full h-64"
            />
          ) : null}

          {/* Articles list */}
          <div className="flex flex-col py-6">
            {dega.posts.nodes.slice(1, 20).map((item, index) => (
              <StoryCard
                key={"homepage-post-" + index}
                cardStyle="basic"
                storyData={item}
                excerpt
                imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
              />
            ))}
          </div>
        </div>
        {/* Right sidebar */}
        <div className="sidebar lg:flex lg:w-2/6 xl:w-1/4 border-l sticky">
          <div className="block overflow-y-scroll">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="heading">Top In Factchecks</h5>
            </div>
            {dega.factchecks.nodes.map((item, index) => (
              <StoryCard
                key={"homepage-factcheck-" + index}
                cardStyle="vertical"
                storyData={item}
                imageSize="h-40"
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
  query($format_factcheck: [Int!], $format_without_factcheck: [Int!]) {
    dega {
      categories {
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
