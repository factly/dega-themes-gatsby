/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseDate from '@utils/parseDate';
import BlogCard from './UI/BlogCard';

const Homepage = ({ data }) => {
  const { degaSpace, allDegaCategory, factchecks, posts } = data;
  console.log({ posts, factchecks })
  {
    nodes: [{}]
  }

  return (
    <>
      <div sx={{
        display: "flex",
        flexWrap: "wrap",
        flex: '0 1 800px',
        justifyContent: "center"
      }}>

        {/* featured post */}

        <div sx={{ pt: "1rem" }}> <h2 sx={{ px: "2rem" }}>Featured Posts</h2> <BlogCard post={posts.nodes[0]} type='featured' /></div>

        {/* sidebar post */}

        <div sx={{
          display: "flex",
          flexDirection: "column",
          flex: '1 1 500px',
          pt: "1rem"
        }}>
          <h2 sx={{ pb: "1.25rem", px: "1.5rem" }}>Factchecks</h2>
          {factchecks.nodes.map(factcheck => {
            return (
              <BlogCard post={factcheck} type="sidebar" key={factcheck.id} />
            )

          })}
        </div>
      </div>

      {/* bottom post */}

      <div>
        <h2 sx={{ px: "2rem" }}>Most Recent Posts</h2>
        <div sx={{ display: "flex", flexWrap: "wrap", }}> {posts.nodes.map(post => {
          return (
            <BlogCard post={post} type="basic" key={post.id} />
          )
        })}</div>
      </div>

    </>
  );
}
export default Homepage;
