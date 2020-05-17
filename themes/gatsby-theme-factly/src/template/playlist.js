import React, { useState, useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import _ from "lodash";
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Footer from '../components/footer';
import { Play } from '../components/icons';
import defaultImg from '../static/images/default.png';
import InfiniteScroll from 'react-infinite-scroller';

function Playlist({ data: { playlist }, location }) {
  const videoId = location.search.substring(1).split('=')[1];
  const [schemaVideoList, setSchemaVideoList] = useState();
  const [videoListHeight, setVideoListHeight] = useState('366px');
  const [schemaVideo, setSchemaVideo] = useState({});
  const [activeVideo, setActiveVideo] = useState(() => {
    if (videoId) {
      const videoIndex = playlist.videos.findIndex(
        video => video.contentDetails.videoId === videoId
      );
      return {
        videoIndex,
        video: playlist.videos[videoIndex]
      }
    }
    return {
      videoIndex: 0,
      video: playlist.videos[0]
    }
  });
  const [postItems, setPostItems] = useState(() => {
    const video =  playlist.videos.splice(activeVideo.videoIndex, 1)
    playlist.videos.unshift(video[0])
    return playlist.videos.slice(0, 20)
  });
  
  const [hasNextPage, setHasNextPage] = useState(true);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = playlist.videos.slice(postItems.length, postItems.length + 20);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < playlist.videos.length);
  };

  const videoElement = useRef(null);
  const playlistElement = useRef(null);

  const setPlaylistDivHieght = () => {
    if (window.innerWidth <= 1025) {
      setVideoListHeight('auto');
    } else {
      setVideoListHeight(`${document.getElementsByClassName('main-content')[0].clientHeight}px`);
    }
  };

  useEffect(() => {
    const videoIndex = playlist.videos.findIndex(
      video => video.contentDetails.videoId === videoId
    );
    if (videoIndex >= 0) {
      setActiveVideo({
        video: playlist.videos[videoIndex],
        videoIndex
      });
    }
  }, [playlist.videos, videoId]);

  useEffect(() => {
    setVideoSchemaObject();
  }, [activeVideo]);

  const setVideoSchemaObject = () => {
    setSchemaVideo({
      "@context": "http://schema.org/",
      "@type": "VideoObject",
      "name": activeVideo.video.snippet.title,
      "description": activeVideo.video.snippet.description,
      "thumbnailUrl": [
        activeVideo.video.snippet.thumbnails.high.url,
        activeVideo.video.snippet.thumbnails.default.url,
      ],
      "uploadDate": activeVideo.video.snippet.publishedAt,
      "embedUrl": `https://www.youtube.com/embed/${activeVideo.video.contentDetails.videoId}`,
      "interactionStatistic": {
        "@type": "InteractionCounter",
        "interactionType": { "@type": "http://schema.org/WatchAction" },
      }
    })
  }

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
  
  return (
    <Layout>
      <Helmet>
        <title>{activeVideo.video.snippet.title}</title>
        <meta name="description" content={activeVideo.video.snippet.description} />
        <meta name="image" content={activeVideo.video.snippet.thumbnails.default.url} />
        <script type="application/ld+json">{JSON.stringify(schemaVideo)}</script>
      </Helmet>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b mx-2 pb-16 md:mx-10 xl:mx-20">
        <div className="main-content flex flex-col w-full lg:w-3/5">
          <div
            ref={videoElement}
            className="relative"
            style={{ paddingBottom: `56%` }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              title={activeVideo.video.snippet.title}
              src={`https://www.youtube.com/embed/${activeVideo.video.contentDetails.videoId}`}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="w-full flex flex-col py-4">
            <p className="w-full text-gray-600 text-xs lg:text-sm">
              {activeVideo.video.snippet.channelTitle}
            </p>
            <div
              id="nav-0"
              className="w-full font-bold font-sans text-xl leading-tight text-gray-800 mb-2"
            >
              {activeVideo.video.snippet.title}
            </div>
            <p className="text-gray-600 text-xs lg:text-sm">
              {activeVideo.video.snippet.publishedAt}
            </p>
            <p className="text-base read-more-wrap py-2">
              {activeVideo.video.snippet.description}
            </p>
          </div>
        </div>
        <div 
        className="flex flex-col w-full lg:w-2/5 mt-16 lg:mx-4 h-screen border lg:shadow-md"
        style={{height: videoListHeight }}
        >
          <div className="mb-4 p-4 border-b">
            <h5 className="text-base font-medium">
              {playlist.snippet.title}
            </h5>
            <p className="text-gray-600 text-xs lg:text-sm">
              {playlist.snippet.channelTitle} -{' '}
              {activeVideo.videoIndex + 1}/{playlist.videos.length}
            </p>
          </div>
          <div
            ref={playlistElement}
            className="lg:relative lg:overflow-auto h-screen"
            style={{height: videoListHeight }}
          >
            <div className="flex flex-col lg:absolute top-0 left-0 w-full h-full">
                <InfiniteScroll
                  pageStart={0}
                  element="section"
                  loadMore={handleLoadMore}
                  hasMore={hasNextPage}
                  useWindow={videoListHeight === 'auto'}
                  getScrollParent={() => playlistElement.current}
                  loader={
                    <div className="loader" key={0}>
                      Loading ...
                    </div>
                  }
                >
                {postItems.map((playlistVideo, index) => (
                    <Link
                      key={playlistVideo.id}
                      id={playlistVideo.id}
                      className={`relative flex flex-row w-full justify-between items-center no-underline hover:no-underline mb-2 py-2 
                      ${activeVideo.videoIndex === index && 'video-active'}`}
                      to={`playlist/${playlist.playlistId}?v=${playlistVideo.contentDetails.videoId}`}
                    >
                      <span className="text-sm text-gray-600 px-2">
                        {activeVideo.videoIndex === index ? (
                          <Play className="fill-current w-2 h-2"></Play>
                        ) : (
                          index + 1
                        )}
                      </span>
                      {playlistVideo.local ? (
                        <Img
                          alt={playlistVideo.snippet.title}
                          fluid={playlistVideo.local.childImageSharp.fluid}
                          className="w-20 h-full"
                        />
                      ) : (
                        <Img
                          alt={playlistVideo.snippet.title}
                          fluid={defaultImg}
                          className="w-20 h-full"
                        />
                      )}
                      <div className="hidden opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                        <span className="text-white text-base">Play</span>
                      </div>
                      <div className="w-4/5 flex flex-col px-2">
                        <div
                          id="nav-0"
                          className="w-full font-bold font-sans text-sm leading-tight text-gray-800 mb-2"
                        >
                          {playlistVideo.snippet.title}
                        </div>
                        <p className="text-gray-600 text-xs">
                          {playlistVideo.snippet.channelTitle} -{' '}
                          {playlistVideo.snippet.publishedAt}
                        </p>
                      </div>
                    </Link>
                  ))}
              </InfiniteScroll>
              
            </div>
          </div>
        </div>
      </div>
      <Footer full></Footer>
    </Layout>
  );
}

