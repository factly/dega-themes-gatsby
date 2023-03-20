/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'

const BlogCard = ({ data }) => {
  const src = data.medium?.url?.proxy;
  return (
    <div
      sx={{
        maxWidth: ['100%', 'calc(50% - 0.75rem)', null, 'calc(33% - 1rem)'],
        flex: ['1 0 100%', '1 0 calc(50% - 0.75rem)', null, '1 0 calc(33% - 1rem)'],
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s',
        '&:hover': {
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        },
      }}
    >
      <Link to={`/blog/${data.slug}`}>
        {/* <div>
          <img src={src} alt="" />
        </div> */}
        <div
          sx={{
            position: 'relative',
            overflow: 'hidden',
            // height: '100%',
            objectFit: 'cover',
            width: '100%',
          }}
        >
          <div aria-hidden="true" sx={{ width: '100%', pb: '100%' }} className="lazy"></div>
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

        <div sx={{ p: '1rem' }}>
          <h1
            sx={{
              variant: 'text.normal',

              color: '#101828',
              my: '1rem',
              display: 'flex',
              gap: '0.25rem',
              justifyContent: 'space-between',
              alignItems: 'baseline',
            }}
          >
            {data.title}
          </h1>
          <p
            sx={{
              variant: 'text.xs',
              color: '#666666',
            }}
          >
            {data.excerpt}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default BlogCard