import React from 'react';
import Author from './Author';
import ShareButtonGroup from './ShareButtonGroup';
import FactCheckWidget from './FactCheckWidget';
import Tag from './Tag';
import Excerpt from './Excerpt';
import parseEditorJsData from './../utils/parseEditorJsData';

/**
 * TODO:
 */

const Post = ({ post }) => {
  return (
    <article
      post={post.id}
      //ref={postSection}
      id={post.id}
      className="flex flex-col p-6 mb-12"
    >
      <div className="bg-white rounded-t rounded-b-none overflow-hidden">
        <h1 className="font-medium text-3xl py-2">{post.title}</h1>
        <div className="flex flex-col md:flex-row">
          <Author date={post.created_date} users={post.users} categories={post.categories} />
          <ShareButtonGroup data={{ url: post.slug, title: post.title }} />
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
  );
};

export default Post;
