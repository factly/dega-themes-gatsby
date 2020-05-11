import React from 'react';
import { Link } from 'gatsby';

function AuthorMultiple({publishedDate, authors, categories}) {
  return (
    <div className="flex flex-col justify-start items-start py-2">
      <div className="flex flex-row flex-wrap">
        {authors.map((author) => (
          <img
            className="w-16 h-16 rounded-full mr-2 avatar"
            data-tippy-content={author.display_name}
            src={author.media.source_url}
            alt={author.media.alt_text}
          />
        ))}
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row flex-wrap">
          {authors.map((author, index, arr) => (
            <Link to={`/author/${author.slug}/`} className="font-medium text-blue-500 text-lg  px-1">
              {author.display_name}{arr.length - index > 1 && ','}
            </Link>
          ))}
          <span className="font-medium text-lg ">in</span>
          {categories.map((category, index, arr) => (
            <a href="/" className="font-medium text-blue-500 text-lg  px-1">
              {category.name}
              {arr.length - index > 1 && ','}
            </a>
          ))}
        </div>
          <span className="text-gray-600 text-lg">{publishedDate}</span>
      </div>
    </div>
  );
}

export default AuthorMultiple;
