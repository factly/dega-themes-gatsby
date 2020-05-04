import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';
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

const tabs = ['All', 'Stories', 'Factcheck'];

function Playlists({ data }) {
  const [postItems, setPostItems] = useState(items.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);
  const [activeTab, setActiveTab] = useState({
    All: true
  });
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = items.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < items.length);
  };

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row justify-between lg:border-b">
        <div className="main-content w-full mx-auto -my-8 lg:my-0">
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
          <div className="flex flex-row flex-wrap py-6 justify-center items-center">
            {items.map(() => (
              <a
                className="flex flex-col w-1/6 no-underline hover:no-underline m-2"
                href="/playlist"
              >
                <div className="relative h-32">
                  <img
                    alt=""
                    src="https://source.unsplash.com/collection/9419734/100x100"
                    className="h-full w-full"
                  />
                  <div className="flex justify-center items-center p-6 bg-black opacity-75 absolute h-full top-0 right-0">
                    <span className="text-white">34</span>
                  </div>
                  <div className="opacity-0 hover:opacity-75 flex justify-center items-center p-6 bg-black absolute w-full h-full top-0 left-0">
                    <span className="text-white text-base">Play All</span>
                  </div>
                </div>
                <div className="w-full flex flex-col py-2">
                  <div
                    id="nav-0"
                    className="w-full font-bold font-sans text-lg text-gray-800"
                  >
                    A video clip from a web series
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm">
                    Apr, 21 2020
                  </p>
                  <span className="text-gray-600 text-xs md:text-sm pt-4 uppercase">
                    View full playlist
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer full></Footer>
    </Layout>
  );
}

Playlists.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default Playlists;
