import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Tabs = ({ baseUrl }) => {
  const data = useStaticQuery(graphql`
    query {
      dega {
        formats {
          nodes {
            id
            slug
            name
          }
        }
      }
    }
  `);
  return (
    <ul className="flex bg-gray-300">
      <li className="mx-1">
        <Link
          to={baseUrl}
          activeClassName="bg-white"
          className={
            'inline-block py-2 px-4 border border-b-0 rounded-t font-medium text-lg focus:outline-none'
          }
        >
          All
        </Link>
      </li>
      {data.dega.formats.nodes.map((tab, index) => {
        return (
          <li key={index} className="mx-1">
            <Link
              to={`${baseUrl}/formats/${tab.slug}`}
              activeClassName="bg-white"
              className={
                'inline-block py-2 px-4 border border-b-0 rounded-t font-medium text-lg focus:outline-none'
              }
            >
              {tab.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Tabs;
