/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

// import '../static/css/main.scss';
import Seo from './Seo';
import headerImg from '../static/health-site-header.png'

const HomePageTwo = ({ data }) => {
  const { dega } = data;

  const {
    categories: { nodes },
  } = dega;
  const categories = nodes.map((item) => {
    return { meta_fields: item.meta_fields, slug: item.slug, name: item.name, medium: item.medium };
  });

  const filteredCategories = categories
    .filter((i) => i.meta_fields !== null && i.meta_fields.stats)
    .sort((a, b) => a.meta_fields.order - b.meta_fields.order);
  return (
    <>
      {/* <Helmet>
        <link rel="canonical" href={`${}`} />
      </Helmet> */}
      <Seo title={dega.space.site_title} canonical={dega.space.site_address} type="website" />
      <header
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
          mb: (theme) => `${theme.space.spacing5}`,
          maxWidth: 1280,
          mx: 'auto',
        }}
      >
        <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            sx={{
              fontSize: [(theme) => `${theme.fontSizes.h7}`, (theme) => `${theme.fontSizes.h6}`],
              p: [(theme) => `${theme.space.spacing5}`, (theme) => `${theme.space.spacing6}`],
              textAlign: 'center',
              fontWeight: 'bold',
              maxWidth: 700,
            }}
          >
            <p>
              In the wake of the pandemic & the misinformation surrounding it, we have launched this
              microsite dedicated to Health with the intent to be the leading source for reliable
              and timely information on health-related mis & disinformation in India.
            </p>
            <p>
              We are committed to present to you well-researched & verified information in each of
              these sectors going forward in the form of fact-checks, podcasts, and other formats.
            </p>
          </div>
        </div>

        <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            // src="https://image.freepik.com/free-vector/group-medical-staff-carrying-health-related-icons_53876-43071.jpg"
            src={headerImg}
            alt=""
            sx={{
              width: 'full',
              p: [(theme) => `${theme.space.spacing5}`, (theme) => `${theme.space.spacing6}`],
              maxWidth: 500,
            }}
          />
        </div>
      </header>
      <div
        className="divider"
        sx={{
          fontFamily: 'Metropolis',
          color: '#3e3e3e',
          fontSize: [
            (theme) => `${theme.fontSizes.h6}`,
            (theme) => `${theme.fontSizes.h5}`,
            (theme) => `${theme.fontSizes.h4}`,
          ],
          textShadow: '1px 1px 1px rgba(240, 240, 240, .45)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          my: (theme) => `${theme.space.spacing5}`,
          '&::before': {
            content: "''",
            display: 'block',
            height: '0.09em',
            minWidth: '30vw',
            background: 'linear-gradient(to right, rgba(0,0,0,0), #aaa)',
            marginRight: '4vh',
          },
          '&::after': {
            content: "''",
            display: 'block',
            height: '0.09em',
            minWidth: '30vw',
            background: 'linear-gradient(to left, rgba(0,0,0,0), #aaa)',
            marginLeft: '4vh',
          },
        }}
      >
        Featured Categories
      </div>
      <div
        className="row"
        sx={{
          display: 'grid',
          gridTemplateColumns: ['1fr', '1fr 1fr', null, '1fr 1fr 1fr'],
          gridGap: (theme) => `${theme.space.spacing3}`,
          flexWrap: 'wrap',
          maxWidth: 1280,
          mx: [(theme) => `${theme.space.spacing5}`, null, null, null, 'auto'],
          my: (theme) => `${theme.space.spacing5}`,
          // '@media (min-width: 550px)': {
          //   '.card': { flex: '0 0 48%', maxWidth: '48%' },
          // },
          // '@media (min-width: 768px)': { '.card': { flex: '0 0 32%', maxWidth: '32%' } },
        }}
      >
        {filteredCategories.map((item, i) => {
          return (
            item.meta_fields && (
              <div
                className="card"
                key={i}
                sx={{
                  position: 'relative',
                  // my: 1,
                  // mx: [null, 1],
                  padding: 0,
                  // flex: '0 0 100%',
                  // maxWidth: '100%',
                  width: '100%',
                  color: (theme) => `${theme.colors.textLight}`,
                  display: 'flex',
                  flexDirection: 'column',
                  minWidth: 0,
                  wordWrap: 'break-word',
                  backgroundColor: (theme) => `${theme.colors.bgLight}`,
                  backgroundClip: 'border-box',
                  borderRadius: 0,
                  border: '0 solid rgba(0, 0, 0, 0.125)',
                  '@media (max-width: 550px)': {
                    img: { visibility: 'hidden' },
                    '.card-body': { opacity: 1 },
                  },
                  '@media (hover: none)': {
                    img: { visibility: 'hidden' },
                    '.card-body': { opacity: 0.8 },
                  },
                }}
              >
                <div
                  key={i}
                  className="card-content"
                  style={{
                    backgroundImage: `url(${item.medium && item.medium.url.proxy}?rs:fill/w:500)`,
                  }}
                  sx={{
                    height: '100%',
                    color: (theme) => `${theme.colors.textLight}`,
                    fontFamily: 'Inter',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    textDecoration: 'none',
                    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.33)',
                    '&:hover': { img: { visibility: 'hidden' } },
                  }}
                >
                  <div
                    className="card-body"
                    style={{ backgroundColor: item.meta_fields.color }}
                    sx={{
                      height: '100%',
                      width: '100%',
                      padding: (theme) => `${theme.space.spacing6}`,
                      color: (theme) => `${theme.colors.textLight}`,
                      margin: 0,
                      border: 0,
                      boxSizing: 'border-box',
                      opacity: 0,
                      '&:hover': { opacity: 1 },
                    }}
                  >
                    {/* <span className="card-count">{i + 1}</span> */}
                    {/* {item.meta_fields.stats.map((i, idx) => (
                  <React.Fragment key={idx}>
                    <h3 className="card-goal">{i.value}</h3>
                    <p className="card-desc">{i.content}</p>
                  </React.Fragment>
                ))} */}
                    <h3>{item.name}</h3>
                    <div
                      className="info"
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginBottom: (theme) => `${theme.space.spacing6}`,
                        marginTop: (theme) => `${theme.space.spacing5}`,
                      }}
                    >
                      {item.meta_fields.stats.map((i, idx) => (
                        <div
                          key={idx}
                          sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: '0 0 50%',
                            maxWidth: '50%',
                            paddingBottom: (theme) => `${theme.space.spacing3}`,
                            paddingRight: (theme) => `${theme.space.spacing5}`,
                          }}
                        >
                          <span
                            sx={{
                              fontFamily: 'Metropolis',
                              fontWeight: 700,
                              fontSize: (theme) => `${theme.fontSizes.h5}`,
                              display: 'inline-block',
                              lineHeight: 1.1,
                              color: (theme) => `${theme.colors.textLight}`,
                            }}
                          >
                            {i.value}
                          </span>
                          <p
                            sx={{
                              fontFamily: 'Inter',
                              fontWeight: 'medium',
                              fontSize: (theme) => `${theme.fontSizes.h8}`,
                              marginTop: 0,
                              marginBottom: 0,
                              color: (theme) => `${theme.colors.textLight}`,
                            }}
                          >
                            {i.content}
                          </p>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={`/categories/${item.slug}`}
                      type="button"
                      sx={{
                        width: '100%',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '1px',
                        border: '1px solid #ffffff',
                        color: (theme) => `${theme.colors.textLight}`,
                        justifyContent: 'center',
                        backgroundColor: 'transparent',
                        fontSize: (theme) => `${theme.fontSizes.h8}`,
                        '&:hover': { color: 'inherit' },
                      }}
                    >
                      View Posts
                    </Link>
                  </div>
                  <img
                    src={item.meta_fields.icon}
                    alt=""
                    sx={{
                      bg: item.meta_fields.color,
                      position: 'absolute',
                      bottom: '16px',
                      left: '16px',
                      maxWidth: 'calc(100% - 32px)',
                    }}
                  />
                  {/* <div className="name" sx={{ bg: item.meta_fields.color, m: 0, p: 2 }}>
                    <p sx={{ m: 0 }}>{item.name}</p>
                  </div> */}
                </div>
              </div>
            )
          );
        })}
        {/* <div className="card">
          <div
            className="card-content"
            style={{
              backgroundColor: '#fff',
              boxShadow: ' inset 0px 0px 10px 1px rgba(0,0,0,0.09)',
            }}
          >
            <div
              className="card-body"
              style={{ opacity: 1, display: 'flex', alignItems: 'center' }}
            >
              <Link href="/categories" id="view-more" type="button">
                View All
              </Link>
            </div>
          </div>
        </div> */}
      </div>{' '}
    </>
  );
};

export default HomePageTwo;

// export const query = graphql`
//   query($sid: [Int!]) {
//     dega {
//       categories(spaces: $sid) {
//         nodes {
//           slug
//           name
//           description
//           meta_fields
//           medium {
//             url
//           }
//         }
//       }
//     }
//   }
// `;
