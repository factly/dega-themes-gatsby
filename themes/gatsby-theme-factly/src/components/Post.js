/** @jsx jsx */
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import Author from './Author';
import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';
import Excerpt from './Excerpt';
import parseEditorJsData from '../utils/parseEditorJsData';
import { isBrowser } from '../utils/isBrowser';

/**
 * TODO:
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
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
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
        sx={{ display: 'flex', flexDirection: 'column', p: 6, mb: 12 }}
      >
        <div
          sx={{
            bg: 'white',
            borderTopLeftRadius: 'default',
            borderTopRightRadius: 'default',
            borderBottomLeftRadius: 'none',
            borderBottomRightRadius: 'none',
            overflow: 'hidden',
          }}
        >
          <h1 sx={{ fontWeight: 'medium', fontSize: 6, py: 2 }}>{post.title}</h1>
          <div
            sx={{
              display: 'flex',
              flexDirection: ['column', null, 'row'],
              justifyContent: 'space-between',
            }}
          >
            <Author date={post.created_at} users={post.users} categories={post.categories} />
            <ShareButtonGroup
              setRef={headerSocialIcon}
              data={{
                url: isBrowser ? window.location.href : post.slug,
                title: post.title,
              }}
            />
          </div>
        </div>
        <Excerpt excerpt={post.excerpt} image={post.medium} />

        <div sx={{ width: ['full', null, null, '3/4'], mx: 'auto', fontSize: 4 }}>
          {post.claims && <FactCheckWidget claims={post.claims} />}
          <div className="parsed">{parseEditorJsData(post.description, true)}</div>
          {post.claims &&
            post.claims.map((claim, i) => (
              <React.Fragment key={i}>
                {post.claims.length > 1 && (
                  <div sx={{ bg: 'rgb(237, 242, 247)', p: 4, mt: 4 }}>
                    <div sx={{ mb: 4 }}>
                      <h4 sx={{ fontWeight: 'bold' }}>Claim: </h4>
                      {claim.title}
                    </div>
                    <div>
                      <h4 sx={{ fontWeight: 'bold' }}>Fact:</h4>
                      {parseEditorJsData(claim.review, true)}
                    </div>
                  </div>
                )}

                <div className="parsed">{parseEditorJsData(claim.description, true)}</div>
              </React.Fragment>
            ))}
          <div sx={{ display: 'flex', flexWrap: 'wrap', pb: 6, borderBottomWidth: '1px' }}>
            <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
