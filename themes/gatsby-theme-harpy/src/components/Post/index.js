/** @jsx jsx */
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import FactCheckWidget from '@components/Post/FactCheckWidget';
import Tag from '@components/Post/Tag';
import parseEditorJsData from '@utils/parseEditorJsData';
import Seo from '@components/Seo';
import { Link } from 'gatsby';
import parseDate from '@utils/parseDate';
import { FaRegClock } from 'react-icons/fa';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@utils/generateFluidObject';


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
          <div>
            {post.tags.map((tag, i) => (
              <Tag key={i} url={tag.slug} name={tag.name} />
            ))}
          </div>

          <h1
            sx={{
              fontSize: "4rem",
              fontWeight: 400,
              my: "1.5rem",
              lineHeight: 1.3
            }}
          >
            {post.title}
          </h1>
          <p
            sx={{
              mb: "3rem",
              fontSize: "1.5rem",
              maxWidth: "780px",
              lineHeight: "1.6"
            }}
          >{post.excerpt}</p>
          <div sx={{
            display: "flex",
            position: "relative"
          }}>
            <div
              sx={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                bg: "gray",
                mr: "8px"
              }}
            >
            </div>
            <div>

              {post.users &&
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
                ))}
              <span
                sx={{
                  color: "#575861",
                  fontSize: ".875rem",
                  display: 'flex',
                  alignItems: 'center',
                  lineHeight: 1.6
                }}
              >
                <FaRegClock sx={{ display: 'inline-block', mr: (theme) => `${theme.space.spacing2}` }} />{' '}
                {parseDate(post.published_date)}
              </span>

            </div>
          </div>

          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              justifyContent: 'space-between',
              mt: "4rem"
            }}
          >


            {post.medium && (
              <div sx={{ flex: '1 1 0%', width: 'full' }}>
                <Img fluid={generateFluidObject({ url: post.medium.url.proxy, dimensions: post.medium.dimensions })} />
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
              flexWrap: 'wrap',
              mt: (theme) => `${theme.space.spacing6}`,
              pb: (theme) => `${theme.space.spacing6}`,
              borderBottomWidth: '1px',
            }}
          >

          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
