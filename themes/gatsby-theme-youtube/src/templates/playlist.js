/** @jsx jsx */
/* eslint-disable react/prop-types */
import React, { useState, useMemo, useRef, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FaPlay } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroller';
// import styled from '@emotion/styled';
import { jsx } from 'theme-ui';
import Layout from '../components/Layout';
import linkify from '../utils/linkify';
import addAttribution from '../utils/addAttribution';
import ShareModal from '../components/ShareModal';

import placeholderImg from '../static/images/placeholder.jpg';

function Playlist({ data: { playlist, channel }, pageContext, location }) {
  const { baseUrl, logo } = pageContext;
  let title;
  let url;
  if (typeof window !== 'undefined') {
    title = window.document.title;
    url = window.location.href;
  }
  const videoId = location.search.substring(1).split('=')[1];

  const positionsArr = playlist.videos.map((video) =>
    video.positions.find((e) => e.playlist === playlist.playlistId),
  );
  let sortedVideos = playlist.videos;
  if (playlist.snippet.title !== 'Uploads') {
    sortedVideos = playlist.videos
      .map((video, i) => {
        return { ...video, pos: positionsArr[i].position };
      })
      .sort((a, b) => a.pos - b.pos);
  }
  const [videoListHeight, setVideoListHeight] = useState('366px');
  const [activeVideo, setActiveVideo] = useState(() => {
    if (videoId) {
      const videoIndex = sortedVideos.findIndex(
        (video) => video.contentDetails.videoId === videoId,
      );
      return {
        videoIndex,
        video: sortedVideos[videoIndex],
      };
    }
    return {
      videoIndex: 0,
      video: sortedVideos[0],
    };
  });

  const schemaVideo = useMemo(
    () => ({
      '@context': 'http://schema.org/',
      '@type': 'VideoObject',
      name: activeVideo.video.snippet.title,
      description: activeVideo.video.snippet.description,
      position: activeVideo.video.snippet.position,
      url: `/playlist/${playlist.playlistId}?v=${activeVideo.video.contentDetails.videoId}`,
      thumbnailUrl: [
        activeVideo.video.local ? activeVideo.video.local.childImageSharp.fluid.src : '',
      ],
      uploadDate: activeVideo.video.snippet.publishedAt,
      embedUrl: `https://www.youtube.com/embed/${activeVideo.video.contentDetails.videoId}`,
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: { '@type': 'http://schema.org/WatchAction' },
      },
    }),
    [activeVideo, playlist.playlistId],
  );

  const [postItems, setPostItems] = useState(() => {
    const video = sortedVideos.splice(activeVideo.videoIndex, 1);
    sortedVideos.unshift(video[0]);
    return sortedVideos.slice(0, 20);
  });

  const [hasNextPage, setHasNextPage] = useState(true);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = sortedVideos.slice(postItems.length, postItems.length + 20);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < sortedVideos.length);
  };

  const videoElement = useRef(null);
  const playlistElement = useRef(null);

  const setPlaylistDivHieght = () => {
    if (window.innerWidth <= 1025) {
      setVideoListHeight('auto');
    } else {
      console.log();
      setVideoListHeight(`${document.getElementsByClassName('main-content')[0].clientHeight}px`);
    }
  };

  useEffect(() => {
    const videoIndex = sortedVideos.findIndex((video) => video.contentDetails.videoId === videoId);

    if (videoIndex >= 0) {
      setActiveVideo({
        video: sortedVideos[videoIndex],
        videoIndex,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlist.videos, videoId]);

  useEffect(() => {
    window.onresize = () => {
      setPlaylistDivHieght();
    };
    setPlaylistDivHieght();
    playlistElement.current.scrollTop =
      document.getElementById(activeVideo.video.id).offsetTop - 10;
    return () => {
      window.onresize = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // useEffect(() => {
  //   document.addEventListener('copy', addAttribution);
  // }, []);
  return (
    <Layout baseUrl={baseUrl} logo={logo}>
      <Helmet>
        <title>{activeVideo.video.snippet.title}</title>
        <meta
          name="description"
          content={activeVideo.video.snippet.description.substring(0, 150)}
        />
        <meta
          name="image"
          content={
            activeVideo.video.snippet &&
            activeVideo.video.snippet.thumbnails &&
            (activeVideo.video.snippet.thumbnails.maxres.url ||
              activeVideo.video.snippet.thumbnails.standard.url ||
              activeVideo.video.snippet.thumbnails.high.url ||
              activeVideo.video.snippet.thumbnails.medium.url ||
              activeVideo.video.snippet.thumbnails.default.url)
          }
        />
        <meta property="og:title" content={activeVideo.video.snippet.title} />
        <meta
          property="og:description"
          content={activeVideo.video.snippet.description.substring(0, 150)}
        />
        <meta
          property="og:image"
          content={
            activeVideo.video.snippet &&
            activeVideo.video.snippet.thumbnails &&
            (activeVideo.video.snippet.thumbnails.maxres.url ||
              activeVideo.video.snippet.thumbnails.standard.url ||
              activeVideo.video.snippet.thumbnails.high.url ||
              activeVideo.video.snippet.thumbnails.medium.url ||
              activeVideo.video.snippet.thumbnails.default.url)
          }
        />
        <script type="application/ld+json">{JSON.stringify(schemaVideo)}</script>
      </Helmet>
      <div
        sx={{
          display: 'flex',
          flexDirection: ['column', 'column', 'column', 'row'],
          justifyContent: 'space-between',
          borderBottomWidth: [null, null, null, 'px'],
          mx: [2, 10, 10, 10, 20],
          pb: 16,
        }}
      >
        <div
          className="main-content"
          sx={{ display: 'flex', flexDirection: 'column', width: ['full', 'full', 'full', '3/5'] }}
        >
          <div
            ref={videoElement}
            style={{ paddingBottom: `56.25%` }}
            className="embed-content"
            sx={{ position: 'relative' }}
          >
            <iframe
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 'full',
                height: 'full',
              }}
              title={activeVideo.video.snippet.title}
              src={`https://www.youtube.com/embed/${activeVideo.video.contentDetails.videoId}?autoplay=1`}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div sx={{ width: 'full', display: 'flex', flexDirection: 'column', py: 4 }}>
            {/* <p className="w-full text-gray-600 text-xs lg:text-sm">
              {activeVideo.video.snippet.channelTitle}
            </p> */}
            <div
              id="nav-0"
              sx={{
                width: 'full',
                fontWeight: 'bold',
                fontSize: 4,
                letterSpacing: 'tight',
                color: (theme) => `${theme.colors.gray[8]}`,
                mb: 2,
              }}
            >
              {activeVideo.video.snippet.title}
            </div>
            <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, 0, 0, 1], pb: 2 }}>
              {activeVideo.video.snippet.publishedAt}
            </p>
            <hr />
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                borderBottomWidth: 'px',
                p: 6,
              }}
            >
              <div sx={{ display: 'flex', flexGrow: 1 }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://www.youtube.com/channel/${channel.channelId}`}
                >
                  <img
                    alt={channel.snippet.title}
                    src={channel.snippet.thumbnails.high.url}
                    sx={{ height: 12, borderRadius: 'full' }}
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
                  >
                    {channel.snippet.title}
                  </a>
                  <span
                    sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, 0, 1], pb: 2 }}
                  >
                    {Number(channel.statistics.subscriberCount).toLocaleString()} Subscribers
                  </span>
                </div>
              </div>
              <div sx={{ display: 'flex', ml: 'auto', my: [4, 0, 0] }}>
                <ShareModal title={`${activeVideo.video.snippet.title}`} url={url} />
                <a
                  rel="noopener noreferrer"
                  href={`https://www.youtube.com/channel/${channel.channelId}?sub_confirmation=1`}
                  target="_blank"
                  type="button"
                  sx={{
                    ml: 'auto',
                    display: 'block',
                    p: 2,
                    px: [null, null, null, 4],
                    bg: (theme) => `${theme.colors.gray[3]}`,
                    textTransform: 'uppercase',
                    textAlign: 'center',
                    fontWeight: 'medium',
                    fontSize: 1,
                    borderRadius: 'default',
                    transition: 'all 0.5s',
                    ':hover': { bg: '#e62117', color: 'white' },
                    ':focus': { outline: 'none' },
                  }}
                >
                  Subscribe
                </a>
              </div>
            </div>
            <p
              className="read-more-wrap"
              sx={{
                whiteSpace: 'pre-line',
                py: 2,
                px: 4,
                fontSize: 2,
                a: {
                  color: '#2196f3',
                },
              }}
              onCopy={addAttribution}
              dangerouslySetInnerHTML={{ __html: linkify(activeVideo.video.snippet.description) }}
            ></p>
          </div>
        </div>
        <div
          style={{ height: videoListHeight }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: ['full', 'full', 'full', '2/5'],
            mt: [16, 16, 16, 0],
            mx: [null, null, null, 4],
            height: 'screenHeight',
            borderWidth: 'px',
            boxShadow: [null, null, null, 'md'],
          }}
        >
          <div sx={{ mb: 4, p: 4, borderBottomWidth: 'px' }}>
            <h5 sx={{ fontSize: 2, fontWeight: 'medium' }}>
              {playlist.snippet.title === 'Uploads' ? 'Recent Videos' : playlist.snippet.title}
            </h5>
            <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, 0, 1] }}>
              {playlist.snippet.channelTitle} - {activeVideo.videoIndex + 1}/{sortedVideos.length}
            </p>
          </div>
          <div
            ref={playlistElement}
            style={{ height: videoListHeight }}
            sx={{
              position: [null, null, null, 'relative'],
              overflow: [null, null, null, 'auto'],
              height: 'screenHeight',
            }}
          >
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                position: [null, null, null, 'absolute'],
                top: 0,
                left: 0,
                width: 'full',
                height: 'full',
              }}
            >
              <InfiniteScroll
                pageStart={0}
                element="section"
                loadMore={handleLoadMore}
                hasMore={hasNextPage}
                useWindow={videoListHeight === 'auto'}
                getScrollParent={() => playlistElement.current}
                loader={
                  <div className="loader" key={-1}>
                    Loading ...
                  </div>
                }
              >
                {postItems.map((playlistVideo, index) => (
                  <Link
                    key={index}
                    id={playlistVideo.id}
                    className={`${activeVideo.videoIndex === index && 'video-active'}`}
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'row',
                      width: 'full',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                      py: 2,
                      textDecoration: 'none',
                      ':hover': { textDecoration: 'none' },
                    }}
                    to={`/playlist/${playlist.playlistId}?v=${playlistVideo.contentDetails.videoId}`}
                  >
                    <span sx={{ px: 2, fontSize: 1, color: (theme) => `${theme.colors.gray[6]}` }}>
                      {activeVideo.videoIndex === index ? (
                        <FaPlay size="1rem" sx={{ width: 2, height: 2, fill: 'currentColor' }} />
                      ) : (
                        index + 1
                      )}
                    </span>
                    {playlistVideo.local ? (
                      <Img
                        alt={playlistVideo.snippet.title}
                        fluid={playlistVideo.local.childImageSharp.fluid}
                        sx={{ width: 20, height: 'full' }}
                      />
                    ) : (
                      <img
                        alt={playlistVideo.snippet.title}
                        src={placeholderImg}
                        sx={{ width: 20, height: 'full' }}
                      />
                    )}
                    <div
                      className="hidden flex"
                      sx={{
                        opacity: '0',
                        ':hover': { opacity: '0.75' },
                        display: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 6,
                        bg: 'black',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 'full',
                        height: 'full',
                      }}
                    >
                      <span sx={{ color: 'white', fontSize: 2 }}>Play</span>
                    </div>
                    <div sx={{ width: '4/5', display: 'flex', flexDirection: 'column', px: 2 }}>
                      <div
                        id="nav-0"
                        sx={{
                          width: 'full',
                          mb: 2,
                          color: (theme) => `${theme.colors.gray[8]}`,
                          fontWeight: 'bold',
                          fontSize: 1,
                          letterSpacing: 'tight',
                        }}
                      >
                        {playlistVideo.snippet.title}
                      </div>
                      <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: 0 }}>
                        {playlistVideo.snippet.channelTitle} - {playlistVideo.snippet.publishedAt}
                      </p>
                    </div>
                  </Link>
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

