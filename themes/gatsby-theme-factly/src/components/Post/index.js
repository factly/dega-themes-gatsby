/** @jsx jsx */
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import PostInfo from './PostInfo';
import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';
import Excerpt from './Excerpt';
import { isBrowser } from '../../utils/isBrowser';
import parseEditorJsData from '../../utils/parseEditorJsData';
import Seo from '../Seo';
/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post, observer }) => {
  const postSection = useRef(null);
  const headerSocialIcon = createRef();

  useEffect(() => {
    observer.observe(postSection.current);
    observer.observe(headerSocialIcon.current);
  }, [observer, postSection, headerSocialIcon]);

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <Helmet>
        {post.schemas.map((schema, i) => (
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
              fontWeight: 'bold',
              fontSize: (theme) => [`${theme.fontSizes.h4}`, null, `${theme.fontSizes.h3}`],
              py: (theme) => `${theme.space.spacing3}`,
            }}
          >
            {post.title}
          </h1>
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              justifyContent: 'space-between',
            }}
          >
            <PostInfo date={post.published_date} users={post.users} categories={post.categories} />
            <ShareButtonGroup
              setRef={headerSocialIcon}
              data={{
                url: encodeURIComponent(isBrowser ? window.location.href : null),
                title: encodeURIComponent(post.title),
              }}
            />
          </div>
        </div>
        <Excerpt excerpt={post.excerpt} image={post.medium} />

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
                      {claim.title}
                    </div>
                    <div>
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Fact:
                      </h4>
                      {parseEditorJsData({ content: claim.review, scripts: true })}
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
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& a:first-of-type': {
                  ml: 0,
                },
              }}
            >
              {post.tags.map((tag, i) => (
                <Tag key={i} url={tag.slug} name={tag.name} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
