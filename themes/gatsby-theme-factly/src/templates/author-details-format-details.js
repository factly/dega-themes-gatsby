/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { graphql } from 'gatsby';
import { jsx } from 'theme-ui';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import FormatPageLayout from '@components/FormatPageLayout';

const UserDetailsFormat=({ data })=> {
  const { allDegaPost, allDegaFormat, degaUser } = data;
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
      <div sx={{ mb: (theme) => `${theme.space.spacing5}` }}>
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
        {item.description && (
          <p sx={{ textAlign: 'center', pb: (theme) => `${theme.space.spacing5}` }}>
            {item.description}
          </p>
        )}

        <div sx={{ display: 'flex', justifyContent: 'center' }}>
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

export default UserDetailsFormat;

export const query = graphql`
  query ($id: String!, $format_id: String!) {
    degaUser(id: { eq: $id }) {
      id
      first_name
      last_name
      email
      display_name
      social_media_urls
      description
      medium {
        url
        dimensions
      }
    }
    allDegaFormat {
      nodes {
        id
        slug
        name
      }
    }
    allDegaPost(
      filter: { users: { elemMatch: { id: { eq: $id } } }, format: { id: { eq: $format_id } } }
    ) {
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
          dimensions
        }
        published_date
        id
        status
        subtitle
        title
        excerpt
        slug
      }
    }
  }
`;
