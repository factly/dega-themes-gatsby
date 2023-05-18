/** @jsx jsx */
import React, { useRef, useEffect, createRef } from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import PostInfo from '@components/Post/PostInfo';
import ShareButtonGroup from '@components/Post/ShareButtonGroup';
import FactCheckWidget from '@components/Post/FactCheckWidget';
import Tag from '@components/Post/Tag';
import Excerpt from '@components/Post/Excerpt';
import { isBrowser } from '@helpers/isBrowser';
import Seo from '@components/Seo';
import InnerHTML from 'dangerously-set-html-content';
import { Link } from 'gatsby';
import { FaEnvelope, FaFacebook, FaFacebookF, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { parseDate } from '@helpers/parseDate';
import { parseTiptapContent } from '@helpers/parseTiptapContent';

/**
 * TODO: URI encoding
 * TODO: borderradius in theme ui
 * TODO: Add background to embeds if failed like factly.in
 * TODO: Show multiple authors and categories
 * TODO: Add Reading Time
 * TODO: Configurable social sharing site links defaults to facebook, twitter, whatsapp and linkedin
 * TODO: Add Lightbox for images, ex: fslightbox.js
 * TODO: Check Claim fact data type on dega studio
 */

const Post = ({ post, observer }) => {
  const postSection = useRef(null);
  const headerSocialIcon = createRef();

  useEffect(() => {
    // observer.observe(postSection.current);
    // observer.observe(headerSocialIcon.current);
  }, [observer, postSection, headerSocialIcon]);

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
      <div className="c-topper">
        <div className="c-topper__content">
          <div className="c-topper__tag c-tag">
            {post.categories.length > 0 && (
              <Link to={`/category/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
            )}
          </div>

          <h1 className="c-topper__headline">{post.title}</h1>

          <p className="c-topper__standfirst">{post.excerpt}</p>

          <div className="c-topper__meta">
            <div>
              <div className="c-byline c-topper__byline">
                {post.users.length > 0 && (
                  <>
                    <Link key={post.id} to={`/author/${post.users[0].slug}`}>
                      {post.users[0].display_name}
                    </Link>
                    <span className="u-hidden u-hidden">,&nbsp;</span>
                    <span className="u-hidden ">&nbsp;and&nbsp;</span>
                  </>
                )}
              </div>{' '}
              <time
                className="c-timestamp c-topper__timestamp"
                dateTime={parseDate(post.published_at)}
              >
                {parseDate(post.published_at)}
                {/* <span className="c-timestamp__detail"> . 12:00 AM</span> */}
              </time>{' '}
              <div className="c-reading-time c-topper__reading-time">2 min read</div>{' '}
            </div>
            <ul className="c-share u-plain-list">
              <li className="c-share__item">
                <a
                  className="c-share__link"
                  href={`https://twitter.com/share?text=${post.title}}&amp;url=${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                // onClick={() => {
                //   window.open(this.href, 'twitter-share', 'width=550, height=235');
                //   return false;
                // }}
                >
                  <div className="icon icon--ei-sc-twitter icon--s c-share__icon">
                    <FaTwitter className="icon__cnt" />
                  </div>
                  <span className="u-screenreader">Share on Twitter</span>
                </a>
              </li>

              <li className="c-share__item">
                <a
                  className="c-share__link"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                // onClick={() => {
                //   window.open(this.href, 'facebook-share', 'width=580, height=296');
                //   return false;
                // }}
                >
                  <div className="icon icon--ei-sc-facebook icon--s c-share__icon">
                    <FaFacebookF className="icon__cnt" />
                  </div>
                  <span className="u-screenreader">Share on Facebook</span>
                </a>
              </li>

              <li className="c-share__item">
                <a
                  className="c-share__link"
                  href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${post.slug}&amp;title=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                // onClick={() => {
                //   window.open(this.href, 'linkedin-share', 'width=580, height=296');
                //   return false;
                // }}
                >
                  <div className="icon icon--ei-sc-linkedin icon--s c-share__icon">
                    <FaLinkedin className="icon__cnt" />
                  </div>
                  <span className="u-screenreader">Share on LinkedIn</span>
                </a>
              </li>

              <li className="c-share__item">
                <a
                  className="c-share__link"
                  href={`mailto:?subject=${post.title}&amp;body=@{post.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="icon icon--ei-envelope icon--s c-share__icon">
                    <FaEnvelope className="icon__cnt" />
                  </div>
                  <span className="u-screenreader">Share via Email</span>
                </a>
              </li>
            </ul>{' '}
          </div>
        </div>

        <figure className="c-feature-image-figure">
          <div className="c-feature-image-wrap">
            <img
              className="c-feature-image lazyloaded"
              data-src={post.medium?.url?.proxy}
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
        </figure>
      </div>
      <article className="c-post post tag-opinion tag-hash-editors-picks">
        {post.claims && <FactCheckWidget claims={post.claims} />}
        {parseTiptapContent(post.description_html)}
        <div
          sx={{
            width: ['full'],
            mx: 'auto',
          }}
        >
          {post.claims &&
            post.claims.map((claim, i) => (
              <React.Fragment key={i}>
                {post.claims.length > 1 && (
                  <div
                    sx={{
                      bg: (theme) => `${theme.colors.bgPrimary}`,
                      p: (theme) => `${theme.space.spacing5}`,
                      mt: (theme) => `${theme.space.spacing5}`,
                    }}
                  >
                    <div
                      sx={{
                        mb: (theme) => `${theme.space.spacing5}`,
                      }}
                    >
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Claim:{' '}
                      </h4>
                      {claim.claim}
                    </div>
                    <div>
                      <h4
                        sx={{
                          fontWeight: 'bold',
                        }}
                      >
                        Fact:
                      </h4>
                      <p dangerouslySetInnerHTML={{ __html: claim.fact }} />
                    </div>
                  </div>
                )}

                <div
                  className="parsed"
                  dangerouslySetInnerHTML={{ __html: claim.description_html }}
                />
              </React.Fragment>
            ))}
        </div>
      </article>
    </>
  );
};

export default Post;
