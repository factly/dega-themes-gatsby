/** @jsx jsx */
/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';

import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import InfiniteScroll from 'react-infinite-scroller';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaPlay } from 'react-icons/fa';
import _ from 'lodash';
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import placeholderImg from '../static/images/placeholder.jpg';
// import PropTypes from 'prop-types';

const tabs = ['Home', 'Videos', 'Playlists'];

const IndexPage = ({ data, pageContext }) => {
  const { baseUrl, bannerData, bannerTitle, logo } = pageContext;
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
        url: `${baseUrl}/playlist/${videoItem.snippet.playlistId}/?v=${videoItem.contentDetails.videoId}`,
        thumbnailUrl: [videoItem.image ? videoItem.image.childImageSharp.original.src : ''],
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
      itemListElement,
    };
  }, [postItems, baseUrl]);

  return (
    <Layout baseUrl={baseUrl} logo={logo}>
      <Helmet>
        <title>{channel.snippet.title}</title>
        <meta name="description" content={channel.snippet.description} />
        <meta name="image" content={channel.snippet.thumbnails.high.url} />
        <meta name="og:image" content={channel.snippet.thumbnails.high.url} />
        <script type="application/ld+json">{JSON.stringify(schemaVideoList)}</script>
      </Helmet>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'column', 'row'],
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
        }}
      >
        <div className="main-content" sx={{ width: 'full' }}>
          <div>
            <div
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                borderBottomWidth: 'px',
                p: 6,
                bg: (theme) => `${theme.colors.gray[3]}`,
              }}
            >
              {/* <Img alt={channel.snippet.title} fluid={channel.image.childImageSharp.fluid} className="h-24" /> */}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={`https://www.youtube.com/channel/${channel.channelId}`}
              >
                <img
                  alt={channel.snippet.title}
                  src={channel.snippet.thumbnails.high.url}
                  sx={{ height: 24 }}
                />
              </a>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  px: 4,
                }}
              >
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://www.youtube.com/channel/${channel.channelId}`}
                  className="heading"
                  sx={{ fontWeight: 'bold' }}
                >
                  {channel.snippet.title}
                </a>
                <span sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, 1], pb: 2 }}>
                  {Number(channel.statistics.subscriberCount).toLocaleString()} Subscribers
                </span>
                <a
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/channel/${channel.channelId}?sub_confirmation=1`}
                  target="_blank"
                  type="button"
                  sx={{
                    display: 'block',
                    p: 2,
                    px: [null, null, null, 4],
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    fontWeight: 'medium',
                    fontSize: 1,
                    transition: 'all 0.5s',
                    color: 'white',
                    ':focus': { outline: 'none' },
                    ':hover': { color: 'white', bg: 'lightBlue' },
                    bg: 'Ytblue',
                    borderRadius: 'default',
                  }}
                >
                  Subscribe
                </a>
                {/* <p className="text-base hidden md:inline">{channel.snippet.description}</p> */}
              </div>
              {bannerData.length > 0 && (
                <div
                  sx={{
                    display: ['none', 'none', 'none', 'none', 'flex'],
                    flexGrow: '1',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    px: 4,
                  }}
                >
                  <h3 sx={{ textAlign: 'center', fontWeight: 'bold', py: 2 }}>{bannerTitle}</h3>
                  <div sx={{ display: 'flex', justifyContent: 'center', px: 4 }}>
                    {bannerData.map((item, i) => (
                      <Link to={`${baseUrl}/playlist/${item.playlistId}`} sx={{ px: 6 }} key={i}>
                        <img
                          src={`/${item.icon}`}
                          alt={item.name}
                          sx={{ height: 20, borderRadius: 'default' }}
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <ul sx={{ display: 'flex', px: 8, bg: (theme) => `${theme.colors.gray[3]}` }}>
              {tabs.map((tab, i) => (
                <li key={i} sx={{ mr: 1 }}>
                  <button
                    type="button"
                    key={i}
                    className={`${activeTab[tab] && 'bg-white'}`}
                    sx={{
                      borderWidth: '1px',
                      borderBottomWidth: '0',
                      display: 'inline-block',
                      py: 2,
                      px: 4,
                      borderTopRightRadius: 'default',
                      borderTopLeftRadius: 'default',
                      fontWeight: 'medium',
                      fontSize: 3,
                      ':focus': { outline: 'none' },
                      '&.bg-white': { bg: 'white' },
                    }}
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
              {allChannelSections.nodes.map((channelSection, i) => {
                const playlistId =
                  channelSection.playlist.id === channel.contentDetails.relatedPlaylists.uploads
                    ? channel.contentDetails.relatedPlaylists.uploads
                    : channelSection.playlist.id;
                const playlistTitle =
                  channelSection.playlist.snippet.title === 'Uploads'
                    ? 'Recent Videos'
                    : channelSection.playlist.snippet.title;
                return (
                  <React.Fragment key={i}>
                    <Link
                      sx={{ display: 'flex', alignItems: 'center' }}
                      to={`${baseUrl}/playlist/${channelSection.playlist.id}`}
                    >
                      <h2 className="heading" sx={{ px: 6, my: 6 }}>
                        {_.startCase(playlistTitle)}
                      </h2>
                      <FaPlay
                        sx={{
                          display: ['none', 'none', 'block'],
                          fill: 'currentColor',
                          width: 4,
                          height: 4,
                        }}
                      />

                      <span sx={{ display: ['none', 'none', 'inline'], fontSize: 2, ml: 2 }}>
                        Play All
                      </span>
                    </Link>
                    <div
                      sx={{
                        borderBottomWidth: 'px',
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        px: 6,
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                      }}
                    >
                      {channelSection.videos.map((video, index) => (
                        <Link
                          key={index}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: ['full', '1/3', '1/4', '1/5'],
                            textDecoration: 'none',
                            ':hover': {
                              textDecoration: 'none',
                            },
                            pr: 6,
                            pb: 4,
                            mb: 6,
                          }}
                          to={`${baseUrl}/playlist/${playlistId}/?v=${video.contentDetails.videoId}`}
                        >
                          <div sx={{ position: 'relative' }}>
                            {video.image ? (
                              <GatsbyImage
                                image={video.image.childImageSharp.gatsbyImageData}
                                alt={video.snippet.title}
                                sx={{ height: 'full', width: 'full' }}
                              />
                            ) : (
                              <img
                                src={placeholderImg}
                                alt="placeholder"
                                sx={{ width: 'full', height: 'full' }}
                              />
                            )}
                            {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                      <span className="text-white">
                        {playlist.contentDetails.itemCount}
                      </span>
                    </div> */}
                            <div
                              sx={{
                                opacity: 0,
                                ':hover': { opacity: '0.75' },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                p: 6,
                                bg: 'black',
                                position: 'absolute',
                                width: 'full',
                                height: 'full',
                                top: 0,
                                left: 0,
                              }}
                            >
                              <FaPlay
                                sx={{ width: 4, height: 4, fill: 'currentColor', color: 'white' }}
                              />
                              <span sx={{ color: 'white', fontSize: 2, ml: 2 }}>Play</span>
                            </div>
                          </div>
                          <div
                            sx={{
                              width: 'full',
                              display: 'flex',
                              flexDirection: 'column',
                              py: 2,
                            }}
                          >
                            <div
                              id="nav-0"
                              sx={{
                                width: 'full',
                                fontWeight: 'bold',
                                fontSize: 2,
                                color: (theme) => `${theme.colors.gray[8]}`,
                              }}
                            >
                              {video.snippet.title}
                            </div>
                            <p
                              sx={{
                                color: (theme) => `${theme.colors.gray[6]}`,
                                fontSize: 0,
                                pt: 1,
                              }}
                            >
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
                sx={{ display: 'flex', alignItems: 'center', px: 6, mt: 6 }}
                to={`${baseUrl}/playlist/${channel.contentDetails.relatedPlaylists.uploads}`}
              >
                <h2 className="heading" sx={{ pr: 6 }}>
                  Uploads
                </h2>
                <FaPlay sx={{ fill: 'currentColor', width: 4, height: 4 }} />
                <span sx={{ fontSize: 2, ml: 2 }}>Play All</span>
              </Link>
              <div className="row-list-container">
                <InfiniteScroll
                  pageStart={0}
                  element="section"
                  loadMore={handleLoadMore}
                  hasMore={hasNextPage}
                  loader={
                    <div className="loader" key={-1}>
                      Loading ...
                    </div>
                  }
                >
                  {postItems.map((video, i) => (
                    <Link
                      key={i}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: ['full', '1/3', '1/4', '1/5'],
                        textDecoration: 'none',
                        ':hover': { textDecoration: 'none' },
                        pr: 6,
                        pb: 4,
                        mb: 6,
                      }}
                      to={`${baseUrl}/playlist/${channel.contentDetails.relatedPlaylists.uploads}/?v=${video.contentDetails.videoId}`}
                    >
                      <div sx={{ position: 'relative' }}>
                        {video.image ? (
                          <GatsbyImage
                            image={video.image.childImageSharp.gatsbyImageData}
                            alt={video.snippet.title}
                            sx={{ height: 'full', width: 'full' }}
                          />
                        ) : (
                          <img
                            src={placeholderImg}
                            alt="placeholder"
                            sx={{ width: 'full', height: 'full' }}
                          />
                        )}
                        {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                    <span className="text-white">
                      {playlist.contentDetails.itemCount}
                    </span>
                  </div> */}
                        <div
                          sx={{
                            opacity: 0,
                            ':hover': { opacity: '0.75' },
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 6,
                            bg: 'black',
                            position: 'absolute',
                            width: 'full',
                            height: 'full',
                            top: 0,
                            left: 0,
                          }}
                        >
                          <FaPlay
                            sx={{ width: 4, height: 4, fill: 'currentColor', color: 'white' }}
                          />

                          <span sx={{ color: 'white', fontSize: 2, ml: 2 }}>Play</span>
                        </div>
                      </div>
                      <div sx={{ width: 'full', display: 'flex', flexDirection: 'column', py: 2 }}>
                        <div
                          id="nav-0"
                          sx={{
                            width: 'full',
                            fontWeight: 'bold',
                            fontSize: 2,
                            color: (theme) => `${theme.colors.gray[8]}`,
                          }}
                        >
                          {video.snippet.title}
                        </div>
                        <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: 0, pt: 1 }}>
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
            <div
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                p: 6,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}
            >
              {playlists.map((playlist, i) => {
                const positionsArr = playlist.videos.map((video) =>
                  video.positions.find((e) => e.playlist === playlist.playlistId),
                );
                const sortedVideos = playlist.videos
                  .map((video, i) => {
                    return { ...video, pos: positionsArr[i].position };
                  })
                  .sort((a, b) => a.pos - b.pos);
                return (
                  <Link
                    key={i}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: ['full', '1/3', '1/4', '1/5'],
                      textDecoration: 'none',
                      ':hover': {
                        textDecoration: 'none',
                      },
                      pr: 6,
                      pb: 4,
                      mb: 6,
                    }}
                    to={`${baseUrl}/playlist/${playlist.playlistId}/?v=${sortedVideos[0].contentDetails.videoId}`}
                  >
                    <div sx={{ position: 'relative' }}>
                      {playlist.image ? (
                        <GatsbyImage
                          image={playlist.image.childImageSharp.gatsbyImageData}
                          alt={playlist.snippet.title}
                          sx={{ height: 'full', width: 'full' }}
                        />
                      ) : (
                        <img
                          src={placeholderImg}
                          alt="placeholder"
                          style={{ padding: '12% 0' }}
                          sx={{ width: 'full', height: 'full' }}
                        />
                      )}
                      {/* <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                    <span className="text-white">
                      {playlist.contentDetails.itemCount}
                    </span>
                  </div> */}
                      <div
                        sx={{
                          opacity: 0,
                          ':hover': { opacity: '0.75' },
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          p: 6,
                          bg: 'black',
                          position: 'absolute',
                          width: 'full',
                          height: 'full',
                          top: 0,
                          left: 0,
                        }}
                      >
                        <FaPlay
                          sx={{ width: 4, height: 4, fill: 'currentColor', color: 'white' }}
                        />
                        <span sx={{ color: 'white', fontSize: 2, ml: 2 }}>Play All</span>
                      </div>
                    </div>
                    <div sx={{ width: 'full', display: 'flex', flexDirection: 'column', py: 2 }}>
                      <div>
                        <span
                          sx={{
                            display: 'inline-block',
                            verticalAlign: 'text-top',
                            bg: (theme) => `${theme.colors.gray[2]}`,
                            borderRadius: 'default',
                            px: 3,
                            py: 1,
                            fontSize: 1,
                            fontWeight: 'semibold',
                            color: (theme) => `${theme.colors.gray[7]}`,
                          }}
                        >
                          {playlist.contentDetails.itemCount} Videos
                        </span>
                      </div>
                      <div
                        id="nav-0"
                        sx={{
                          width: 'full',
                          fontWeight: 'bold',
                          fontSize: 3,
                          color: (theme) => `${theme.colors.gray[8]}`,
                        }}
                      >
                        {playlist.snippet.title}
                      </div>
                      {/* <p className="text-gray-600 text-xs md:text-sm">
                    {playlist.snippet.publishedAt}
                  </p> */}
                      <span
                        sx={{
                          color: (theme) => `${theme.colors.gray[6]}`,
                          fontSize: [0, 0, 1],
                          pt: 2,
                          textTransform: 'uppercase',
                        }}
                      >
                        View full playlist
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

// IndexPage.propTypes = {
//   data: PropTypes.shape({}),
// };
export default IndexPage;

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
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
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
    allChannelSections(sort: { snippet: { position: ASC } }) {
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
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          snippet {
            playlistId
            channelTitle
            publishedAt(formatString: "MMM DD, YYYY")
            title
          }
        }
      }
    }
    allVideo(
      sort: { snippet: { publishedAt: DESC } }
      filter: { snippet: { title: { nin: ["Private video", "Deleted video"] } } }
    ) {
      totalCount
      nodes {
        contentDetails {
          videoId
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
            original {
              src
            }
          }
        }
        snippet {
          playlistId
          channelTitle
          position
          description
          publishedAt(formatString: "MMM DD, YYYY")
          title
        }
      }
    }
    allPlaylist(filter: { list: { ne: false } }) {
      totalCount
      nodes {
        id
        playlistId
        videos {
          positions {
            position
            playlist
          }
          contentDetails {
            videoId
          }
        }
        contentDetails {
          itemCount
        }
        snippet {
          channelId
          publishedAt(formatString: "MMM DD, YYYY")
          title
        }
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
