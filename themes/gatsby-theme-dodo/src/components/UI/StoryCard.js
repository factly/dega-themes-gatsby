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

export const StoryCard = ({ storyData, cardStyle = 'default' }) => (
  <>
    {cardStyle === 'default' && (
      <article className="js-card c-card c-card-- c-card-- post featured">
        <Link to={`/${storyData.slug}/`} className="c-card__media">
          <img
            className="c-card__image"
            alt={storyData.title}
            data-src={storyData.medium?.url?.proxy}
            src={storyData.medium?.url?.proxy}
          />
        </Link>

        <div className="c-card__content">
          <div className="c-card__tag c-tag">
            {storyData.categories.length > 0 && (
              <Link to={`/category/${storyData.categories[0].slug}/`}>
                {storyData.categories[0].name}
              </Link>
            )}
          </div>

          <h3 className="c-card__headline">
            <Link to={`/${storyData.slug}/`} className="c-card__link">
              {storyData.title}
            </Link>
          </h3>

          <div className="c-card__meta">
            <div className="c-byline c-card__byline">
              {storyData.users?.length > 0 && (
                <>
                  <Link key={storyData.id} to={`/author/${storyData.users[0].slug}`}>
                    {storyData.users[0].display_name}
                  </Link>
                  <span className="u-hidden u-hidden">,&nbsp;</span>
                  <span className="u-hidden ">&nbsp;and&nbsp;</span>
                </>
              )}
            </div>
            <time className="c-timestamp c-card__timestamp" dateTime={storyData.published_at}>
              {parseDate(storyData.published_at)}
            </time>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'large' && (
      <article className="js-card c-card c-card--large c-card--center post  featured">
        <Link to={`/${storyData.slug}/`} className="c-card__media">
          <img
            className="c-card__image"
            alt={storyData.title}
            data-src={storyData.medium?.url?.proxy}
            src={storyData.medium?.url?.proxy}
          />
        </Link>

        <div className="c-card__content">
          <div className="c-card__tag c-tag">
            {storyData.categories.length > 0 && (
              <Link to={`/category/${storyData.categories[0].slug}/`}>
                {storyData.categories[0].name}
              </Link>
            )}
          </div>

          <h3 className="c-card__headline">
            <Link to={`/${storyData.slug}/`} className="c-card__link">
              {storyData.title}
            </Link>
          </h3>

          <p className="c-card__standfirst">{storyData.excerpt}</p>

          <div className="c-card__meta">
            <div className="c-byline c-card__byline">
              <span className="u-hidden ">,&nbsp;</span>
              <span className="u-hidden ">&nbsp;and&nbsp;</span>
              <span className=" u-hidden">,&nbsp;</span>
              {/* <span className="u-hidden u-block">&nbsp;and&nbsp;</span> */}

              {storyData.users.length > 0 && (
                <Link to={`/author/${storyData.users[0].slug}/`}>
                  {storyData.users[0].display_name}
                </Link>
              )}
            </div>
            <time className="c-timestamp c-card__timestamp" dateTime={storyData.published_at}>
              {parseDate(storyData.published_at)}
            </time>
          </div>
        </div>
      </article>
    )}
    {cardStyle === 'small' && (
      <article className="c-teaser c-teaser--small post tag-opinion tag-hash-editors-picks">
        <div className="c-teaser__content">
          <div className="c-teaser__tag c-tag">
            <Link to={`/category/${storyData.categories[0].slug}/`}>
              {storyData.categories[0].name}
            </Link>
          </div>

          <h3 className="c-teaser__headline">
            <Link to={`/${storyData.slug}/`} className="c-teaser__link">
              {storyData.title}
            </Link>
          </h3>

          <div className="c-teaser__meta">
            <div className="c-byline c-teaser__byline">
              <span className="u-hidden u-hidden">,&nbsp;</span>
              <span className="u-hidden ">&nbsp;and&nbsp;</span>

              {storyData.users.length > 0 && (
                <Link to={`/author/${storyData.users[0].slug}/`}>
                  {storyData.users[0].display_name}
                </Link>
              )}
            </div>
            <time className="c-timestamp c-teaser__timestamp" dateTime={storyData.published_at}>
              {parseDate(storyData.published_at)}
            </time>{' '}
          </div>
        </div>

        <Link to={`/${storyData.slug}/`} className="c-teaser__media">
          <img
            className="c-teaser__image"
            alt={storyData.title}
            data-src={storyData.medium?.url?.proxy}
            src={storyData.medium?.url?.proxy}
          />
        </Link>
      </article>
    )}
  </>
);

export default StoryCard;
