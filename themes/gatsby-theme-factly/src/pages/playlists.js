import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import { Play } from '../components/icons';
import Footer from '../components/footer';
import logo from '../static/images/factly-video.jpg';

function Playlists({ data }) {
  const { allPlaylist: { nodes: playlists }, channel } = data;
  console.log(data);
  const [postItems, setPostItems] = useState(playlists.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = playlists.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < playlists.length);
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
          <div className="flex justify-between items-start border-b p-6">
            <div className="flex flex-row">
              {/* <Img alt={channel.snippet.title} fluid={channel.local.childImageSharp.fluid} className="h-24" /> */}
              <img alt={channel.snippet.title} src={channel.snippet.thumbnails.high.url} className="h-24" />
              <div className="flex flex-col justify-start px-4">
                <h5 className="heading">{channel.snippet.title}</h5>
                <span className="text-gray-600 text-xs md:text-sm pb-2">
                  {Number(channel.statistics.subscriberCount).toLocaleString()} Subscribers
                </span>
                <p className="text-base hidden md:inline">{channel.snippet.description}</p>
              </div>
            </div>
            <a
              href="https://www.youtube.com/channel/UCpi2S8wW4xLlUCVryhyBtsA"
              target="_blank"
              type="button"
              className="block lg:px-4 uppercase font-medium text-sm focus:outline-none bg-gray-300 rounded p-2"
            >
              Subscribe
            </a>
          </div>
          <div className="flex flex-row flex-wrap p-6 justify-center sm:justify-start items-center sm:items-start">
            {playlists.map(playlist => (
              <Link
                key={playlist.id}
                className="flex flex-col w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 no-underline hover:no-underline sm:pr-6 pb-4 mb-6"
                to={`playlist/${playlist.playlistId}`}
              >
                <div className="relative">
                  <Img
                    alt={playlist.snippet.title}
                    fluid={playlist.local.childImageSharp.fluid}
                    className="h-full w-full"
                  />
                  {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                    <span className="text-white">
                      {playlist.contentDetails.itemCount}
                    </span>
                  </div> */}
                  <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                    <Play className="text-white fill-current w-4 h-4"></Play>
                    <span className="text-white text-base">Play All</span>
                  </div>
                </div>
                <div className="w-full flex flex-col py-2">
                  <div>
                    <span className="inline-block align-text-top bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
                      {playlist.contentDetails.itemCount} Videos
                    </span>
                  </div>
                  <div
                    id="nav-0"
                    className="w-full font-bold font-sans text-lg text-gray-800"
                  >
                    {playlist.snippet.title}
                  </div>
                  {/* <p className="text-gray-600 text-xs md:text-sm">
                    {playlist.snippet.publishedAt}
                  </p> */}
                  <span className="text-gray-600 text-xs md:text-sm pt-2 uppercase">
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
  query PlaylistsPageQuery {
    channel {
      statistics {
        subscriberCount
        videoCount
      }
      local {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      snippet {
        thumbnails{
          high{
            url
          }
        }
        customUrl
        description
        title
      }
    }
    allPlaylist {
      totalCount
      nodes {
        id
        playlistId
        contentDetails {
          itemCount
        }
        snippet {
          channelId
          publishedAt(formatString: "MMMM Do, YYYY")
          title
        }
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
`;
