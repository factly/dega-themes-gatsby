import React from 'react';
import { Link } from 'gatsby';

function LinkTag({ text, to }) {
  return (
    <li>
      <Link
        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
        to={to}
        target="_blank"
      >
        {text}
      </Link>
    </li>
  );
}

function FooterLinks() {
  return (
    <div className="flex items-top mb-6">
      <div className="pt-6 md:pt-0 m-auto">
        <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
          Useful Links
        </span>
        <ul className="list-unstyled">
          <LinkTag text="About Us" to="/about" />
          <LinkTag text="Facebook" to="https://facebook.com/factly" />
          <LinkTag text="Github" to="https://github.com/factly" />
          <LinkTag text="Free Produs" to="/about" />
        </ul>
      </div>
      <div className="pt-6 md:pt-0 md:px-4 m-auto">
        <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
          Other Resources
        </span>
        <ul className="list-unstyled">
          <LinkTag text="MIT License" to="/" />
          <LinkTag text="Terms &amp; Conditions" to="/term" />
          <LinkTag text="Privacy Policy" to="/policy" />
          <LinkTag text="Contact Us" to="/about#contact" />
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
