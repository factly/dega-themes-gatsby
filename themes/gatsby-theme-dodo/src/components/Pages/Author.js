/** @jsx jsx */

import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

import PostGrid from '../PostGrid';
import Helmet from 'react-helmet';
import Layout from '../Layout';

function UserDetailsAll({ data }) {
  const { user, posts, formats } = data;
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

  const name = user.display_name
    ? `${user.display_name}`
    : `${user.first_name} ${user.last_name}`;

  const header = (item) => {
    return (
      <div sx={{ mb: (theme) => `${theme.space.spacing5}`, px: (theme) => theme.space.layout2 }}>
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
            fontSize: (theme) => `${theme.fontSizes.h4}`,
            mb: (theme) => `${theme.space.spacing5}`,
            textTransform: 'capitalize',
          }}
        >
          {name}
        </h1>
        {item.description && (
          <p sx={{ pb: (theme) => `${theme.space.spacing5}` }}>{item.description}</p>
        )}

        <div sx={{ display: 'flex' }}>
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
    <Layout>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <PostGrid
        type="author"
        posts={posts.nodes}
        formats={formats.nodes}
        item={user}
        header={header}
        useSlug={false}
      />
    </Layout>
  );
}

export default UserDetailsAll;
