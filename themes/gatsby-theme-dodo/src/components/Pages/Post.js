/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import Post from '@components/Post/index.js';
import Layout from '@components/Layout/index';
import { isBrowser } from '@helpers/isBrowser';
import Seo from '@components/Seo';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Link } from 'gatsby';
import parseDate from '@helpers/parseDate';
import StoryCard from '../UI/StoryCard';

/**
 * TODO: Add loader for infinite-scroller
 */
const PostDetails = ({ data }) => {
  const { posts, space, post, recentPosts } = data;
  const postEdge = posts.edges.filter(({ node }) => node.id === post.id)[0];
  const relatedPosts = posts.edges
    .filter(({ node }) => {
      if (post.categories.length > 0) {
        return node.categories.find((category) => category.id === post.categories[0].id);
      }
    })
    .slice(0, 4);
  const { previous: previousPost, next: nextPost } = postEdge;

  const [showSocialIcon, setShowSocialIcon] = React.useState(false);

  const [observer, setObserver] = React.useState({
    observe: () => {},
  });

  const handleShowSocialIcon = (entry) => {
    if (entry.intersectionRatio > 0) {
      setShowSocialIcon(false);
    } else {
      setShowSocialIcon(true);
    }
  };

  const createObserver = () => {
    const o = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.hasAttribute('social-icon')) {
          handleShowSocialIcon(entry);
        }
      });
    });
    setObserver(o);
  };
  React.useEffect(() => {
    createObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // for sharing links
  const title = encodeURIComponent(post.title);
  let url;
  if (isBrowser) {
    url = encodeURIComponent(window.location.href);
  }

  return (
    <Layout>
      <Seo
        title={post.title}
        description={post.excerpt}
        image={`${post.medium?.url?.proxy}`}
        canonical={`${space.site_address}/${post.slug}`}
        type="article"
      />
      <div>
        <Post key={`details${post.id}`} post={post} observer={observer} />
        <div className="c-section c-section--related">
          <div className="l-grid">
            <div className="c-section-heading">
              <h2 className="c-section-heading__title">Related</h2>
            </div>
          </div>

          <div className="l-grid l-grid--4-columns">
            {relatedPosts.map(({ node: post }) => (
              <StoryCard storyData={post} />
            ))}
          </div>
        </div>

        <div className="c-section c-section--latest">
          <div className="l-grid">
            <div className="c-section-heading">
              <h2 className="c-section-heading__title">Latest</h2>
            </div>
          </div>

          <div className="l-grid l-grid--4-columns">
            {recentPosts.nodes.slice(0, 4).map((post) => (
              <StoryCard storyData={post} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;
