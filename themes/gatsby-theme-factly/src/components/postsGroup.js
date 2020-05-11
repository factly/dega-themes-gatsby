import React from 'react'
import ListItems from './listItems'
import {useStaticQuery, graphql} from 'gatsby';

function PostsGroup({category}) {
    const data = useStaticQuery(graphql`
    {
      degaCMS {
        posts(limit: 4) {
          nodes {
            title
            categories{
              name
            }
            published_date
            slug
            __typename
            degaUsers{
              slug
              display_name
            }
            excerpt
            featured
            media {
              alt_text
              source_url
            }
          }
        }
      }
    }
  `)

    const { degaCMS: { posts }} = data;
  
    return (<div id={category.slug}>
    <div className="mb-4 pb-4 border-b px-6">
      <h5 className="font-semibold text-2xl leading-tight text-gray-900">
        {category.name}
      </h5>
    </div>
    {posts.nodes.slice(0, 4).map((item, index) => (
      <ListItems
        orientation="vertical horizontal"
        item={item}
        index={index}
        tags
        excerpt
        imageSize="w-full md:w-1/3 h-48 md:h-full py-4 md:py-0"
      />
    ))}
  </div>
  )
}

export default PostsGroup;