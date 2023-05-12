/** @jsx jsx */
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import FactCheckWidget from '@components/Post/FactCheckWidget';
import Badge from '@components/Post/Badge';
import Seo from '@components/Seo';
import { Link } from 'gatsby';
import parseDate from '@helpers/parseDate';

import { isBrowser } from '@helpers/isBrowser';
import { parseTiptapContent } from '@helpers/parseTiptapContent';

/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add backgroudn to embeds if failed like factly.in
 */

const Post = ({ post }) => {
  const title = encodeURIComponent(post.title);
  let url;
  if (isBrowser) {
    url = encodeURIComponent(window.location.href);
  }

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />
      <Helmet>
        {post.schemas &&
          post.schemas.map((schema, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))}
      </Helmet>
      <article
        sx={{
          display: 'flex',
          flexDirection: 'column',
          px: (theme) => `${theme.space.spacing6}`,
          my: (theme) => `${theme.space.spacing6}`,
          fontSize: (theme) => `${theme.fontSizes.body}`,
          '&:first-of-type': {
            mt: 0,
          },
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col">
              <article class="single-post post-card">
                <header class="post-header">
                  <div class="tag-wrap">
                    {post.categories.length > 0 && (
                      <Link to={`/category/${post.categories[0].slug}/`}>
                        {post.categories[0].name}
                      </Link>
                    )}{' '}
                  </div>
                  <h1 class="heading-large post-title">{post.title}</h1>
                  <div class="post-meta-wrap flex">
                    <div class="author-avatar-wrap">
                      {post.users.length > 0 && (
                        <Link to={`/author/${post.users[0].slug}/`} class="author-image">
                          <img
                            src={post.users[0].medium?.url?.proxy}
                            loading="lazy"
                            alt={post.users[0].display_name}
                          />
                        </Link>
                      )}
                    </div>
                    <div class="meta-info">
                      <div class="author-names">
                        <Link to={`/author/${post.users[0].slug}/`}>
                          {post.users[0].display_name}
                        </Link>
                      </div>
                      <div class="date-time">
                        <time class="post-date" dateTime={parseDate(post.published_at)}>
                          {parseDate(post.published_at)}
                        </time>
                        {/* <span class="read-time">3 min read</span> */}
                      </div>
                    </div>
                  </div>{' '}
                </header>
                <div class="featured-image-wrap">
                  <img
                    class="featured-image"
                    loading="lazy"
                    srcset={`${post.medium?.url?.proxy}?rs:fill/w:320 300w,
                    ${post.medium?.url?.proxy}?rs:fill/w:640 720w,
                    ${post.medium?.url?.proxy}?rs:fill/w:720 960w,
                    ${post.medium?.url?.proxy}?rs:fill/w:960 1200w,
                    ${post.medium?.url?.proxy}?rs:fill/w:1200 2000w`}
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    src={`${post.medium?.url?.proxy}?rs:fill/w:1200`}
                    alt={post.title}
                  />
                </div>
                <div class="featured-image-caption text-center"></div>
                <div class="post-content">{parseTiptapContent(post.description_html)}</div>
                <div class="post-footer">
                  <div class="share-wrap">
                    <div class="share-title h5 text-center">Share this article:</div>
                    <div class="share-links flex">
                      <a
                        class="facebook"
                        href="https://www.facebook.com/sharer/sharer.php?u=${url}"
                        title="Share on Facebook"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                      </a>
                      <a
                        class="twitter"
                        href="https://twitter.com/share?text=${title}&amp;url=${url}"
                        title="Share on Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </a>
                      <a
                        class="pinterest"
                        href="http://pinterest.com/pin/create/button/?url=${url}&amp;media=https://inros.gbjsolution.com/content/images/2021/09/image-2.jpg&amp;description=${title}"
                        title="Share on Pinterest"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                      <a
                        class="whatsapp"
                        href="whatsapp://send?text=${url}"
                        data-action="share/whatsapp/share"
                        title="Share on Whatsapp"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                        </svg>
                      </a>
                      <a
                        class="linkedin"
                        href="http://www.linkedin.com/shareArticle?mini=true&amp;url=${url}&amp;title=${title}"
                        title="Share on Linkedin"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                        </svg>
                      </a>
                      <a
                        class="link"
                        href="mailto:?subject=${title}&amp;body=${url}"
                        title="Send via email"
                        rel="noopener"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path>
                        </svg>
                      </a>
                      <a
                        class="link js-copy-link"
                        href="#"
                        data-clipboard-text="${url}"
                        title="Copy the permalink"
                        rel="noopener"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"></path>
                        </svg>
                      </a>
                    </div>
                    <div class="js-notification-copy-link text-center">
                      <span>The link has been Copied to clipboard!</span>
                    </div>
                  </div>{' '}
                  <h3 class="h4 about-author-section-title">Written by</h3>
                  <div class="about-author flex">
                    <div class="avatar-wrap">
                      {post.users.length > 0 && (
                        <Link to={`/author/${post.users[0].slug}/`}>
                          <img sx={{ height: '108px', width: '108px', borderRadius: '50%', background: '#000' }}
                            src={post.users[0].medium?.url?.proxy}
                            loading="lazy"
                            alt={post.users[0].display_name}
                          />
                        </Link>
                      )}
                    </div>
                    <div class="author-info">
                      <h3 class="name h4">
                        {post.users.length > 0 && (
                          <Link to={`/author/${post.users[0].slug}/`}>
                            {post.users[0].display_name}
                          </Link>
                        )}
                      </h3>
                      <div class="bio">{post.users.length > 0 && post.users[0].description}</div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Post;
