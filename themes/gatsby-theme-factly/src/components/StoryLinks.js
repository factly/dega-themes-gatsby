import React from "react";

const StoryLinks = ({ post, postActiveIndex, categories = true, index }) => {
  return (
    <article className="flex flex-col leading-tight border-b last:border-b-0 py-2 px-6 border-gray-200">
      <a
        href={post.slug}
        className="w-full flex horizontal no-underline hover:no-underline"
      >
        <div className="w-full flex flex-col">
          {post.categories && (
            <p className="w-full text-gray-600 text-xs md:text-sm pb-1">
              {post.categories.map((category, i, arr) => {
                return category.name + (arr.length - i > 1 ? ", " : "");
              })}
            </p>
          )}
          <div
            id={`nav-${index}`}
            className={`w-full font-bold font-sans text-lg text-gray-800 ${postActiveIndex ===
              index && "active"}`}
          >
            {post.title}
          </div>
        </div>
      </a>
    </article>
  );
};

export default StoryLinks;
