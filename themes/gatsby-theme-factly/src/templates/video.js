import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Footer from '../components/footer';
import { Play } from '../components/icons';

const items = Array(20).fill({
  title:
    'A video clip from a web series is being falsely shared as ‘Sadhu strangling a policeman brutally’',
  excerpt:
    'After POTUS Donald Trump announced that USA is halting its funding to the WHO, there has been a lot of debate around WHO’s finances. So, who funds the WHO? What is the size of its budget? Here is a detailed explainer.',
  author: ['Pavithra K M', 'Bharath Kancharla'],
  time: '2 Min',
  image: ''
});

function Playlist({ data: { video, playlist } }) {
  const [postItems, setPostItems] = useState(items.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);
  const [activeTab, setActiveTab] = useState({
    All: true
  });
  const [videListHeight, setVideoListHeight] = useState('366px');
  const videoElement = useRef(null);
  const playlistElement = useRef(null);

  const setPlaylistDivHieght = () => {
    if (window.innerWidth <= 1025) {
      setVideoListHeight('auto');
    } else {
      setVideoListHeight(`${videoElement.current.offsetHeight}px`);
    }
  };
  useEffect(() => {
    window.onresize = () => {
      setPlaylistDivHieght();
    };
    setPlaylistDivHieght();
    playlistElement.current.scrollTop =
      document.getElementById(video.id).getBoundingClientRect().y - 200;
    return () => {
      window.onresize = null;
    };
  }, [video.id, videoElement]);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = items.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < items.length);
  };

  console.log('playlist', playlist);

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b mx-2 pb-16 md:mx-10 xl:mx-20">
        <div className="main-content flex flex-col w-full lg:w-3/5">
          <div
            ref={videoElement}
            className="relative"
            style={{ paddingBottom: `56%` }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="w-full flex flex-col py-4">
            <p className="w-full text-gray-600 text-xs lg:text-sm">
              {video.snippet.channelTitle}
            </p>
            <div
              id="nav-0"
              className="w-full font-bold font-sans text-xl leading-tight text-gray-800 mb-2"
            >
              {video.snippet.title}
            </div>
            <p className="text-gray-600 text-xs lg:text-sm">
              {video.snippet.publishedAt}
            </p>
            <input
              type="checkbox"
              className="read-more-state"
              id="video-details"
            />
            <p className="text-base read-more-wrap py-2">
              {video.snippet.description}
            </p>
            <label
              id="lbl-description"
              htmlFor="video-details"
              className="read-more-trigger text-base w-24 text-blue-500 hover:text-blue-600"
            ></label>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-2/5 mt-16 lg:mx-4">
          <div
            ref={playlistElement}
            className="lg:relative lg:overflow-auto h-auto lg:h-screen border lg:shadow-md"
            style={{ height: `${videListHeight}` }}
          >
            <div className="flex flex-col lg:absolute top-0 left-0 w-full h-full">
              <div className="mb-4 p-4 border-b">
                <h5 className="text-base font-medium">
                  {playlist.snippet.title}
                </h5>
                <p className="text-gray-600 text-xs lg:text-sm">
                  {playlist.snippet.channelTitle} - {video.snippet.position + 1}
                  /{playlist.videos.length}
                </p>
              </div>
              {playlist.videos.map(
                (playlistVideo, index) =>
                  playlistVideo.local && (
                    <Link
                      key={playlistVideo.id}
                      id={playlistVideo.id}
                      className={`relative flex flex-row w-full justify-between items-center no-underline hover:no-underline mb-2 py-2 ${video
                        .snippet.position === playlistVideo.snippet.position &&
                        'video-active'}`}
                      to={`playlist/${playlist.playlistId}/${playlistVideo.contentDetails.videoId}`}
                    >
                      <span className="text-sm text-gray-600 px-2">
                        {video.snippet.position ===
                        playlistVideo.snippet.position ? (
                          <Play className="fill-current w-2 h-2"></Play>
                        ) : (
                          index + 1
                        )}
                      </span>
                      <Img
                        alt={playlistVideo.snippet.title}
                        fluid={playlistVideo.local.childImageSharp.fluid}
                        className="w-20 h-full"
                      />
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
                  )
              )}
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
  query($id: String!, $playlistId: String!) {
    playlist(playlistId: { eq: $playlistId }) {
      playlistId
      id
      snippet {
        title
        publishedAt(formatString: "MMMM Do, YYYY")
        channelTitle
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
          publishedAt(formatString: "MMMM Do, YYYY")
          channelTitle
        }
      }
    }
    video(id: { eq: $id }) {
      id
      snippet {
        position
        channelTitle
        title
        description
        publishedAt(formatString: "MMMM Do, YYYY")
        channelTitle
      }
      contentDetails {
        videoId
      }
    }
  }
`;

export default Playlist;
