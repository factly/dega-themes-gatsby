import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';
import Footer from '../components/footer';
import img from '../static/images/i.jpg';

const items = Array(20).fill({
  title:
    'A video clip from a web series is being falsely shared as ‘Sadhu strangling a policeman brutally’',
  excerpt:
    'After POTUS Donald Trump announced that USA is halting its funding to the WHO, there has been a lot of debate around WHO’s finances. So, who funds the WHO? What is the size of its budget? Here is a detailed explainer.',
  author: ['Pavithra K M', 'Bharath Kancharla'],
  time: '2 Min',
  image: ''
});

const topCategory = [
  {
    title: 'Goverment2 of India',
    slug: '#goverment-of-india'
  },
  {
    title: 'Coronavirus 0',
    slug: '#coronavirus'
  },
  {
    title: 'Business In India',
    slug: '#business-in-india'
  },
  {
    title: 'Goverment of India',
    slug: '#goverment-of-india'
  },
  {
    title: 'Coronavirus',
    slug: '#coronavirus'
  },
  {
    title: 'Business In India',
    slug: '#business-in-india'
  }
];
function IndexPage({ data }) {
  const [postItems, setPostItems] = useState(items.slice(0, 2));
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = items.slice(postItems.length, postItems.length + 2);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < items.length);
  };

  return (
    <Layout>
      <div className="flex flex-row justify-between lg:border-b">
        <div className="sidebar xl:flex xl:w-1/4 border-r sticky">
          <div className="block">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="heading">Headlines</h5>
            </div>
            {topCategory.map((item, index) => (
              <ListItems
                hashRoute
                item={item}
                index={index}
                image={false}
                author={false}
                className="py-2 px-6 border-gray-200"
              />
            ))}
          </div>
          <div className="flex w-full justify-start items-start my-4 p-4">
            <img
              alt=""
              src="https://factly.in/wp-content/uploads//2018/09/banner-survey-side.png"
              className="w-full object-cover rounded"
            />
          </div>
        </div>
        <div className="main-content w-full md:w-3/4 xl:w-2/4 mx-auto">
          {/* <div className="mb-4 pb-4 border-b">
              <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                Top In Factchecks
              </h5>
            </div> */}
          <div className="bg-white rounded-t rounded-b-none overflow-hidden px-6">
            <a
              href="#"
              className="flex flex-wrap no-underline hover:no-underline"
            >
              <img
                src="https://source.unsplash.com/collection/9419734/500x300"
                className="h-full w-full rounded"
              />
              <p className="w-full text-gray-600 text-xs md:text-sm pt-2">
                Factchecks
              </p>
              <div className="w-full font-bold text-xl leading-tight text-gray-900 break-all">
                Lorem ipsum dolor sit amet.
              </div>
              <p className="text-gray-800 font-sans text-lg pt-2 break-all">
                Lorem ipsum eu nunc commodo posuere et sit amet ligula.Lorem
                ipsum eu nunc commodo posuere et sit amet ligula.Lorem ipsum eu
                nunc commodo posuere et sit amet ligula.Lorem ipsum eu nunc
                commodo posuere et sit amet ligula. Lorem ipsum eu nunc commodo
                posuere et sit amet ligula.Lorem ipsum eu nunc commodo posuere
                et sit amet ligula.Lorem ipsum eu nunc commodo posuere et sit
                amet.
              </p>
            </a>
            <div className="flex-none mt-auto py-4">
              <div className="flex items-center justify-between">
                <div className="flex justify-center items-center">
                  <a href="/" className="text-gray-600 text-xs md:text-sm mr-2">
                    John Doe,
                  </a>
                  <a href="/" className="text-gray-600 text-xs md:text-sm mr-2">
                    John Doe Second
                  </a>
                </div>
                <p className="text-gray-600 text-xs md:text-sm">Apr, 21 2020</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-6">
            <div id="goverment-of-india">
              <div className="mb-4 pb-4 border-b px-6">
                <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                  Goverment Of India
                </h5>
              </div>
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
            <div id="coronavirus">
              <div className="border-b p-6">
                <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                  Coronavirus
                </h5>
              </div>
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
            <div id="business-in-india">
              <div className="border-b p-6">
                <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                  Business In India
                </h5>
              </div>
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
            <div id="more-stories">
              <div className="border-b p-6">
                <h5 className="font-semibold text-2xl leading-tight text-gray-900">
                  More stories from factly.....
                </h5>
              </div>
              <InfiniteScroll
                pageStart={0}
                loadMore={handleLoadMore}
                hasMore={hasNextPage}
                loader={
                  <div className="loader" key={0}>
                    Loading ...
                  </div>
                }
              >
                {postItems.map((item, index) => (
                  <ListItems
                    orientation="vertical horizontal"
                    item={item}
                    index={index}
                    tags
                    excerpt
                    imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
                  />
                ))}
              </InfiniteScroll>
            </div>
          </div>
        </div>
        <div className="sidebar lg:flex lg:w-2/6 xl:w-1/4 border-l sticky">
          <div className="block">
            <div className="mb-4 pb-4 border-b px-6">
              <h5 className="heading">Top In Factchecks</h5>
            </div>
            {items.slice(0, 10).map((item, index) => (
              <ListItems
                orientation="vertical"
                imageSize="h-40"
                tags
                item={item}
                index={index}
              />
            ))}
            <Footer></Footer>
          </div>
        </div>
      </div>
    </Layout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default IndexPage;
export const query = graphql`
  query {
    file(relativePath: { eq: "logo/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
