import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
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

function Playlist({ data }) {
  const [postItems, setPostItems] = useState(items.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);
  const [activeTab, setActiveTab] = useState({
    All: true
  });
  const [videListHeight, setVideoListHeight] = useState('366');
  const videoElement = useRef(null);

  useEffect(() => {
    window.onresize = () => {
      setVideoListHeight(videoElement.current.offsetHeight);
    };
    setVideoListHeight(videoElement.current.offsetHeight);
  }, [videoElement]);
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = items.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < items.length);
  };

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
              title="Youtube"
              src="https://www.youtube.com/embed/EWryTZC4bLE"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="w-full flex flex-col py-4">
            <p className="w-full text-gray-600 text-xs lg:text-sm">Stories</p>
            <div
              id="nav-0"
              className="w-full font-bold font-sans text-xl leading-tight text-gray-800 mb-2"
            >
              Was this woman really arrested in Australia for wearing a burqa?
              || Factly
            </div>
            <p className="text-gray-600 text-xs lg:text-sm">Apr, 21 2020</p>
            <input
              type="checkbox"
              className="read-more-state"
              id="video-details"
            />
            <p className="text-base read-more-wrap py-2">
              Rakesh closely watched the 'Jan Satyagraha' in 2012. The courage
              and conviction of the man who led it inspired him to make
              'engagement and confrontation' his core pricinciple.
              <span className="read-more-target">
                Rakesh is an Open Data evangelist and experienced transparency
                (RTI) campaigner in India who won the US State Department
                Fellowship in 2014. Rakesh graduated from National Institute of
                Technology (NIT), Warangal. He has immense knowledge and
                experience understanding government policy and data. He is a
                fearless leader with an empirical world-view. Rakesh is the
                Editorial Lead and the idea machine at Factly.
              </span>
            </p>
            <label
              htmlFor="video-details"
              className="read-more-trigger text-base w-24 text-blue-500 hover:text-blue-600"
            ></label>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-2/5 pt-16 lg:px-4">
          <div className="lg:relative lg:overflow-auto h-auto lg:h-screen">
            <div className="flex flex-col lg:absolute top-0 left-0 w-full h-full">
              <div className="mb-4 pb-4 border-b">
                <h5 className="text-base font-medium">
                  PAUSE - Debunking Fake News
                </h5>
                <p className="text-gray-600 text-xs lg:text-sm">
                  Factly - 2/100
                </p>
              </div>
              {items.map((item, index) => (
                <a
                  className={`relative flex flex-row w-full justify-between items-center no-underline hover:no-underline mb-2 ${index ===
                    2 && 'video-active'}`}
                  href="/playlist"
                >
                  <span className="text-sm text-gray-600 px-2">
                    {index === 2 ? (
                      <Play className="fill-current w-2 h-2"></Play>
                    ) : (
                      index + 1
                    )}
                  </span>
                  <img
                    alt=""
                    src="https://source.unsplash.com/collection/9419734/100x56"
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
                      Was this woman really arrested in Australia for wearing a
                      burqa? || Factly
                    </div>
                    <p className="text-gray-600 text-xs">
                      Factly - Apr, 21 2020
                    </p>
                  </div>
                </a>
              ))}
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
    file: {
      childImageSharp: {}
    }
  })
};
export default Playlist;
