/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaLink,
  FaEnvelope,
} from 'react-icons/fa';
import FormatPageLayout from '@components/FormatPageLayout';

const UserDetailsAll = ({ data }) => {
  const { degaUser, allDegaPost, allDegaFormat } = data;
  const getIcon = (name) => {
    switch (name) {
      case 'twitter':
        return <FaTwitterSquare color="#1da1f2" size="1.75rem" />;
      case 'facebook':
        return <FaFacebookSquare color="#3b5998" size="1.75rem" />;
      case 'instagram':
        return <FaInstagramSquare color="#e1306c" size="1.75rem" />;
      case 'linkedin':
        return <FaLinkedin size="1.75rem" color="#0077b5" />;
      case 'email':
        return <FaEnvelope size="1.75rem" color="#172b4d" />;
      default:
        return <FaLink size="1.75rem" />;
    }
  };
  const header = (item) => {
    const name = item.display_name
      ? `${item.display_name}`
      : `${item.first_name} ${item.last_name}`;
    return (
      <div sx={{ mb: (theme) => `${theme.space.spacing5}`, maxWidth: "700px", mx: "auto" }}>
        {item.medium && (
          <img
            src={item.medium?.url.proxy}
            alt=""
            sx={{
              borderRadius: '50%',
              width: 40,
              height: 40,
              mx: 'auto',
              padding: (theme) => `${theme.space.spacing8}`,
            }}
          />
        )}
        <div sx={{
          height: "136px",
          width: "136px",
          bg: "gray",
          borderRadius: "50%",
          mr: "auto",
          mb: "1rem",
          ml: "auto"
        }}></div>

        <h1
          sx={{
            textAlign: 'center',
            fontSize: (theme) => `${theme.fontSizes.h4}`,
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
        >
          {name}
        </h1>
        <p sx={{
          textAlign: "center",
          mb: "1rem"
        }}
        >{allDegaPost.totalCount} posts</p>

        {item.description && (
          <p sx={{
            textAlign: 'center',
            fontSize: " 1.125rem",
            lineHeight: 1.6,
            mb: "1rem"
          }}>
            {item.description}
          </p>
        )}

        <div sx={{
          display: 'flex',
          justifyContent: 'center',
          fontSze: "16px",
          lineHeight: "25.6px",
          textAlign: "center",
          gap: "8px"
        }}>
          {item.social_media_urls &&
            Object.keys(item.social_media_urls).map((name) => (
              <a
                key={name}
                title={name}
                href={item.social_media_urls[name]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: (theme) => `${theme.space.spacing3}` }}
              >
                {getIcon(name)}
              </a>
            ))}
          <a href={`mailto:${item.email}`} title="email">
            {getIcon('email')}
          </a>
        </div>
      </div>
    );
  };

  return (
    <FormatPageLayout
      type="author"
      posts={allDegaPost.nodes}
      formats={allDegaFormat.nodes}
      item={degaUser}
      header={header}
      useSlug={false}
    />
  );
}

export default UserDetailsAll;

export const query = graphql`
  query ($id: String!) {
    degaUser(id: { eq: $id }) {
      id
      first_name
      last_name
      email
      medium {
        url
        dimensions
      }
      social_media_urls
      description
      slug
      display_name
    }
    allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    allDegaPost(filter: { users: { elemMatch: { id: { eq: $id } } } }) {
      totalCount
      nodes {
        users {
          id
          first_name
          last_name
          display_name
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
          id
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
`;