/* Playlist.propTypes = {
  data: PropTypes.shape({
    video: {
      contentDetails: {
        videoId: PropTypes.string,
      },
      id: PropTypes.string,
      snippet: {
        title: PropTypes.string,
        position: PropTypes.number,
        channelTitle: PropTypes.string,
        description: PropTypes.string,
        publishedAt: PropTypes.string,
      },
    },
    playlist: {
      playlistId: PropTypes.string,
      id: PropTypes.string,
      snippet: {
        title: PropTypes.string,
        publishedAt: PropTypes.string,
        channelTitle: PropTypes.string,
      },
      videos: {
        id: PropTypes.string,
        local: {
          childImageSharp: {
            fluid: PropTypes.string,
          },
        },
        snippet: {
          position: PropTypes.number,
          title: PropTypes.string,
          publishedAt: PropTypes.string,
          channelTitle: PropTypes.string,
        },
      },
    },
  }),
};
 */
export const query = graphql`
  query($playlistId: String!) {
    playlist(playlistId: { eq: $playlistId }) {
      playlistId
      id
      snippet {
        title
        publishedAt(formatString: "MMM DD, YYYY")
        channelTitle
        thumbnails {
          default {
            url
          }
          high {
            url
          }
        }
      }
      videos {
        id
        local {
          childImageSharp {
            fluid(maxWidth: 100, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        contentDetails {
          videoId
        }
        positions {
          position
          playlist
        }
        snippet {
          position
          title
          description
          thumbnails {
            default {
              url
            }
            high {
              url
            }
            standard {
              url
            }
            maxres {
              url
            }
            medium {
              url
            }
          }
          publishedAt(formatString: "MMM DD, YYYY")
          channelTitle
        }
      }
    }
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
  }
`;

export default Playlist;
