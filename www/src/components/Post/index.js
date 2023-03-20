/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'
import { isBrowser } from '../../helpers/isBrowser';
import parseTiptapContent from '../../helpers/parseTiptapContent';

const Post = ({ data }) => {
  const src = data?.medium?.url?.proxy;
  return (
    <section sx={{
    }}>
      <div sx={{
        maxWidth: '1100px',
        mx: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '24px',
        mt: ['3rem', null, '5rem'],
        px: ['32px', null, '0px']
      }}>
        <div sx={{
          maxWidth: ['1 0 100%', null, 'calc(50% - 32px)'],
          flex: ['1 0 100%', null, 'calc(50% - 32px)'],
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <h2 sx={{
            fontFamily: 'Montserrat',
            fontWeight: '600',
            fontSize: '42px',
            color: '#101828',
            lineHeight: 'initial'
          }}>{data.title}</h2>
          <p sx={{
            fontFamily: 'Inter',
            fontWeight: '400',
            variant: 'text.normal',
            color: '#667085',
            lineHeight: '30px'
          }}>{data.excerpt}</p>
        </div>

        <div
          sx={{
            position: 'relative',
            overflow: 'hidden',
            // height: '100%',
            objectFit: 'cover',
            //width: '100%',
            maxWidth: ['1 0 100%', null, 'calc(50% - 32px)'],
            flex: ['1 0 100%', null, 'calc(50% - 32px)'],
          }}
        >
          <div aria-hidden="true" sx={{ width: '100%', pb: '56.25%' }} className="lazy"></div>
          <picture>
            <source
              srcSet={`${src}?rs:fill/w:100 100w,
                ${src}?rs:fill/w:400 400w,
                ${src}?rs:fill/w:600 600w,
                ${src}?rs:fill/w:1024 1024w,
                ${src}?rs:fill/w:1280 1280w,
                ${src}?rs:fill/w:1280 1280w`}
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <img
              sizes="(max-width: 1280px) 100vw, 1280px"
              srcSet={`${src}?rs:fill/w:100 100w,
                ${src}?rs:fill/w:400 400w,
                ${src}?rs:fill/w:600 600w,
                ${src}?rs:fill/w:1024 1024w,
                ${src}?rs:fill/w:1280 1280w,
                ${src}?rs:fill/w:1280 1280w`}
              src={src}
              alt=""
              loading="lazy"
              sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '50% 50%',
                opacity: 1,
                transition: 'opacity 500ms ease 0s',
              }}
            />
          </picture>
          <noscript>
            <picture>
              <source
                srcSet={`${src}?rs:fill/w:100 100w,
                  ${src}?rs:fill/w:400 400w,
                  ${src}?rs:fill/w:600 600w,
                  ${src}?rs:fill/w:1024 1024w,
                  ${src}?rs:fill/w:1280 1280w,
                  ${src}?rs:fill/w:1280 1280w`}
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <img
                loading="lazy"
                sizes="(max-width: 1280px) 100vw, 1280px"
                srcSet={`${src}?rs:fill/w:100 100w,
                  ${src}?rs:fill/w:400 400w,
                  ${src}?rs:fill/w:600 600w,
                  ${src}?rs:fill/w:1024 1024w,
                  ${src}?rs:fill/w:1280 1280w,
                  ${src}?rs:fill/w:1280 1280w`}
                src={src}
                alt=""
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  opacity: 1,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </picture>
          </noscript>
        </div>
      </div>


      <div className='parsed'
        sx={{
          fontFamily: 'Inter',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '30px',
          color: '#6C6C6C',
          maxWidth: '720px',
          margin: 'auto',
          py: '4rem',
          px: '32px',
          p: {
            mb: '1rem',
          }
        }}
      >
        {isBrowser && parseTiptapContent(data.description_html)}
      </div>

    </section>
  )
}

export default Post


