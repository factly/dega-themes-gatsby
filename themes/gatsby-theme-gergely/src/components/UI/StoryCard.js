/** @jsx jsx */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import React from 'react'; // eslint-disable-line no-unused-vars
import _ from 'lodash';
import parseDate from '@helpers/parseDate';
import addDefaultSrc from '@helpers/addDefaultSrc';
import Img from 'gatsby-image/withIEPolyfill';
import generateFluidObject from '@helpers/generateFluidObject';

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
          p: (theme) => `${theme.space.spacing6}`,
          borderColor: (theme) => `${theme.colors.borderPrimary}`,
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
              pr: (theme) => `${theme.space.spacing5}`,
              py: (theme) => `${theme.space.spacing3}`,
              ...imageSize,
            }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
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
                color: (theme) => `${theme.colors.textLinkPrimary}`,
                fontSize: (theme) => `${theme.fontSizes.h8}`,
                px: (theme) => `${theme.space.spacing2}`,
              }}
            >
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
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                color: (theme) => `${theme.colors.textPrimary}`,
              }}
            >
              {storyData.title}
            </div>
            {excerpt && (
              <p
                sx={{
                  color: (theme) => `${theme.colors.textPrimary}`,
                  fontSize: (theme) => `${theme.fontSizes.h7}`,
                  pt: (theme) => `${theme.space.spacing3}`,
                }}
              >
                {storyData.excerpt}
              </p>
            )}
            <div sx={{ display: 'flex', mt: 'auto', pt: (theme) => `${theme.space.spacing3}` }}>
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
                      color: (theme) => `${theme.colors.textSecondary}`,
                      fontSize: [
                        (theme) => `${theme.fontSizes.h8}`,
                        null,
                        (theme) => `${theme.fontSizes.h7}`,
                      ],
                      mr: (theme) => `${theme.space.spacing3}`,
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
                <p
                  sx={{
                    color: (theme) => `${theme.colors.textSecondary}`,
                    fontSize: [
                      (theme) => `${theme.fontSizes.h8}`,
                      null,
                      (theme) => `${theme.fontSizes.h7}`,
                    ],
                  }}
                >
                  {parseDate(storyData.published_date)}
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
          px: (theme) => `${theme.space.spacing6}`,
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
              pr: (theme) => `${theme.space.spacing5}`,
              py: (theme) => `${theme.space.spacing3}`,
              ...imageSize,
            }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
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
              color: (theme) => `${theme.colors.textSecondary}`,
              fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
              pt: (theme) => `${theme.space.spacing3}`,
            }}
          >
            {storyData.subtitle}
          </p>
          <h2
            sx={{
              width: 'full',
              fontWeight: 'bold',
              fontSize: (theme) => `${theme.fontSizes.h6}`,
              lineHeight: 'tight',
              color: (theme) => `${theme.colors.textPrimary}`,
              overflowWrap: 'break-word',
            }}
          >
            {storyData.title}
          </h2>
          <p
            sx={{
              fontSize: (theme) => `${theme.fontSizes.bodyArticle}`,
              pt: (theme) => `${theme.space.spacing3}`,
              overflowWrap: 'break-word',
              color: (theme) => `${theme.colors.textPrimary}`,
            }}
          >
            {storyData.excerpt}
          </p>
        </Link>
        <div sx={{ flex: 'none', mt: 'auto', py: (theme) => `${theme.space.spacing5}` }}>
          <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p
                sx={{
                  color: (theme) => `${theme.colors.gray[6]}`,
                  fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                  mr: (theme) => `${theme.space.spacing3}`,
                  textTransform: 'none',
                }}
              >
                {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
              </p>
            </div>
            <p
              sx={{
                color: (theme) => `${theme.colors.textSecondary}`,
                fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
              }}
            >
              {parseDate(storyData.published_date)}
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
          p: (theme) => `${theme.space.spacing6}`,
          borderColor: (theme) => `${theme.colors.borderPrimary}`,
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
              pr: (theme) => `${theme.space.spacing5}`,
              py: (theme) => `${theme.space.spacing3}`,
              ...imageSize,
            }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
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
            <div
              id="nav-0"
              className="active"
              sx={{
                width: 'full',
                fontWeight: 'bold',
                fontSize: (theme) => `${theme.fontSizes.h6}`,
                color: (theme) => `${theme.colors.textPrimary}`,
              }}
            >
              {storyData.title}
            </div>
            <p
              sx={{
                color: (theme) => `${theme.colors.textPrimary}`,
                fontSize: (theme) => `${theme.fontSizes.h7}`,
                pt: (theme) => `${theme.space.spacing3}`,
              }}
            >
              {storyData.excerpt}
            </p>

            <div sx={{ display: 'flex', mt: 'auto', pt: (theme) => `${theme.space.spacing3}` }}>
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
                      color: (theme) => `${theme.colors.textSecondary}`,
                      fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                      mr: (theme) => `${theme.space.spacing3}`,
                      textTransform: 'none',
                    }}
                  >
                    {`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}
                  </p>
                </div>
                <p
                  sx={{
                    color: (theme) => `${theme.colors.textSecondary}`,
                    fontSize: [0, null, (theme) => `${theme.fontSizes.h8}`],
                  }}
                >
                  {parseDate(storyData.published_date)}
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
            m: (theme) => `${theme.space.spacing5}`,
            borderRadius: 'lg',
          }}
        >
          <div
            style={{ minWidth: '15rem', maxWidth: '15rem', maxHeight: '15rem' }}
            sx={{ borderRadius: 'lg' }}
          >
            {storyData.medium && (
              <img
                alt={storyData.medium?.alt_text}
                src={storyData.medium?.url.proxy}
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
              p: (theme) => `${theme.space.spacing6}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h2 sx={{ pb: (theme) => `${theme.space.spacing3}` }}>{storyData.title}</h2>
            <p sx={{ fontSize: (theme) => `${theme.fontSizes.h8}` }}>
              {_.truncate(storyData.excerpt, {
                length: 150,
                separator: /,?\.* +/,
              })}
            </p>
            <p
              sx={{
                fontSize: (theme) => `${theme.fontSizes.h8}`,
                pt: (theme) => `${theme.space.spacing3}`,
                color: (theme) => `${theme.colors.gray[5]}`,
              }}
            >
              <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
              {' / '}
              <span>{parseDate(storyData.published_date)}</span>
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
        <div
          className="iframely-card"
          sx={{ display: 'flex', flexDirection: 'column', width: 'full', maxWidth: 'full' }}
        >
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
                    position: 'absolute',
                    textDecoration: 'none',
                    touchAction: 'manipulation',
                  }}
                >
                  {storyData.medium && (
                    <Img
                      sx={{ height: '100%', objectFit: 'cover', width: '100%' }}
                      fluid={generateFluidObject({
                        url: storyData.medium?.url.proxy,
                        dimensions: storyData.medium?.dimensions,
                      })}
                    />
                  )}
                </Link>
              </div>
            </div>
          </div>
          <Link
            to={`/${storyData.slug}`}
            sx={{
              p: (theme) => `${theme.space.spacing4}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: '1 0 auto',
            }}
          >
            <h3 sx={{ fontSize: (theme) => `${theme.fontSizes.h6}` }}>{storyData.title}</h3>
            {excerpt && (
              <p sx={{ fontSize: (theme) => `${theme.fontSizes.bodySmall}` }}>
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
                span: {
                  mr: (theme) => `${theme.space.spacing2}`,
                  fontSize: (theme) => `${theme.fontSizes.bodyExtraSmall}`,
                  color: '#919191',
                },
              }}
            >
              {storyData.format && (
                <>
                  <span>{storyData.format.name}</span>
                  <span>/</span>
                </>
              )}
              {storyData.users[0]?.first_name && (
                <>
                  <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
                  <span>/</span>
                </>
              )}
              <span>{parseDate(storyData.published_date)}</span>
            </div>
          </Link>
        </div>
      </div>
    )}
    {cardStyle === 'iframely-small' && (
      <div
        sx={{
          display: 'flex',
          my: (theme) => `${theme.space.spacing5}`,
          border: '1px solid rgb(222,222,222)',
        }}
      >
        <div
          className="iframely-small"
          sx={{ display: 'flex', alignItems: 'center', width: 'full', maxWidth: 'full' }}
        >
          <div sx={{ width: '150px', maxWidth: '150px', height: '150px' }}>
            {storyData.medium && (
              <Link
                to={`/${storyData.slug}`}
                sx={{
                  display: 'block',
                  width: '150px',
                  height: '150px',
                  background: 'no-repeat center',
                  backgroundSize: ' cover',
                  backgroundImage: `url(${storyData.medium?.url.proxy})`,
                  textDecoration: 'none',
                  touchAction: 'manipulation',
                }}
              ></Link>
            )}
          </div>
          <Link
            to={`/${storyData.slug}`}
            sx={{
              p: (theme) => `${theme.space.spacing4}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <h3>{storyData.title}</h3>
            <p sx={{ fontSize: (theme) => `${theme.fontSizes.bodySmall}` }}>
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
                span: {
                  mr: (theme) => `${theme.space.spacing3}`,
                  fontSize: (theme) => `${theme.fontSizes.h8}`,
                  color: '#919191',
                },
              }}
            >
              {storyData.format && (
                <>
                  <span>{storyData.format.name}</span>
                  <span>/</span>
                </>
              )}
              {storyData.users[0]?.first_name && (
                <>
                  {' '}
                  <span>{`${storyData.users[0]?.first_name} ${storyData.users[0]?.last_name}`}</span>
                  <span>/</span>
                </>
              )}
              <span>{parseDate(storyData.published_date)}</span>
            </div>
          </Link>
        </div>
      </div>
    )}
  </>
);

export default StoryCard;
