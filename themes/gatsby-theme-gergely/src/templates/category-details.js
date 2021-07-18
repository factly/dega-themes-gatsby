/** @jsx jsx */
import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import parseEditorJsData from '../utils/parseEditorJsData';
import { isBrowser } from '../utils/isBrowser';
import FormatPageLayout from '../components/FormatPageLayout';

function CategoryDetailsAll({ data }) {
  const { dega } = data;
  // const formatType = 'fact-check';
  // const filterPosts = dega.posts.nodes.filter((i) => i.format.slug !== formatType);

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
      <div
        sx={{
          mb: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.h6}`,
        }}
      >
        <h1
          sx={{
            textAlign: 'center',
            fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
        >
          {item.name} 
        </h1>
        <div
          id="category-description"
          sx={{
            maxHeight: (theme) => (readMore ? `calc(${theme.lineHeights.normal}em * 6 )` : '100%'),
            overflow: 'hidden',
            px: (theme) => `${theme.space.spacing5}`,
          }}
        >
          {parseEditorJsData({ content: item.description })}
        </div>
        {item.description && isReadMoreNeeded && (
          <button
            type="button"
            onClick={() => setReadMore((prev) => !prev)}
            sx={{
              px: (theme) => `${theme.space.spacing5}`,
              color: (theme) => `${theme.colors.textLinkPrimary}`,
              fontSize: (theme) => `${theme.fontSizes.h6}`,
            }}
          >
            {readMore ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>
    );
  };
  return (
    <FormatPageLayout
      type="category"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.category}
      header={header}
    />
  );
}

export default CategoryDetailsAll;

export const query = graphql`
  query ($id: Int!) {
    dega {
      category(id: $id) {
        description
        id
        medium {
          alt_text
          url
          dimensions
        }
        name
        slug
      }
      formats {
        nodes {
          id
          slug
          name
        }
      }
      posts(categories: { ids: [$id] }) {
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
          medium {
            alt_text
            url
            dimensions
          }
          format {
            name
            slug
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
