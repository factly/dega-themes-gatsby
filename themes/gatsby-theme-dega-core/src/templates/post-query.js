import { graphql } from 'gatsby';
import PostPage from '@components/Pages/Post';

export default PostPage;

export const query = graphql`query ($id: String!) {
  space: degaSpace {
    site_address
  }
  posts: allDegaPost {
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
          display_name
          id
          slug
        }
        tags {
          id
          name
          slug
          description
          description_html
        }
        medium {
          alt_text
          id
          url
          dimensions
        }
        format {
          name
          slug
          id
          description
        }
        claims {
          checked_date
          claim_date
          claim_sources
          claimant {
            description
            description_html
            id
            name
            slug
            tag_line
          }
          description
          description_html
          id
          fact
          review_sources
          slug
          claim
          rating {
            description
            description_html
            id
            name
            numeric_value
            slug
            medium {
              alt_text
              id
              url
              dimensions
            }
          }
        }
        categories {
          description
          description_html
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
  post: degaPost(degaId: {eq: $id}) {
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
      slug
    }
    tags {
      id
      name
      slug
      description
      description_html
    }
    medium {
      alt_text
      id
      url
      dimensions
    }
    format {
      name
      slug
      id
      description
    }
    claims {
      checked_date
      claim_date
      claim_sources
      claimant {
        description
        description_html
        id
        name
        slug
        tag_line
      }
      description
      description_html
      id
      fact
      review_sources
      slug
      claim
      rating {
        description
        description_html
        id
        name
        numeric_value
        slug
        medium {
          alt_text
          id
          url
          dimensions
        }
      }
    }
    categories {
      description
      description_html
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
  recentPosts: allDegaPost(
    sort: {created_at: DESC}
    filter: {format: {slug: {eq: "article"}}}
    limit: 6
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
        slug
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
  recentFactChecks: allDegaPost(
    sort: {created_at: DESC}
    filter: {format: {slug: {eq: "fact-check"}}}
    limit: 6
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
}`;
