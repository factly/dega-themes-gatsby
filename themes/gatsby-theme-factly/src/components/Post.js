import React, { useRef, useEffect, createRef } from 'react';
import { Helmet } from 'react-helmet';
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
        className="flex flex-col p-6 mb-12"
      >
        <div className="bg-white rounded-t rounded-b-none overflow-hidden">
          <h1 className="font-medium text-3xl py-2">{post.title}</h1>
          <div className="flex flex-col md:flex-row">
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

        <div className="w-full lg:w-3/4 mx-auto  text-xl">
          {post.claims && <FactCheckWidget claims={post.claims} />}
          <div className="parsed">{parseEditorJsData(post.description)}</div>
          <div className="flex flex-wrap pb-6 border-b">
            <div className="flex flex-wrap">
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
