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
import FormatPageLayout from '../components/FormatPageLayout';

function UserDetailsAll({ data }) {
  const { dega } = data;
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
      <div sx={{ mb: 4 }}>
        {item.medium && (
          <img
            src={item.medium?.url.proxy}
            alt=""
            sx={{ borderRadius: '50%', width: 40, height: 40, mx: 'auto', padding: 10 }}
          />
        )}
        <h1 sx={{ textAlign: 'center', fontSize: 6, mb: 4, textTransform: 'capitalize' }}>
          {name}
        </h1>
        {item.description && <p sx={{ textAlign: 'center', pb: 4 }}>{item.description}</p>}

        <div sx={{ display: 'flex', justifyContent: 'center' }}>
          {item.social_media_urls &&
            Object.keys(item.social_media_urls).map((name) => (
              <a
                key={name}
                title={name}
                href={item.social_media_urls[name]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mr: 2 }}
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
      type="users"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.user}
      header={header}
      useSlug={false}
    />
  );
}

export default UserDetailsAll;

export const query = graphql`
  query($id: Int!, $sid: [Int!]) {
    dega {
      user(id: $id) {
        id
        first_name
        last_name
        email
        medium {
          url
        }
        social_media_urls
        description
        slug
        display_name
      }
      formats(spaces: $sid) {
        nodes {
          id
          slug
          name
        }
      }
      posts(users: [$id], spaces: $sid) {
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
          }
          format {
            name
            id
            slug
          }
          created_at
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
