/** @jsx jsx */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line no-unused-vars
import _ from 'lodash';
import parseDate from '../utils/parseDate';
import addDefaultSrc from '../utils/addDefaultSrc';

/**
 * TODO: Change the data structure of props
 * TODO: Make images more responsive
 * TODO: Make most of the items optional
 * TODO: Possibly increase padding
 * TODO: Probably change the name of the component to "Card"
 * TODO: Refactor to decrease repetition of code
 */

const StoryCard = ({
  storyData,
  cardStyle = 'basic',
  excerpt = false,
  imageSize = { width: 'full', height: 40 },
}) => (
  <>
    {cardStyle === 'basic' && (
      <article
        className={`${cardStyle}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 'tight',
          borderBottomWidth: '1px',
          '&:last-child': { borderBottomWidth: 0 },
          p: 6,
          borderColor: (theme) => `${theme.colors.gray[2]}`,
        }}
      >
        <Link
          to={`/${storyData.slug}`}
          className="vertical horizontal"
          sx={{
            width: 'full',
            display: 'flex',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              pr: 4,
              py: 2,
              ...imageSize,
            }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium.alt_text}
                src={storyData.medium.url.raw}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                onError={addDefaultSrc}
              />
            )}
          </div>
          <div sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
            <p sx={{ color: (theme) => `${theme.colors.blue[5]}`, fontSize: 0, px: 1 }}>
              {storyData.categories.map((category, i, arr) => (
                <span key={i}>
                  {category.name}
                  {arr.length - i > 1 && ', '}
                </span>
              ))}
            </p>
            <div
              id="nav-0"
              className="active"
              sx={{
                width: 'full',
                fontWeight: 'bold',
                fontSize: 3,
                color: (theme) => `${theme.colors.gray[8]}`,
              }}
            >
              {storyData.title}
            </div>
            {excerpt && (
              <p sx={{ color: (theme) => `${theme.colors.gray[8]}`, fontSize: 2, pt: 2 }}>
                {storyData.excerpt}
              </p>
            )}
            <div sx={{ display: 'flex', mt: 'auto', pt: 2 }}>
              <div
                className="vertical horizontal"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 'full',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <p
                    sx={{
                      color: (theme) => `${theme.colors.gray[6]}`,
                      fontSize: [0, null, 1],
                      mr: 2,
                      textTransform: 'none',
                    }}
                  >
                    {storyData.users.map((user, i, arr) => (
                      <span key={i}>
                        {`${user.first_name} ${user.last_name}`} {arr.length - i > 1 && ','}
                      </span>
                    ))}
                  </p>
                </div>
                <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, null, 1] }}>
                  {parseDate(storyData.created_at)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )}

    {cardStyle === 'featured' && (
      <article
        sx={{
          bg: 'white',
          borderTopLeftRadius: 'default',
          borderTopRightRadius: 'default',
          borderBottomLeftRadius: 'none',
          borderBottomRightRadius: 'none',
          overflow: 'hidden',
          px: 6,
        }}
      >
        <Link
          to={`/${storyData.slug}`}
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              pr: 4,
              py: 2,
              ...imageSize,
            }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium.alt_text}
                src={storyData.medium.url.raw}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                onError={addDefaultSrc}
              />
            )}
          </div>

          <p
            sx={{
              width: 'full',
              color: (theme) => `${theme.colors.gray[6]}`,
              fontSize: [0, null, 1],
              pt: 2,
            }}
          >
            {storyData.subtitle}
          </p>
          <h2
            className="active"
            sx={{
              width: 'full',
              fontWeight: 'bold',
              fontSize: 4,
              lineHeight: 'tight',
              color: (theme) => `${theme.colors.gray[9]}`,
              overflowWrap: 'break-word',
            }}
          >
            {storyData.title}
          </h2>
          <p
            sx={{
              fontSize: 3,
              pt: 2,
              overflowWrap: 'break-word',
              color: (theme) => `${theme.colors.gray[8]}`,
            }}
          >
            {storyData.excerpt}
          </p>
        </Link>
        <div sx={{ flex: 'none', mt: 'auto', py: 4 }}>
          <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p
                sx={{
                  color: (theme) => `${theme.colors.gray[6]}`,
                  fontSize: [0, null, 1],
                  mr: 2,
                  textTransform: 'none',
                }}
              >
                {`${storyData.users[0].first_name} ${storyData.users[0].last_name}`}
              </p>
            </div>
            <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, null, 1] }}>
              {parseDate(storyData.created_at)}
            </p>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'vertical' && (
      <article
        className={` ${cardStyle}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          lineHeight: 'tight',
          borderBottomWidth: '1px',
          '&:last-child': { borderBottomWidth: 0 },
          p: 6,
          borderColor: (theme) => `${theme.colors.gray[2]}`,
        }}
      >
        <Link
          to={`/${storyData.slug}`}
          sx={{
            width: 'full',
            display: 'flex',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          }}
        >
          <div
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              pr: 4,
              py: 2,
              ...imageSize,
            }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium.alt_text}
                src={storyData.medium.url.raw}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                onError={addDefaultSrc}
              />
            )}
          </div>
          <div sx={{ width: 'full', display: 'flex', flexDirection: 'column' }}>
            <p
              sx={{
                width: 'full',
                color: (theme) => `${theme.colors.gray[6]}`,
                fontSize: [0, null, 1],
                pb: 1,
              }}
            >
              {storyData.categories[0].name}
            </p>
            <div
              id="nav-0"
              className="active"
              sx={{
                width: 'full',
                fontWeight: 'bold',
                fontSize: 3,
                color: (theme) => `${theme.colors.gray[8]}`,
              }}
            >
              {storyData.title}
            </div>
            <p sx={{ color: (theme) => `${theme.colors.gray[8]}`, fontSize: 2, pt: 2 }}>
              {storyData.excerpt}
            </p>

            <div sx={{ display: 'flex', mt: 'auto', pt: 2 }}>
              <div
                className="vertical horizontal"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: 'full',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <div sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  <p
                    sx={{
                      color: (theme) => `${theme.colors.gray[6]}`,
                      fontSize: [0, null, 1],
                      mr: 2,
                      textTransform: 'none',
                    }}
                  >
                    {`${storyData.users[0].first_name} ${storyData.users[0].last_name}`}
                  </p>
                </div>
                <p sx={{ color: (theme) => `${theme.colors.gray[6]}`, fontSize: [0, null, 1] }}>
                  {parseDate(storyData.created_at)}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )}
    {cardStyle === 'withoutimage' && <article>card without image</article>}
    {cardStyle === 'card' && (
      <Link
        to={`/${storyData.slug}`}
        sx={{ width: 'full', textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
      >
        <article
          sx={{
            display: 'flex',
            flexDirection: ['column', 'row'],
            borderWidth: '1px',
            m: 4,
            borderRadius: 'lg',
          }}
        >
          <div
            style={{ minWidth: '15rem', maxWidth: '15rem', maxHeight: '15rem' }}
            sx={{ borderRadius: 'lg' }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium.alt_text}
                src={storyData.medium.url.raw}
                sx={{
                  height: 'full',
                  width: 'full',
                  objectFit: 'cover',
                  borderRadius: 'default',
                }}
                onError={addDefaultSrc}
              />
            )}
          </div>
          <div
            sx={{
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2 sx={{ pb: 2 }}>{storyData.title}</h2>
            <p sx={{ fontSize: 1 }}>
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
              })}
            </p>
            <p sx={{ fontSize: 1, pt: 2, color: (theme) => `${theme.colors.gray[5]}` }}>
              <span>{`${storyData.users[0].first_name} ${storyData.users[0].last_name}`}</span>
              {' | '}
              <span>{parseDate(storyData.created_at)}</span>
            </p>
          </div>
        </article>
      </Link>
    )}
    {cardStyle === 'iframely' && (
      <div
        sx={{
          display: 'flex',
          border: '1px solid rgb(222,222,222)',
        }}
      >
        <div className="iframely-card" sx={{ display: 'flex', flexDirection: 'column' }}>
          <div sx={{ maxWidth: '100%', width: '100%', display: 'flex', overflow: 'hidden' }}>
            <div
              sx={{
                paddingBottom: '56.24999999%',
                overflow: 'hidden',
                position: 'relative',
                width: '100%',
              }}
            >
              <div sx={{ position: 'absolute', width: '100%', height: ' 100%' }}>
                <Link
                  to={`/${storyData.slug}`}
                  sx={{
                    zIndex: 20,
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    background: 'no-repeat center',
                    backgroundSize: ' cover',
                    backgroundImage: `url(${storyData.medium.url.raw})`,
                    position: 'absolute',
                    textDecoration: 'none',
                    touchAction: 'manipulation',
                  }}
                ></Link>
              </div>
            </div>
          </div>
          <Link
            to={`/${storyData.slug}`}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: '1 0 auto',
            }}
          >
            <h3>{storyData.title}</h3>
            {excerpt && (
              <p sx={{ fontSize: 1 }}>
                {_.truncate(storyData.excerpt, {
                  length: 150,
                  separator: /,?\.* +/,
                  omission: '...',
                })}
              </p>
            )}
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                span: { mr: 2, fontSize: '0.75rem', color: '#919191' },
              }}
            >
              {storyData.format && (
                <>
                  <span>{storyData.format.name}</span>
                  <span>/</span>
                </>
              )}
              {storyData.users && (
                <>
                  {' '}
                  <span>{`${storyData.users[0].first_name} ${storyData.users[0].last_name}`}</span>
                  <span>/</span>
                </>
              )}
              <span>{parseDate(storyData.created_at)}</span>
            </div>
          </Link>
        </div>
      </div>
    )}
    {cardStyle === 'iframely-small' && (
      <div
        sx={{
          display: 'flex',
          my: 4,
          border: '1px solid rgb(222,222,222)',
        }}
      >
        <div className="iframely-small" sx={{ display: 'flex', alignItems: 'center' }}>
          <div sx={{ width: '150px', maxWidth: '150px', height: '150px' }}>
            <Link
              to={`/${storyData.slug}`}
              sx={{
                display: 'block',
                width: '150px',
                height: '150px',
                background: 'no-repeat center',
                backgroundSize: ' cover',
                backgroundImage: `url(${storyData.medium.url.raw})`,
                textDecoration: 'none',
                touchAction: 'manipulation',
              }}
            ></Link>
          </div>
          <Link
            to={`/${storyData.slug}`}
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h3>{storyData.title}</h3>
            <p sx={{ fontSize: 1 }}>
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
                omission: '...',
              })}
            </p>
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                span: { mr: 2, fontSize: '0.75rem', color: '#919191' },
              }}
            >
              {storyData.format && (
                <>
                  <span>{storyData.format.name}</span>
                  <span>/</span>
                </>
              )}
              {storyData.users && (
                <>
                  {' '}
                  <span>{`${storyData.users[0].first_name} ${storyData.users[0].last_name}`}</span>
                  <span>/</span>
                </>
              )}
              <span>{parseDate(storyData.created_at)}</span>
            </div>
          </Link>
        </div>
      </div>
    )}
  </>
);

export default StoryCard;
