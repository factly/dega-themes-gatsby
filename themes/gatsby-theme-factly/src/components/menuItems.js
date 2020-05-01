import React, { useState } from 'react';

function MenuItems({ title, Icon, align = 'left', className = '', children }) {
  const [show, setShow] = useState(false);
  return (
    <button
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
      type="button"
      className={`block px-2 lg:px-4 text-left focus:outline-none ${className}`}
    >
      <span className="uppercase font-semibold focus:outline-none hover:text-gray-600">
        {title || <Icon show={show} />}
      </span>
      {show && (
        <div
          className={`fixed ${align}-0 lg:${align}-0 w-full lg:w-2/5 pt-5 normal-case`}
          style={{ height: 'calc(100vh - 75px)' }}
        >
          <div className="flex flex-col absolute left-auto bg-gray-300 border-t  border-gray-200 p-4 overflow-auto h-full w-full">
            {children}
          </div>
        </div>
      )}
    </button>
  );
}

export default MenuItems;
