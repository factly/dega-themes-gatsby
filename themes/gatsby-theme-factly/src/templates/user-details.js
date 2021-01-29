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
} from 'react-icons/fa';
import FormatPageLayout from '../components/FomatPageLayout';

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
      default:
        return <FaLink size="1.75rem" />;
    }
  };
  const header = (item) => {
    const name = item.display_name
      ? `${item.display_name}`
      : `${item.first_name} ${item.last_name}`;
    return (
      <>
        {item.medium && item.medium.url && (
          <img
            src={item.medium.url.raw}
            alt=""
            sx={{ borderRadius: '50%', width: 40, height: 40, mx: 'auto' }}
          />
        )}
        <h1 sx={{ textAlign: 'center', fontSize: 4, mb: 4, textTransform: 'capitalize' }}>
          {name}
        </h1>
        {item.description && <p sx={{ textAlign: 'center', pb: 4 }}>{item.description}</p>}
        {item.social_media_urls && (
          <div sx={{ display: 'flex', justifyContent: 'center' }}>
            {Object.keys(item.social_media_urls).map((name) => (
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
          </div>
        )}
        <div sx={{ textAlign: 'center', fontSize: 4, mb: 4 }}>
          Mail:<a href={`mailto:${item.email}`}> {item.email}</a>
        </div>
      </>
    );
  };

  return (
    <FormatPageLayout
      type="users"
      posts={dega.posts.nodes}
      formats={dega.formats.nodes}
      item={dega.user}
      header={header}
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