Playlist.propTypes = {
  data: PropTypes.shape({
    video: {
      contentDetails: {
        videoId: PropTypes.string
      },
      id: PropTypes.string,
      snippet: {
        title: PropTypes.string,
        position: PropTypes.number,
        channelTitle: PropTypes.string,
        description: PropTypes.string,
        publishedAt: PropTypes.string
      }
    },
    playlist: {
      playlistId: PropTypes.string,
      id: PropTypes.string,
      snippet: {
        title: PropTypes.string,
        publishedAt: PropTypes.string,
        channelTitle: PropTypes.string
      },
      videos: {
        id: PropTypes.string,
        local: {
          childImageSharp: {
            fluid: PropTypes.string
          }
        },
        snippet: {
          position: PropTypes.number,
          title: PropTypes.string,
          publishedAt: PropTypes.string,
          channelTitle: PropTypes.string
        }
      }
    }
  })
};

export const query = graphql`
  query($id: String!) {
    playlist(playlistId: { eq: $id }) {
      playlistId
      id
      snippet {
        title
        publishedAt(formatString: "MMMM Do, YYYY")
        channelTitle
        thumbnails {
          default {
            url
          }
          high{
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
        snippet {
          position
          title
          description
          publishedAt(formatString: "MMMM Do, YYYY")
          channelTitle
          thumbnails {
            default {
              url
            }
            high{
              url
            }
          }
        }
      }
    }
  }
`;

export default Playlist;
