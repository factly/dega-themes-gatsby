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

const Post = ({ post }) => {
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
          <div
            sx={{
              display: 'flex',
              gap: '12px',
              mb: '0.5rem',
            }}
          >
            {post.categories.map((category, i) => (
              <Badge key={i} url={category.slug} name={category.name} />
            ))}
          </div>

          <h1
            sx={{
              fontSize: '48px',
              fontWeight: 600,
              lineHeight: 1.3,
            }}
          >
            {post.title}
          </h1>
          <p
            sx={{
              mb: '1.5rem',
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
            }}
          >
            <div
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                bg: 'gray',
                mr: '8px',
              }}
            ></div>
            <div>
              {post.users &&
                post.users.map((user, i, arr) => (
                  <React.Fragment key={i}>
                    <p
                      sx={{
                        fontWeight: 'medium',
                        color: '#000',
                        fontSize: '18px',
                        px: (theme) => `${theme.space.spacing2}`,
                        '&:first-of-type': { pl: 0 },
                      }}
                    >
                      {`${user?.first_name} ${user?.last_name}`}

                      {arr.length - i > 1 && (user?.first_name || user?.last_name) && ','}
                    </p>
                  </React.Fragment>
                ))}
              <div
                sx={{
                  marginBottom: '16px',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '30px',
                  color: '#667085',
                }}
              >
                {parseDate(post.published_date)}
              </div>
            </div>
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
        </div>
      </article>
    </>
  );
};

export default Post;
