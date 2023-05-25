/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import Layout from '../components/Layout';
import BlogCard from '../components/BlogPage/BlogCard';
import { Seo } from '../components/Seo'

const PostPage = ({ data }) => {
  const { posts, post, recentPosts } = data;
  console.log({ posts, post, recentPosts })
  const currentPost = posts.edges.filter(({ node }) => node.id === post.id)[0];
  if (!currentPost) {
    return (
      <Layout>
        <h3>Post not found</h3>
      </Layout>
    );
  }
  const { previous: previousPost, next: nextPost } = currentPost
  return (
    <Layout>
      <Seo title={post.title} description={""} />
      <Post data={post} previousPost={previousPost} nextPost={nextPost} />
      <div sx={{
        px: ['32px', null, '5rem'],
        mb: '3rem',
      }}>
        <h5 sx={{
          fontFamily: 'Montserrat',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '44px',
          color: '#3E3667',
          mb: '2rem'
        }}>
          Recent Posts
        </h5>
        <div
          sx={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            h1: {
              fontSize: '26px'
            }
          }}
        >
          {recentPosts.nodes.map((post) => <BlogCard key={post.id} data={post} />)}
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;

export const query = graphql`
  query ($slug: String!) {
    posts: allDegaPost (sort: { fields: created_at, order: DESC }
    filter: { format: { slug: { eq: "article" } } }
    limit: 24
  ) {
      edges {
        node {
          published_date
          description
          description_html
          excerpt
          id
          schemas
          slug
          status
          subtitle
          title
          updated_at
          users {
            email
            first_name
            last_name
            id
            slug
          }
          tags {
            id
            name
            slug
            description
          }
          medium {
            alt_text
            id
            url
            dimensions
          }
          categories {
            description
            created_at
            id
            name
            slug
            medium {
              alt_text
              id
              url
              dimensions
            }
          }
        }
        next {
          slug
          title
          published_date
          medium {
            alt_text
            id
            url
            dimensions
          }
        }
        previous {
          slug
          title
          published_date
          medium {
            alt_text
            id
            url
            dimensions
          }
        }
      }
    }
    post: degaPost(slug: { eq: $slug }) {
      published_date
      description
      description_html
      excerpt
      id
      schemas
      slug
      status
      subtitle
      title
      updated_at
      users {
        email
        first_name
        last_name
        display_name
        id
      }
      tags {
        id
        name
        slug
        description
      }
      medium {
        alt_text
        id
        url
        dimensions
      }
      categories {
        description
        created_at
        id
        name
        slug
      }
    }
    recentPosts: allDegaPost(
      sort: { fields: created_at, order: DESC }
      filter: { format: { slug: { eq: "article" } } }
      limit: 3
    ) {
      nodes {
        created_at
        title
        excerpt
        slug
        users {
          display_name
          slug
          id
        }
        published_date
        categories {
          name
          slug
        }
        medium {
          dimensions
          alt_text
          url
        }
      }
    }
  }
`;
