/** @jsx jsx */
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import parseEditorJsData from '../utils/parseEditorJsData';
import FormatPageLayout from '../components/FormatPageLayout';
import { isBrowser } from '../utils/isBrowser';

function CategoryDetailsFormat({ data }) {
  const { dega } = data;

  const [readMore, setReadMore] = React.useState(true);
  const [isReadMoreNeeded, setIsReadMoreNeeded] = useState(false);

  useEffect(() => {
    if (isBrowser) {
      const el = document.getElementById('category-description');
      setIsReadMoreNeeded(el?.clientHeight < el?.scrollHeight);
    }
  }, []);
  const header = (item) => {
    return (
      <div sx={{ mb: 6 }}>
        <h1 sx={{ textAlign: 'center', fontSize: [5, 6], mb: 4, textTransform: 'capitalize' }}>
          {item.name} 
        </h1>
        <div
          id="category-description"
          sx={{
            maxHeight: (theme) =>
              readMore ? `calc( 1rem + ${theme.lineHeights.normal}em * 6 )` : '100%',
            overflow: 'hidden',
            px: 4,
          }}
        >
          {parseEditorJsData({ content: item.description })}
        </div>
        {item.description && isReadMoreNeeded && (
          <button
            type="button"
            onClick={() => setReadMore((prev) => !prev)}
            sx={{ px: 4, color: (theme) => `${theme.colors.blue[5]}` }}
          >
            {readMore ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>
    );
  };
  return (
    <FormatPageLayout
      type="categories"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.category}
      header={header}
    />
  );
}

export default CategoryDetailsFormat;

export const query = graphql`
  query($id: Int!, $format_id: Int!, $sid: [Int!]) {
    dega {
      category(id: $id) {
        description
        id
        medium {
          alt_text
          url
        }
        name
        slug
      }
      formats(spaces: $sid) {
        nodes {
          id
          slug
          name
        }
      }
      posts(categories: [$id], formats: [$format_id], spaces: $sid) {
        nodes {
          users {
            id
            first_name
            last_name
          }
          categories {
            slug
            name
          }
          format {
            name
            slug
          }
          medium {
            alt_text
            url
          }
          published_date
          id
          excerpt
          status
          subtitle
          title
          slug
        }
      }
    }
  }
`;
