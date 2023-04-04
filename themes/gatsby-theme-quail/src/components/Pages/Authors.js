/** @jsx jsx */
import * as React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';
import Layout from '../Layout';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaLinkedin,
  FaTwitterSquare,
} from 'react-icons/fa';

function AuthorsListPage({ data }) {
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
  return (
    <Layout>
      <Helmet>
        <title> Authors </title>
      </Helmet>
      <div sx={{ fontSize: '32px', px: '24px', maxWidth: '424px', mx: 'auto', my: '24px' }}>
        <h1>
          Authors
        </h1>
      </div>
      <div sx={{ bg: '#eff8fa', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '424px', mx: 'auto', py: '60px', px: '48px', mb: '48px' }}>
        {data.allDegaUser.nodes.map((author) => (
          <>
            <a sx={{ display: 'flex', justifyContent: 'center' }} href={`/author/${author.slug}/`}>
              <img sx={{ width: '96px', height: '96px', bg: '#000', borderRadius: '50%', objectFit: 'cover', maxWidth: "100%" }} src="https://source.unsplash.com/random" alt="" />
            </a>

            <a href={`/author/${author.slug}/`} sx={{
              textAlign: 'center',
              fontWeight: 700,
              "&:hover": {
                textDecoration: "underline",
              }
            }}>{author.display_name}</a>
            <div sx={{ display: 'flex', justifyContent: 'center' }}>
              {author.social_media_urls &&
                Object.keys(author.social_media_urls).map((name) => (
                  <a
                    key={name}
                    title={name}
                    href={author.social_media_urls[name]}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mr: (theme) => `${theme.space.spacing3}` }}
                  >
                    {getIcon(name)}
                  </a>
                ))}
              <a href={`mailto:${author.email}`} title="email">
                {getIcon('email')}
              </a>
            </div>
          </>
        ))}
      </div>
    </Layout>
  );
}

export default AuthorsListPage;
