/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLink,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import FormatPageLayout from '@components/FormatPageLayout';

function UserDetailsFormat({ data }) {
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
  const header = (item) => {
    const name = item.display_name
      ? `${item.display_name}`
      : `${item.first_name} ${item.last_name}`;
    // return (

    //     <div sx={{ mb: (theme) => `${theme.space.spacing5}` }}>
    //         {item.medium && (
    //             <img
    //                 src={item.medium?.url.proxy}
    //                 alt=""
    //                 sx={{
    //                     borderRadius: '50%',
    //                     width: 40,
    //                     height: 40,
    //                     mx: 'auto',
    //                     padding: (theme) => `${theme.space.spacing8}`,
    //                 }}
    //             />
    //         )}
    //         <h1
    //             sx={{
    //                 textAlign: 'center',
    //                 fontSize: (theme) => `${theme.fontSizes.h4}`,
    //                 mb: (theme) => `${theme.space.spacing5}`,
    //                 textTransform: 'capitalize',
    //             }}
    //         >
    //             {name}
    //         </h1>
    //         {item.description && (
    //             <p sx={{ textAlign: 'center', pb: (theme) => `${theme.space.spacing5}` }}>
    //                 {item.description}
    //             </p>
    //         )}

    //         <div sx={{ display: 'flex', justifyContent: 'center' }}>
    //             {item.social_media_urls &&
    //                 Object.keys(item.social_media_urls).map((name) => (
    //                     <a
    //                         key={name}
    //                         title={name}
    //                         href={item.social_media_urls[name]}
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                         sx={{ mr: (theme) => `${theme.space.spacing3}` }}
    //                     >
    //                         {getIcon(name)}
    //                     </a>
    //                 ))}
    //             <a href={`mailto:${item.email}`} title="email">
    //                 {getIcon('email')}
    //             </a>
    //         </div>
    //     </div>
    // );

    return (
      <>
        <div
          sx={{
            alignItems: 'center',
            mt: (theme) => `${theme.space.spacing6}`,
            pb: (theme) => `${theme.space.spacing6}`,
            borderBottomWidth: '1px',
          }}
        >
          <div>
            <div
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0px',
                width: '80px',
                height: '80px',
                background: 'black',
                borderRadius: '200px',
              }}
            >
              <img src={user.medium?.url?.proxy} alt="" />
            </div>
            <div>
              <div>
                <p
                  sx={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '36px',
                    lineHeight: '68px',
                  }}
                >
                  {user.display_name}
                </p>
              </div>
              {/* <div><p
                                sx={{
                                    fontFamily: 'Inter',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                }}>{posts.total} posts </p></div> */}
            </div>
          </div>
          <div
            sx={{
              display: 'flex',
              gap: '12px',
            }}
          >
            <p
              sx={{
                fontSize: '20px',
                color: '#999',
              }}
            >
              https://news.org
            </p>
            <div
              sx={{
                display: 'flex',
                color: '#808080',
              }}
            >
              <a
                title="Share on Linkedin"
                href={`https://www.linkedin.com/sharer.php?u=${''}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  //padding: '10px',
                  gap: '0px',
                  width: '40px',
                  height: '40px',
                  background: ' #FFFFFF',
                  //border: '1px solid #D0D5DD',
                  //boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  //borderRadius: '8px',
                  display: 'block',
                  m: (theme) => `${theme.space.spacing2}`,
                  fontWeight: 'semibold',
                  borderRadius: 'default',
                }}
              >
                <FaLinkedin />
              </a>

              <a
                title="Tweet it"
                href={`https://twitter.com/share?text=${''}-&url=${''}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  //padding: '10px',
                  gap: '0px',
                  width: '40px',
                  height: '40px',
                  background: ' #FFFFFF',
                  //border: '1px solid #D0D5DD',
                  //boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                  //borderRadius: '8px',
                  display: 'block',
                  m: (theme) => `${theme.space.spacing2}`,
                  fontWeight: 'semibold',
                  borderRadius: 'default',
                }}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <FormatPageLayout
      type="author"
      posts={posts.nodes}
      formats={formats.nodes}
      item={user}
      header={header}
      useSlug={false}
    />
  );
}

export default UserDetailsFormat;
