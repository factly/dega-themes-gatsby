import React, { useState, useEffect, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import Layout from '../components/layout';
import ListItems from '../components/listItems';
import Footer from '../components/footer';
import Post from '../components/post';

const items = Array(20).fill({
  title:
    'A video clip from a web series is being falsely shared as ‘Sadhu strangling a policeman brutally’',
  excerpt:
    'After POTUS Donald Trump announced that USA is halting its funding to the WHO, there has been a lot of debate around WHO’s finances. So, who funds the WHO? What is the size of its budget? Here is a detailed explainer.',
  author: ['Pavithra K M', 'Bharath Kancharla'],
  time: '2 Min',
  image: ''
});
const posts = Array(1000).fill({
  title:
    'A video clip from a web series is being falsely shared as ‘Sadhu strangling a policeman brutally’',
  excerpt:
    'After POTUS Donald Trump announced that USA is halting its funding to the WHO, there has been a lot of debate around WHO’s finances. So, who funds the WHO? What is the size of its budget? Here is a detailed explainer.',
  author: ['Pavithra K M', 'Bharath Kancharla'],
  time: '2 Min',
  image: ''
});
const PostDetails = ({ data }) => {
  const [postItems, setPostItems] = useState(posts.slice(0, 1));
  const [hasNextPage, setHasNextPage] = useState(true);
  const [showSocialIcon, setShowSocialIcon] = useState(false);
  const [postActiveIndex, setPostActiveIndex] = useState(0);
  const [relatedPosts, setRelatedPosts] = useState(posts.slice(0, 10));
  const [hasNextPageRelatedPost, setHasNextPageRelatedPost] = useState(true);
  const [observer, setObserver] = useState({
    observe: () => {}
  });
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = posts.slice(postItems.length, postItems.length + 1);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < posts.length);
  };

  const handleLoadMoreRelatedPosts = () => {
    if (!hasNextPageRelatedPost) return false;
    const nextPageItems = posts.slice(
      relatedPosts.length,
      relatedPosts.length + 10
    );
    setRelatedPosts([...relatedPosts, ...nextPageItems]);
    setHasNextPageRelatedPost(relatedPosts.length < posts.length);
  };

  const handleShowSocialIcon = entry => {
    if (entry.intersectionRatio > 0) {
      setShowSocialIcon(false);
    } else {
      setShowSocialIcon(true);
    }
  };

  const handleSetActiveLink = entry => {
    const id = entry.target.getAttribute('id');
    if (entry.intersectionRatio > 0) {
      setPostActiveIndex(parseInt(id));
    }
  };

  const createObserver = () => {
    const o = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target.hasAttribute('social-icon')) {
          console.log('entry', entry);

          handleShowSocialIcon(entry);
        } else if (entry.target.hasAttribute('post')) {
          handleSetActiveLink(entry);
        }
      });
    });
    setObserver(o);
  };
  useEffect(() => {
    createObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="flex flex-row justify-between">
        <div className="sidebar lg:flex lg:w-1/4 border-r border-l sticky">
          <div className="mb-4 pb-4 border-b px-6">
            <h5 className="heading">Other Posts</h5>
          </div>
          <InfiniteScroll
            pageStart={0}
            loadMore={handleLoadMoreRelatedPosts}
            hasMore={hasNextPageRelatedPost}
            useWindow={false}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {relatedPosts.map((item, index) => (
              <ListItems
                item={item}
                index={index}
                postActiveIndex={postActiveIndex}
                author={false}
                image={false}
                tags
                className="py-2 px-6 border-gray-200"
              />
            ))}
          </InfiniteScroll>
        </div>
        <div className="flex flex-col w-full lg:w-3/4 p-2 lg:p-6">
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
              <Post index={index} observer={observer} />
            ))}
          </InfiniteScroll>
          {showSocialIcon && (
            <div
              className="hidden md:flex flex-col fixed right-0 top-auto items-center justify-start md:justify-end"
              style={{
                top: '40vh'
              }}
            >
              {[1, 2, 3, 4].map(() => (
                <a
                  className="block px-2 py-1 font-semibold rounded hover:bg-gray-800"
                  href="/"
                >
                  <svg
                    className="fill-current text-gray-400  w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Twitter</title>
                    <path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
                  </svg>
                </a>
              ))}
            </div>
          )}
          {showSocialIcon && (
            <div className="lg:hidden fixed m-2 bottom-0 right-0">
              <svg
                className="fill-current stroke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
              >
                <g transform="translate(-807 -2277)">
                  <ellipse
                    cx="18"
                    cy="18"
                    rx="18"
                    ry="18"
                    transform="translate(807 2277)"
                    stroke="#fff"
                  />
                  <path
                    d="M18,0A18,18,0,1,0,36,18,18,18,0,0,0,18,0ZM16,18a3.158,3.158,0,0,1-.188,1.068l5.024,2.417a3.225,3.225,0,1,1-.789,1.64L14.7,20.552a3.162,3.162,0,1,1,0-5.1l5.349-2.572a3.165,3.165,0,1,1,.788,1.64L15.81,16.932A3.153,3.153,0,0,1,16,18Z"
                    transform="translate(806.999 2277)"
                    fill="#fff"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

PostDetails.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default PostDetails;
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
