import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';

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

function Author({ data }) {
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
        <div className="main-content order-2 lg:order-1 lg:w-3/5 mx-auto -my-8 lg:my-0">
          <div className="flex flex-col py-6">
            <ul className="flex border-b">
              {tabs.map(tab => (
                <li className="-mb-px mr-1">
                  <button
                    type="button"
                    className={`bg-white inline-block py-2 px-4 font-semibold focus:outline-none border-b 
                    ${activeTab[tab] && 'border-blue-500'}`}
                    onClick={() => setActiveTab({ [tab]: tab })}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
            {(activeTab.All || activeTab.Stories) && (
              <div>
                {activeTab.All && (
                  <div className="border-b p-6">
                    <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                      Stories
                    </h5>
                  </div>
                )}
                {items.slice(0, 4).map((item, index) => (
                  <ListItems
                    orientation="vertical horizontal"
                    item={item}
                    index={index}
                    tags
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                  />
                ))}
              </div>
            )}
            {(activeTab.All || activeTab.Factcheck) && (
              <div>
                {activeTab.All && (
                  <div className="border-b p-6">
                    <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                      Factcheck
                    </h5>
                  </div>
                )}
                {items.slice(0, 4).map((item, index) => (
                  <ListItems
                    orientation="vertical horizontal"
                    item={item}
                    index={index}
                    image={false}
                    author={false}
                    tags
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col order-1 lg:order-2 w-full lg:w-2/5 border-l pt-10 lg:pt-20 sticky">
          <div className="flex flex-col px-6">
            <div className="flex py-4">
              <img
                alt=""
                src="https://images.degacms.com/dega-content/factly/2019/10/1569975232551-rakesh-dubbudu.jpg"
                className="h-20 lg:h-40 object-cover rounded"
              />
              <div className="px-4">
                <h2 className="font-bold">Rakesh Dubbudu</h2>
                <a
                  href="mailto:rakesh@factly.in"
                  className="font-medium text-blue-500 text-lg "
                >
                  rakesh@factly.in
                </a>
              </div>
            </div>
            <input
              type="checkbox"
              className="read-more-state"
              id="author-details"
            />
            <p className="text-base read-more-wrap">
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
      </div>
    </Layout>
  );
}

Author.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default Author;
