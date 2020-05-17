import React, { useState, useMemo } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ListItems from '../components/listItems';

function Author({ data }) {
  const {degaCMS: { user, posts, factchecks }} = data;
  const tabs = useMemo(() => {
    let tabList = ['All'];
    if(posts.nodes.length > 0){
      tabList.push('Stories')
    }
    if(factchecks.nodes.length > 0){
      tabList.push('Factchecks')
    }
    return tabList;
  })
  const [activeTab, setActiveTab] = useState({
    All: true
  });

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto lg:-my-16">
          <div className="flex flex-col pb-6">
            <ul className="flex px-8 pt-8 lg:pt-32 bg-gray-300">
              {tabs.map(tab => (
                <li className="-mb-px mr-1">
                  <button
                    type="button"
                    className={`inline-block py-2 px-4 border border-b-0 rounded-t font-medium text-lg focus:outline-none
                    ${activeTab[tab] && 'bg-white'}`}
                    onClick={() => setActiveTab({ [tab]: tab })}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
            {(activeTab.All || activeTab.Stories) && (
              <div>
                {activeTab.All && (
                  <div className="border-b p-6">
                    <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                      Stories
                    </h5>
                  </div>
                )}
                {posts.nodes.map((item, index) => (
                  <ListItems
                    orientation="vertical horizontal"
                    item={item}
                    index={index}
                    tags
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                  />
                ))}
              </div>
            )}
            {(activeTab.All || activeTab.Factchecks) && (
              <div>
                {activeTab.All && (
                  <div className="border-b p-6">
                    <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                      Fact checks
                    </h5>
                  </div>
                )}
                {factchecks.nodes.map((item, index) => (
                  <ListItems
                    orientation="vertical horizontal"
                    item={item}
                    index={index}
                    tags
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col order-1 lg:order-2 w-full lg:w-2/5 border-l pt-10 lg:pt-20 top-0 h-auto lg:h-screen static lg:sticky overflow-y-hidden">
          <div className="flex flex-col px-6">
            <div className="flex py-4">
              <img
                alt={user.media.alt_text}
                src={user.media.source_url}
                className="h-20 lg:h-40 object-cover rounded"
              />
              <div className="px-4">
                <h2 className="font-bold">{user.display_name}</h2>
                <a
                  href="mailto:rakesh@factly.in"
                  className="font-medium text-blue-500 text-lg "
                >
                  {user.email}
                </a>
              </div>
            </div>
            <p className="text-base read-more-wrap">
              {user.description}
            </p>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}

Author.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default Author;

export const query = graphql`
  query ($id: String!) {
    degaCMS {
       user(id: $id) {
        _id
        slug
        description
        display_name
        email
        media{
          source_url
        }
       }
       posts(users: [$id]) {
        nodes {
          title
          sub_title
          published_date
          excerpt
          slug
          __typename
          media{
            source_url
            alt_text
          }
          degaUsers{
            slug
            display_name
          }
          categories{
            name
          }
        }
      }
      factchecks(users: [$id]) {
        nodes {
          title
          sub_title
          published_date
          excerpt
          slug
          __typename
          media{
            source_url
            alt_text
          }
          degaUsers{
            slug
            display_name
          }
          categories{
            name
          }
        }
      }
    }
    file(relativePath: { eq: "logo/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
