import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
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
      <div className="flex flex-col lg:flex-row justify-between lg:border-b mx-2 pb-16 md:mx-20 xl:mx-40">
        <div className="main-content flex flex-col w-full lg:w-8/12">
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
              id="author-details"
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
              htmlFor="author-details"
              className="read-more-trigger text-base w-24 text-blue-500 hover:text-blue-600"
            ></label>
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-4/12 pt-16 lg:px-4">
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
              {items.map(() => (
                <a
                  className="flex flex-row w-full justify-between items-start no-underline hover:no-underline mb-2"
                  href="/playlist"
                >
                  <div className="relative h-20">
                    <img
                      alt=""
                      src="https://source.unsplash.com/collection/9419734/100x100"
                      className="h-full w-full"
                    />
                    <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                      <span className="text-white text-base">Play</span>
                    </div>
                  </div>
                  <div className="w-full flex flex-col px-2">
                    <div
                      id="nav-0"
                      className="w-full font-bold font-sans text-base leading-tight text-gray-800 mb-2"
                    >
                      Was this woman really arrested in Australia for wearing a
                      burqa? || Factly
                    </div>
                    <p className="text-gray-600 text-xs lg:text-sm">
                      Apr, 21 2020
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
