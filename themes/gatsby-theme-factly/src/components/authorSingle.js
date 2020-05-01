import React from 'react';

function AuthorSingle() {
  return (
    <div className="flex flex-row justify-start items-start py-2">
      <img
        className="w-16 h-16 rounded-full mr-2 avatar"
        data-tippy-content="Author Name"
        src="http://i.pravatar.cc/300"
        alt="Avatar of Author"
      />
      <div className="flex flex-col px-2">
        <div className="flex flex-row">
          <a href="/" className="font-medium text-blue-500 text-lg  px-1">
            John Doe
          </a>
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

export default AuthorSingle;
