/** @jsx jsx */
import React from 'react';
import { graphql } from 'gatsby';
import InfiniteScroll from 'react-infinite-scroller';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitterSquare,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';

import { jsx } from 'theme-ui';
import Post from '../components/Post';
import StoryLinks from '../components/StoryLinks';
import Layout from '../components/Layout';
import { isBrowser } from '../utils/isBrowser';

const PostDetails = ({ data }) => {
  const { dega } = data;

  const posts = dega.posts.nodes.filter((post) => post.id !== dega.post.id);
  posts.unshift(dega.post);

  const [postItems, setPostItems] = React.useState(posts.slice(0, 1));
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [showSocialIcon, setShowSocialIcon] = React.useState(false);
  const [postActiveIndex, setPostActiveIndex] = React.useState(parseInt(dega.post.id));
  const [relatedPosts, setRelatedPosts] = React.useState(posts.slice(0, 10));
  const [hasNextPageRelatedPost, setHasNextPageRelatedPost] = React.useState(true);
  const [observer, setObserver] = React.useState({
    observe: () => {},
  });
  const handleLoadMore = () => {
    if (!hasNextPage) return false;
    const nextPageItems = posts.slice(postItems.length, postItems.length + 1);
    setPostItems([...postItems, ...nextPageItems]);
    setHasNextPage(postItems.length < posts.length);
  };

  const handleLoadMoreRelatedPosts = () => {
    if (!hasNextPageRelatedPost) return false;

    const nextPageItems = posts.slice(relatedPosts.length, relatedPosts.length + 10);
    setRelatedPosts([...relatedPosts, ...nextPageItems]);
    setHasNextPageRelatedPost(relatedPosts.length < posts.length);
  };

  const handleShowSocialIcon = (entry) => {
    if (entry.intersectionRatio > 0) {
      setShowSocialIcon(false);
    } else {
      setShowSocialIcon(true);
    }
  };

  const handleSetActiveLink = (entry) => {
    const id = entry.target.getAttribute('slug');
    if (entry.intersectionRatio > 0) {
      setPostActiveIndex(id);
      if (isBrowser) {
        window.history.pushState('page2', 'Title', `/${id}`);
      }
    }
  };

  const createObserver = () => {
    const o = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.hasAttribute('social-icon')) {
          handleShowSocialIcon(entry);
        }
        if (entry.target.hasAttribute('post')) {
          handleSetActiveLink(entry);
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
  const title = encodeURIComponent(dega.post.title);
  const url = isBrowser ? window.location.href : dega.post.slug;
  return (
    <Layout>
      <Helmet>
        <title>{dega.post.title}</title>
        {/* <link
          rel="amphtml"
          href={typeof window !== 'undefined' ? window.location.href.concat('amp') : ''}
        /> */}
      </Helmet>
      <div sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div
          className="sidebar"
          sx={{
            display: [null, null, null, 'flex'],
            width: [null, null, null, '1/4'],
            borderRightWidth: 'px',
            borderLeftWidth: 'px',
            position: 'sticky',
          }}
        >
          <div sx={{ pb: 4, borderBottomWidth: 'px', px: 6 }}>
            <h5 className="heading" sx={{ m: 0 }}>
              Recent Posts
            </h5>
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
            {relatedPosts.map((post, index) => (
              <StoryLinks
                key={`link${post.id}`}
                post={post}
                postActiveIndex={postActiveIndex}
                categories
                index={index}
              />
            ))}
          </InfiniteScroll>
        </div>
        <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: ['full', null, null, '3/4'],
            p: [2, null, null, 6],
          }}
        >
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
            {postItems.map((item) => (
              <Post key={`details${item.id}`} post={item} observer={observer} />
            ))}
          </InfiniteScroll>
          {showSocialIcon && (
            <>
              <div
                className="top-auto"
                style={{
                  top: '40vh',
                }}
                sx={{
                  display: ['none', null, 'flex'],
                  flexDirection: 'column',
                  position: 'fixed',
                  right: 0,
                  alignItems: 'center',
                  justifyContent: ['flex-start', null, 'flex-end'],
                  top: '40vh',
                }}
              >
                <a
                  title="Share on Facebook"
                  href={`https://www.facebook.com/sharer.php?u=${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    mx: 2,
                    '&:first-child': { mx: 0 },
                    my: 2,
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                  }}
                >
                  <FontAwesomeIcon color="#3b5998" size="lg" icon={faFacebookSquare} />
                </a>
                <a
                  title="Tweet it"
                  href={`https://twitter.com/share?text=${title}-&url=${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    mx: 2,
                    '&:first-child': { mx: 0 },
                    my: 2,
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                  }}
                >
                  <FontAwesomeIcon color="#1da1f2" size="lg" icon={faTwitterSquare} />
                </a>
                <a
                  title="Share on WhatsApp"
                  href={`https://api.whatsapp.com/send?text=${title}-${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'block',
                    mx: 2,
                    '&:first-child': { mx: 0 },
                    my: 2,
                    fontWeight: 'semibold',
                    borderRadius: 'default',
                  }}
                >
                  <FontAwesomeIcon color="#25d366" size="lg" icon={faWhatsappSquare} />
                </a>
              </div>
              <div
                sx={{
                  display: [null, null, null, 'none'],
                  position: 'fixed',
                  m: 2,
                  bottom: 0,
                  right: 0,
                }}
              >
                <svg
                  sx={{
                    fill: 'currentColor',
                    stroke: 'currentColor',
                    color: (theme) => `${theme.colors.gray[4]}`,
                  }}
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
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;

export const query = graphql`
  query($id: Int!, $sid: [Int!]) {
    dega {
      posts(page: 1, limit: 20, sortBy: "created_at", sortOrder: "desc", spaces: $sid) {
        nodes {
          created_at
          description
          excerpt
          id
          schemas
          slug
          status
          subtitle
          title
          updated_at
          users {
            email
            first_name
            last_name
            id
          }
          tags {
            id
            name
            slug
            description
          }
          medium {
            alt_text
            id
            url
          }
          format {
            name
            slug
            id
            description
          }
          claims {
            checked_date
            claim_date
            claim_sources
            claimant {
              description
              id
              name
              slug
              tag_line
            }
            description
            id
            review
            review_sources
            review_tag_line
            slug
            title
            rating {
              description
              id
              name
              numeric_value
              slug
              medium {
                alt_text
                id
                url
              }
            }
          }
          categories {
            description
            created_at
            id
            name
            slug
            medium {
              alt_text
              id
              url
            }
          }
        }
      }
      post(id: $id) {
        created_at
        description
        excerpt
        id
        schemas
        slug
        status
        subtitle
        title
        updated_at
        users {
          email
          first_name
          last_name
          id
        }
        tags {
          id
          name
          slug
          description
        }
        medium {
          alt_text
          id
          url
        }
        format {
          name
          slug
          id
          description
        }
        claims {
          checked_date
          claim_date
          claim_sources
          claimant {
            description
            id
            name
            slug
            tag_line
          }
          description
          id
          review
          review_sources
          review_tag_line
          slug
          title
          rating {
            description
            id
            name
            numeric_value
            slug
            medium {
              alt_text
              id
              url
            }
          }
        }
        categories {
          description
          created_at
          id
          name
          slug
          medium {
            alt_text
            id
            url
          }
        }
      }
    }
  }
`;
