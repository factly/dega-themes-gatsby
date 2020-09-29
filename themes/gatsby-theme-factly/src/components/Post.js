import React, { useRef, useEffect, createRef } from 'react';
import Author from './Author';
import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';
import Excerpt from './Excerpt';
import parseEditorJsData from './../utils/parseEditorJsData';
import { Helmet } from 'react-helmet';

/**
 * TODO:
 */

const Post = ({ post, observer }) => {
  const postSection = useRef(null);
  const headerSocialIcon = createRef();
  let schemaPost = () => {
    let authors = post.users.map((a) => {
      return `${a.first_name}  ${a.last_name} `;
    });
    let schema;
    if (post.schemas.length >= 1) {
      schema = post.schemas;
    } else {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://google.com/article',
        },
        headline: post.title,
        image: post.medium.url,
        datePublished: post.created_at,
        dateModified: post.created_at,
        author: {
          '@type': 'Person',
          name: authors,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Factly',
          logo: {
            '@type': 'ImageObject',
            url: 'https://source.unsplash.com/random/200x200',
          },
        },
      };
    }
    return schema;
  };

  useEffect(() => {
    observer.observe(postSection.current);
    observer.observe(headerSocialIcon.current);
  }, [observer, postSection, headerSocialIcon]);
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <script type="application/ld+json">{JSON.stringify(schemaPost())}</script>
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
                url: typeof window !== 'undefined' ? window.location.href : post.slug,
                title: post.title,
              }}
            />
          </div>
        </div>
        <Excerpt excerpt={post.excerpt} image={post.medium} />

        <div className="w-full lg:w-3/4 mx-auto font-sans text-xl">
          {post.claims && <FactCheckWidget claims={post.claims} />}
          <div
            className="my-6 pb-6 border-b text-gray-800"
            dangerouslySetInnerHTML={{
              __html: parseEditorJsData(post.description),
            }}
          ></div>
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
