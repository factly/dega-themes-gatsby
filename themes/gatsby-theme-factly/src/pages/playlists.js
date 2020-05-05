import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby'
import Img  from 'gatsby-image';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import { Play } from '../components/icons';
import Footer from '../components/footer';
import logo from '../static/images/factly-video.jpg';

const items = Array(20).fill({
  title:
    'A video clip from a web series is being falsely shared as ‘Sadhu strangling a policeman brutally’',
  excerpt:
    'After POTUS Donald Trump announced that USA is halting its funding to the WHO, there has been a lot of debate around WHO’s finances. So, who funds the WHO? What is the size of its budget? Here is a detailed explainer.',
  author: ['Pavithra K M', 'Bharath Kancharla'],
  time: '2 Min',
  image: ''
});

function Playlists({ data }) {
  console.log(data)
  const [postItems, setPostItems] = useState(items.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);
  
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = items.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < items.length);
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content w-full -my-8 lg:my-0">
          <img
            alt=""
            src="https://source.unsplash.com/collection/9419734/1000x200"
            className="w-full -mt-16"
          />
          <div className="flex justify-between items-center border-b p-6">
            <div className="flex flex-row">
              <img alt="" src={logo} className="h-24" />
              <div className="px-4">
                <h5 className="heading">Factly Youtube</h5>
                <span className="text-gray-600 text-xs md:text-sm pt-2">
                  30 k Subscribers
                </span>
              </div>
            </div>
            <button
              type="button"
              className="block lg:px-4 uppercase font-medium text-sm focus:outline-none bg-gray-300 rounded p-2"
            >
              Subscribe
            </button>
          </div>
          <div className="flex flex-row flex-wrap p-6 justify-center sm:justify-start items-center sm:items-start">
            {data.allItems.nodes.map((playlist) => (
              <Link
                key={playlist.id}
                className="flex flex-col w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 no-underline hover:no-underline sm:pr-6 pb-4 mb-6"
                to={`playlist/${playlist.id}`}
              >
                <div className="relative">
                  <Img
                    alt={playlist.snippet.title}
                    fluid={playlist.snippet.thumbnails.maxres.local.childImageSharp.fluid}
                    className="h-full w-full"
                  />
                  <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                  <span className="text-white">{playlist.contentDetails.itemCount}</span>
                  </div>
                  <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                    <Play className="text-white fill-current w-4 h-4"></Play>
                    <span className="text-white text-base">Play All</span>
                  </div>
                </div>
                <div className="w-full flex flex-col py-2">
                  <div
                    id="nav-0"
                    className="w-full font-bold font-sans text-lg text-gray-800"
                  >
                    {playlist.snippet.title}
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                  {playlist.snippet.publishedAt}
                  </p>
                  <span className="text-gray-600 text-xs md:text-sm pt-4 uppercase">
                    View full playlist
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer full></Footer>
    </Layout>
  );
}

Playlists.propTypes = {
  data: PropTypes.shape({})
};
export default Playlists;

export const query = graphql`
  query {
    allItems(filter: {snippet: {thumbnails: {maxres: {url: {ne: null}}}} contentDetails: {itemCount: {ne: null}}}) {
      nodes {
        id
        contentDetails {
          itemCount
        }
        snippet {
          channelId
          title
          publishedAt(formatString: "MMMM Do, YYYY")
          thumbnails {
            maxres {
              local {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;