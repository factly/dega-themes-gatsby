import React from 'react';
import authorImage from '../static/images/author.jpg';

function AuthorMultiple() {
  const author = [1, 2];
  return (
    <div className="flex flex-col justify-start items-start py-2">
      <div className="flex flex-row flex-wrap">
        {author.map(() => (
          <img
            className="w-16 h-16 rounded-full mr-2 avatar"
            data-tippy-content="Author Name"
            src={authorImage}
            alt="Avatar of Author"
          />
        ))}
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row flex-wrap">
          {author.map((i, index, arr) => (
            <a href="/" className="font-medium text-blue-500 text-lg  px-1">
              John Doe{arr.length - index > 1 && ','}
            </a>
          ))}
          <span className="font-medium text-lg ">in</span>
          {['Bussiness', 'India', 'Coronavirus'].map((item, index, arr) => (
            <a href="/" className="font-medium text-blue-500 text-lg  px-1">
              {item}
              {arr.length - index > 1 && ','}
            </a>
          ))}
        </div>
        <span className="text-gray-600 text-lg">12 Apr 2020</span>
      </div>
    </div>
  );
}

export default AuthorMultiple;
