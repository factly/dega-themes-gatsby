import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

const tabs = ['Home', 'Videos', 'Playlists'];

function Playlists({ data }) {
  const [activeTab, setActiveTab] = useState({
    Home: true,
  });

  const {
    allPlaylist: { nodes: playlists },
    allVideo: { nodes: videos },
    channel,
    allChannelSections,
  } = data;
  const [postItems, setPostItems] = useState(videos.slice(0, 20));
  const [hasNextPage, setHasNextPage] = useState(true);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = videos.slice(postItems.length, postItems.length + 20);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < videos.length);
  };

  const schemaVideoList = useMemo(() => {
    const itemListElement = [];
    postItems.forEach((videoItem) => {
      itemListElement.push({
        '@type': 'VideoObject',
        name: videoItem.snippet.title,
        description: videoItem.snippet.description,
        position: videoItem.snippet.position,
        url: `/playlist/${videoItem.snippet.playlistId}?v=${videoItem.contentDetails.videoId}`,
        thumbnailUrl: [videoItem.local ? videoItem.local.childImageSharp.fluid.src : ''],
        uploadDate: videoItem.snippet.publishedAt,
        embedUrl: `https://www.youtube.com/embed/${videoItem.contentDetails.videoId}`,
        interactionStatistic: {
          '@type': 'InteractionCounter',
          interactionType: { '@type': 'http://schema.org/WatchAction' },
        },
      });
    });
    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: itemListElement,
    };
  }, [postItems]);

  return (
    <Layout>
      <Helmet>
        <title>{channel.snippet.title}</title>
        <meta name="description" content={channel.snippet.description} />
        <meta name="image" content={channel.snippet.thumbnails.high.url} />
        <script type="application/ld+json">{JSON.stringify(schemaVideoList)}</script>
      </Helmet>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content w-full -mt-8">
          <div>
            <div className="flex items-start border-b p-6 bg-gray-300">
              {/* <Img alt={channel.snippet.title} fluid={channel.local.childImageSharp.fluid} className="h-24" /> */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://www.youtube.com/channel/${channel.channelId}`}
              >
                <img
                  alt={channel.snippet.title}
                  src={channel.snippet.thumbnails.high.url}
                  className="h-24"
                />
              </a>
              <div className="flex flex-col justify-start px-4">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://www.youtube.com/channel/${channel.channelId}`}
                  className="heading"
                >
                  {channel.snippet.title}
                </a>
                <span className="text-gray-600 text-xs md:text-sm pb-2">
                  {Number(channel.statistics.subscriberCount).toLocaleString()} Subscribers
                </span>
                <a
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/channel/${channel.channelId}?sub_confirmation=1`}
                  target="_blank"
                  type="button"
                  className="block lg:px-4 uppercase text-center font-medium text-sm focus:outline-none bg-gray-100 rounded p-2"
                >
                  Subscribe
                </a>
                {/* <p className="text-base hidden md:inline">{channel.snippet.description}</p> */}
              </div>
            </div>
            <ul className="flex px-8 bg-gray-300">
              {tabs.map((tab, i) => (
                <li className="-mb-px mr-1" key={i}>
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
          {activeTab.Home && (
            <div>
              {allChannelSections.nodes.map((channelSection) => {
                let playlistId =
                  channelSection.playlist.id === channel.contentDetails.relatedPlaylists.uploads
                    ? channel.contentDetails.relatedPlaylists.uploads
                    : channelSection.playlist.id;
                let playlistTitle =
                  channelSection.playlist.snippet.title === 'Uploads'
                    ? 'Recent Videos'
                    : channelSection.playlist.snippet.title;
                return (
                  <React.Fragment key={channelSection.playlist.id}>
                    <Link
                      className="flex items-center"
                      to={`playlist/${channelSection.playlist.id}`}
                    >
                      <h2 className="heading px-6 my-6">{_.startCase(playlistTitle)}</h2>
                      <FontAwesomeIcon
                        icon={faPlay}
                        className="hidden md:block fill-current w-4 h-4"
                      />

                      <span className="hidden md:inline text-base">Play All</span>
                    </Link>
                    <div className="border-b flex flex-row flex-wrap px-6 justify-center sm:justify-start items-center sm:items-start">
                      {channelSection.videos.map((video) => (
                        <Link
                          key={video.id}
                          className="flex flex-col w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 no-underline hover:no-underline sm:pr-6 pb-4 mb-6"
                          to={`playlist/${playlistId}?v=${video.contentDetails.videoId}`}
                        >
                          <div className="relative">
                            {video.local && (
                              <Img
                                alt={video.snippet.title}
                                fluid={video.local.childImageSharp.fluid}
                                className="h-full w-full"
                              />
                            )}
                            {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                      <span className="text-white">
                        {playlist.contentDetails.itemCount}
                      </span>
                    </div> */}
                            <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                              <FontAwesomeIcon
                                icon={faPlay}
                                className="text-white fill-current w-4 h-4"
                              />

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
                              {video.snippet.channelTitle} - {video.snippet.publishedAt}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          )}
          {activeTab.Videos && (
            <div>
              <Link
                className="flex items-center px-6 mt-6"
                to={`playlist/${channel.contentDetails.relatedPlaylists.uploads}`}
              >
                <h2 className="heading pr-6">Uploads</h2>
                <FontAwesomeIcon icon={faPlay} className="fill-current w-4 h-4" />
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
                  {postItems.map((video) => (
                    <Link
                      key={video.id}
                      className="flex flex-col w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 no-underline hover:no-underline sm:pr-6 pb-4 mb-6"
                      to={`playlist/${channel.contentDetails.relatedPlaylists.uploads}?v=${video.contentDetails.videoId}`}
                    >
                      <div className="relative">
                        {video.local && (
                          <Img
                            alt={video.snippet.title}
                            fluid={video.local.childImageSharp.fluid}
                            className="h-full w-full"
                          />
                        )}
                        {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                    <span className="text-white">
                      {playlist.contentDetails.itemCount}
                    </span>
                  </div> */}
                        <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                          <FontAwesomeIcon
                            icon={faPlay}
                            className="text-white fill-current w-4 h-4"
                          />

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
                          {video.snippet.channelTitle} - {video.snippet.publishedAt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </InfiniteScroll>
              </div>
            </div>
          )}
          {activeTab.Playlists && (
            <div className="flex flex-row flex-wrap p-6 justify-center sm:justify-start items-center sm:items-start">
              {playlists.map((playlist) => (
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
                      <FontAwesomeIcon icon={faPlay} className="text-white fill-current w-4 h-4" />
                      <span className="text-white text-base">Play All</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col py-2">
                    <div>
                      <span className="inline-block align-text-top bg-gray-200 rounded px-3 py-1 text-sm font-semibold text-gray-700">
                        {playlist.contentDetails.itemCount} Videos
                      </span>
                    </div>
                    <div id="nav-0" className="w-full font-bold font-sans text-lg text-gray-800">
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
          )}
        </div>
      </div>
      <Footer full />
    </Layout>
  );
}

Playlists.propTypes = {
  data: PropTypes.shape({}),
};
export default Playlists;

export const query = graphql`
  query PlaylistsPageQuery {
    channel {
      channelId
      statistics {
        subscriberCount
        videoCount
      }
      contentDetails {
        relatedPlaylists {
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
        thumbnails {
          high {
            url
          }
        }
        customUrl
        description
        title
      }
    }
    allChannelSections(sort: { fields: snippet___position }) {
      totalCount
      nodes {
        id
        snippet {
          type
        }
        playlist {
          id
          snippet {
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
            publishedAt(formatString: "DD-MM-YYYY")
            title
          }
        }
      }
    }
    allVideo(sort: { fields: snippet___publishedAt, order: DESC }) {
      totalCount
      nodes {
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
          position
          description
          publishedAt(formatString: "DD-MM-YYYY")
          title
        }
      }
    }
    allPlaylist(filter: { list: { ne: false } }) {
      totalCount
      nodes {
        id
        playlistId
        contentDetails {
          itemCount
        }
        snippet {
          channelId
          publishedAt(formatString: "DD-MM-YYYY")
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
