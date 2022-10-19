/** @jsx jsx */
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import FactCheckWidget from '@components/Post/FactCheckWidget';
import Badge from '@components/Post/Badge';
import parseEditorJsData from '@helpers/parseEditorJsData';
import Seo from '@components/Seo';
import { Link } from 'gatsby';
import parseDate from '@helpers/parseDate';
import {
  FaRegClock,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaPinterestSquare,
  FaLinkedinIn,
  FaEnvelope,
  FaLink,
} from 'react-icons/fa';
//import { FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';
import { isBrowser } from '@helpers/isBrowser';

/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post, observer }) => {
  const postSection = useRef(null);
  // const headerSocialIcon = createRef();

  // useEffect(() => {
  //   observer.observe(postSection.current);
  //   observer.observe(headerSocialIcon.current);
  // }, [observer, postSection, headerSocialIcon]);
  const title = encodeURIComponent(post.title);
  let url;
  if (isBrowser) {
    url = encodeURIComponent(window.location.href);
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <Helmet>
        {post.schemas &&
          post.schemas.map((schema, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))}
      </Helmet>
      <article
        post={post.id}
        ref={postSection}
        slug={post.slug}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: (theme) => `${theme.space.spacing6}`,
          my: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.body}`,
          '&:first-of-type': {
            mt: 0,
          },
        }}
      >
        <div
          sx={{
            bg: (theme) => `${theme.colors.bgLight}`,
            borderTopLeftRadius: 'default',
            borderTopRightRadius: 'default',
            borderBottomLeftRadius: 'none',
            borderBottomRightRadius: 'none',
            overflow: 'hidden',
          }}
        >
          <h1
            sx={{
              fontSize: '4rem',
              fontWeight: 400,
              // my: '1.5rem',
              lineHeight: 1.3,
              textAlign: 'center',
            }}
          >
            {post.title}
          </h1>
          <p
            sx={{
              //mb: '3rem',
              fontSize: '1.5rem',
              maxWidth: '780px',
              lineHeight: '1.6',
            }}
          >
            {post.excerpt}
          </p>
          <div
            sx={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'center',
            }}
          >
            {/* <div
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                bg: 'gray',
                mr: '8px',
              }}
            ></div> */}
            <div>
              {/* {post.users &&
                post.users.map((user, i, arr) => (
                  <React.Fragment key={i}>
                    <Link
                      to={`/author/${user.id}`}
                      sx={{
                        fontWeight: 'medium',
                        color: (theme) => `${theme.colors.textLinkPrimary}`,
                        fontSize: (theme) => `${theme.fontSizes.h7}`,
                        px: (theme) => `${theme.space.spacing2}`,
                        '&:first-of-type': { pl: 0 },
                        '&:hover': {
                          color: (theme) => `${theme.colors.textLinkHoverPrimary}`,
                        },
                      }}
                    >
                      {`${user?.first_name} ${user?.last_name}`}
                    </Link>
                    {arr.length - i > 1 && (user?.first_name || user?.last_name) && ','}
                  </React.Fragment>
                ))} */}
              <div
                sx={{
                  marginBottom: '16px',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '30px',
                  color: '#667085',
                }}
              >
                {/* <FaRegClock
                  sx={{ display: 'inline-block', mr: (theme) => `${theme.space.spacing2}` }}
                />{' '} */}
                {parseDate(post.published_date)} . <span> 3 min read</span>
              </div>
            </div>
          </div>
          <div
            sx={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'center',
            }}
          >
            {post.categories.map((category, i) => (
              <Badge key={i} url={category.slug} name={category.name} />
            ))}
          </div>
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              justifyContent: 'space-between',
              mt: '2rem',
            }}
          >
            {post.medium && (
              <div sx={{ flex: '1 1 0%', width: 'full' }}>
                <Img
                  fluid={generateFluidObject({
                    url: post.medium.url.proxy,
                    dimensions: post.medium.dimensions,
                  })}
                />
              </div>
            )}
          </div>
        </div>

        <div
          sx={{
            width: ['full'],
            mx: 'auto',
            fontSize: (theme) => `${theme.fontSizes.body}`,
          }}
        >
          {post.claims && <FactCheckWidget claims={post.claims} />}
          <div className="parsed">
            {parseEditorJsData({ content: post.description, scripts: true })}
          </div>
          {post.claims &&
            post.claims.map((claim, i) => (
              <React.Fragment key={i}>
                {post.claims.length > 1 && (
                  <div
                    sx={{
                      bg: (theme) => `${theme.colors.bgPrimary}`,
                      p: (theme) => `${theme.space.spacing5}`,
                      mt: (theme) => `${theme.space.spacing5}`,
                    }}
                  >
                    <div
                      sx={{
                        mb: (theme) => `${theme.space.spacing5}`,
                      }}
                    >
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Claim:{' '}
                      </h4>
                      {claim.claim}
                    </div>
                    <div>
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Fact:
                      </h4>
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                )}

                <div className="parsed">
                  {parseEditorJsData({ content: claim.description, scripts: true })}
                </div>
              </React.Fragment>
            ))}

          <div
            sx={{
              display: 'flex',
              mt: '2rem',
              justifyContent: 'space-between',
            }}
          >
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <div
                sx={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  bg: 'gray',
                  mr: '8px',
                }}
              ></div>
              <div
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {post.users[0]?.display_name}
                <p>
                  {parseDate(post.published_date)} . <span> 3 min read</span>
                </p>
              </div>
            </div>

            <div
              sx={{
                display: 'flex',
              }}
            >
              <a
                sx={{
                  padding: '10px',
                  gap: '8px',
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  border: '1px solid #D0D5DD',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  borderRadius: '0.25rem',
                  display: 'block',
                  margin: '0.25rem',
                  fontWeight: 600,
                }}
                href={`https://twitter.com/share?text=${title}-&url=${url}`}
                title="Share by Twitter"
              >
                <FaTwitter color="#98A2B3" fontSize="22px" />
              </a>

              <a
                sx={{
                  padding: '10px',
                  gap: '8px',
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  border: '1px solid #D0D5DD',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  borderRadius: '0.25rem',
                  display: 'block',
                  margin: '0.25rem',
                  fontWeight: 600,
                }}
                href={`https://www.facebook.com/sharer.php?u=${url}`}
                title="Share by Facebook"
              >
                <FaFacebook color="#98A2B3" fontSize="22px" />
              </a>
              <a
                sx={{
                  padding: '10px',
                  gap: '8px',
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  border: '1px solid #D0D5DD',
                  boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  borderRadius: '0.25rem',
                  display: 'block',
                  margin: '0.25rem',
                  fontWeight: 600,
                }}
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${title} - ${url}`,
                )}`}
                title="Share by Whatsapp"
              >
                <FaWhatsapp color="#98A2B3" fontSize="22px" />
              </a>
            </div>
          </div>

          {/* <div sx={{ textAlign: 'center', mt: '3rem' }}>
            <h4>Share this article:</h4>
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2.25rem',
                mt: (theme) => `${theme.space.spacing6}`,
                pb: (theme) => `${theme.space.spacing6}`,
                borderBottomWidth: '1px',
                a: {
                  background: '#f9f9f9',
                  padding: '12px',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                },
                'a:hover': {
                  bg: '#0066FF',
                  color: '#ffffff',
                },
                button: {
                  background: '#f9f9f9',
                  padding: '12px',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                },
                'button:hover': {
                  bg: '#0066FF',
                  color: '#ffffff',
                },
              }}
            >
              <a href={`https://www.facebook.com/sharer.php?u=${url}`} title="Share by Facebook">
                <FaFacebookF />
              </a>
              <a
                href={`https://twitter.com/share?text=${title}-&url=${url}`}
                title="Share by Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${title} - ${url}`,
                )}`}
                title="Share by Whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={`https://pinterest.com/pin/create/bookmarklet/?url=${url}&description=${title}`}
                title="Share by Pinterest"
              >
                <FaPinterestSquare />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?url=${url}-&title=${title}`}
                title="Share by Linkedin"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={`mailto:?subject=${title}&body=Check out this site: ${url}`}
                title="Share by Email"
              >
                <FaEnvelope />
              </a>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(decodeURIComponent(url));
                }}
              >
                <FaLink />
              </button>
            </div>
          </div> */}
        </div>
      </article>
    </>
  );
};

export default Post;
