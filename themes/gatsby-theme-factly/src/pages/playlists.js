import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import { Play } from '../components/icons';
import Footer from '../components/footer';
import logo from '../static/images/factly-video.jpg';
import _ from 'lodash';

const tabs = ['Home', 'Videos', 'Playlists'];

const VideoContainer = () => {
  return <div className="flex flex-row flex-wrap p-6 justify-center sm:justify-start items-center sm:items-start"></div>
}
function Playlists({ data }) {
  const [activeTab, setActiveTab] = useState({
    Home: true
  });
  const { allPlaylist: { nodes: playlists }, allVideo: { nodes: videos, totalCount }, channel, allChannelSections } = data;
  const [postItems, setPostItems] = useState(videos.slice(0, 20));
  const [hasNextPage, setHasNextPage] = useState(true);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = videos.slice(postItems.length, postItems.length + 20);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < videos.length);
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
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCpi2S8wW4xLlUCVryhyBtsA"
              target="_blank"
              type="button"
              className="block lg:px-4 uppercase font-medium text-sm focus:outline-none bg-gray-300 rounded p-2"
            >
              Subscribe
            </a>
          </div>
          <div>
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
          </div>
          {activeTab.Home && <div>
            {allChannelSections.nodes.map(channelSection => (
              <React.Fragment>
                <Link
                  className="flex items-center"
                  to={`playlist/${channelSection.playlist.id}`}
                  >
                  <h2 className="heading px-6 my-6">
                    {_.startCase(channelSection.playlist.snippet.title)}
                  </h2>
                  <Play className="fill-current w-4 h-4"></Play>
                  <span className="text-base">Play All</span>
                </Link>
                <div className="border-b flex flex-row flex-wrap px-6 justify-center sm:justify-start items-center sm:items-start">
                {channelSection.videos.map(video => (
                  <Link
                  key={video.id}
                  className="flex flex-col w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 no-underline hover:no-underline sm:pr-6 pb-4 mb-6"
                  to={`playlist/${video.snippet.playlistId}?v=${video.contentDetails.videoId}`}
                  >
                  <div className="relative">
                    {video.local && <Img
                      alt={video.snippet.title}
                      fluid={video.local.childImageSharp.fluid}
                      className="h-full w-full"
                    />}
                    {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                      <span className="text-white">
                        {playlist.contentDetails.itemCount}
                      </span>
                    </div> */}
                    <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                      <Play className="text-white fill-current w-4 h-4"></Play>
                      <span className="text-white text-base">Play</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col py-2">
                    <div
                      id="nav-0"
                      className="w-full font-bold font-sans text-base text-gray-800"
                    >
                      {video.snippet.title}
                    </div>
                    <p className="text-gray-600 text-xs pt-1">
                      {video.snippet.channelTitle} -{' '}
                      {video.snippet.publishedAt}
                    </p>
                  </div>
                </Link>
                ))}
                </div>
              </React.Fragment>
            ))}
          </div>}
          {activeTab.Videos && <div>
            <Link
              className="flex items-center px-6 mt-6"
              to={`playlist/${channel.contentDetails.relatedPlaylists.uploads}`}
              >
              <h2 className="heading pr-6">
                Uploads
              </h2>
              <Play className="fill-current w-4 h-4"></Play>
              <span className="text-base">Play All</span>
            </Link>
            <div className="row-list-container">
          <InfiniteScroll
            pageStart={0}
            element="section"
            loadMore={handleLoadMore}
            hasMore={hasNextPage}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {postItems.map(video => (
              <Link
                key={video.id}
                className="flex flex-col w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 no-underline hover:no-underline sm:pr-6 pb-4 mb-6"
                to={`playlist/${video.snippet.playlistId}?v=${video.contentDetails.videoId}`}
              >
                <div className="relative">
                  {video.local && <Img
                    alt={video.snippet.title}
                    fluid={video.local.childImageSharp.fluid}
                    className="h-full w-full"
                  />}
                  {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                    <span className="text-white">
                      {playlist.contentDetails.itemCount}
                    </span>
                  </div> */}
                  <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                    <Play className="text-white fill-current w-4 h-4"></Play>
                    <span className="text-white text-base">Play</span>
                  </div>
                </div>
                <div className="w-full flex flex-col py-2">
                  <div
                    id="nav-0"
                    className="w-full font-bold font-sans text-base text-gray-800"
                  >
                    {video.snippet.title}
                  </div>
                  <p className="text-gray-600 text-xs pt-1">
                    {video.snippet.channelTitle} -{' '}
                    {video.snippet.publishedAt}
                  </p>
                </div>
              </Link>
            ))}
          </InfiniteScroll>
          </div></div>}
          {activeTab.Playlists && <div className="flex flex-row flex-wrap p-6 justify-center sm:justify-start items-center sm:items-start">
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
          </div>}
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
      contentDetails{
        relatedPlaylists{
          uploads
        }
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
    allChannelSections(sort: {fields: snippet___position}) {
      totalCount
      nodes {
        id
        snippet{
          type
        }
        playlist {
          id
          snippet{
            title
          }
        }
        videos {
          contentDetails {
            videoId
          }
          local {
            childImageSharp {
              fluid(maxWidth: 300, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          snippet {
            playlistId
            channelTitle
            publishedAt(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
    allVideo (sort: {fields: snippet___publishedAt, order: DESC}) {
      totalCount
      nodes {
        contentDetails {
          videoId
        }
        local{
          childImageSharp{
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        snippet {
          playlistId
          channelTitle
          publishedAt(formatString: "MMMM Do, YYYY")
          title
        }
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
