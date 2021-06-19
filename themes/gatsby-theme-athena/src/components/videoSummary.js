/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import _ from 'underscore';
import { FaRegClock } from 'react-icons/fa';
import parseDate from '../utils/parseDate';

const VideoSummary = ({ video, claims, preview = false }) => {
  // TODO: Add colors from API
  //! Add colors from API
  //!
  const colors = {
    1: '#108040',
    2: '#A5C239',
    3: '#ECA124',
    4: '#749990',
    5: '#E82728',
    6: 'transparent',
  };
  const ratingColors = {
    False: '#e82728',
    True: '#108040',
    'Not a Claim': '#f9f9f9',
    Misleading: '#749990',
    Unverified: '#eca124',
    'Partly True': '',
  };
  const getStartingPercent = (start, total) => {
    // console.log({ startingPoint: `${(start / total) * 100}%` });
    return `${(start / total) * 100}%`;
  };
  const getClaimWidth = (start, end, total) => {
    //  console.log({ claimWidth: `${(parseInt(end - start) / total) * 100}%` });
    return `${(parseInt(end - start) / total) * 100}%`;
  };
  const getRatingsCount = (ratings = []) => {
    const uniqueCount = ratings.reduce(function (prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    return uniqueCount;
  };
  const getRatings = (claims) => {
    const ratingsArray = claims.map((claim) => claim.rating.name);
    return ratingsArray;
  };

  const getWidth = (start, end, total) => {
    const timeElapsed = parseInt(end - start);
    return (timeElapsed / total) * 100;
  };
  const roundingPercentages = (l) => {
    let off =
      100 -
      _.reduce(
        l,
        function (acc, x) {
          return acc + Math.round(x);
        },
        0,
      );
    return _.chain(l)
      .sortBy(function (x) {
        return Math.round(x) - x;
      })
      .map(function (x, i) {
        return Math.round(x) + (off > i) - (i >= l.length + off);
      })
      .value();
  };
  const sortedClaims = claims.sort((a, b) => {
    return a.start_time - b.start_time;
  });
  const calculated = sortedClaims.map((claim) => {
    const start = claim.start_time;
    const end = claim.end_time;
    const total = video.total_duration;
    const percent = getWidth(start, end, total);
    return percent;
  });
  const roundedPercent = roundingPercentages(calculated);

  const percentMap = sortedClaims.map((claim, i) => {
    return { claim: claim.rating.id, percent: roundedPercent[i] };
  });

  const ratingsCount = getRatingsCount(getRatings(claims));
  return (
    <div
      className="summary"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: !preview ? 'space-between' : 'flex-start',
        height: '100%',
        maxHeight: '100%',
      }}
    >
      {!preview && (
        <div className="summary-header" sx={{ mb: '0.5rem' }}>
          <h3 sx={{ m: 0, p: 0 }}>{video.title}</h3>
          <p sx={{ m: 0, mb: '0.25rem', p: 0, fontSize: '0.75rem' }}>
            {parseDate(video.created_at)}
          </p>
        </div>
      )}
      <div className="summary-claims">
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '300px',
            fontSize: '0.75rem',
            mb: '0.25rem',
          }}
        >
          <p sx={{ p: 0, m: 0, fontWeight: 'bold' }}>{claims.length} claims in total</p>
          <p sx={{ p: 0, m: 0, display: 'flex', alignItems: 'baseline' }}>
            <FaRegClock />
            <span sx={{ pl: '0.25rem' }}>
              {Math.ceil(parseInt(video.total_duration) / 60)} mins
            </span>
          </p>
        </div>

        {/* <div
          className="bar"
          sx={{
            backgroundImage:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=)',
            display: 'flex',
            flexWrap: 'nowrap',
            position: 'relative',
            mb: '0.5rem',
            maxWidth: '300px',
          }}
        >
           {Object.entries(percentMap).map(([key, value]) => {
            return (
              <div
                className="claimBar"
                key={key}
                sx={{
                  py: '4px',
                  width: `${value.percent}%`,
                  background: colors[value.claim],
                }}
              />
            );
          })} 
        </div>*/}
        <div
          className="bar sorted"
          sx={{
            backgroundImage:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=)',
            display: 'flex',
            flexWrap: 'nowrap',
            position: 'relative',
            mb: '0.5rem',
            maxWidth: '300px',
            height: '8px',
          }}
        >
          {sortedClaims.map((claim) => {
            const ml = getStartingPercent(claim.start_time, video.total_duration);
            const w = getClaimWidth(claim.start_time, claim.end_time, video.total_duration);
            {
              //     console.log({ claim, w, ml });
            }
            return (
              <div
                className="claimBar"
                key={claim.id}
                sx={{
                  position: 'absolute',
                  py: '4px',
                  width: w,
                  ml,
                  background: claim.rating.background_colour.hex,
                }}
              ></div>
            );
          })}
        </div>
        {ratingsCount &&
          Object.entries(ratingsCount).map(([key, value]) => {
            if (key !== 'Not a Claim') {
              return (
                <p
                  key={key}
                  sx={{ m: 0, p: 0, fontSize: '0.75rem', color: ratingColors[key] }}
                >{`${value} of ${key}`}</p>
              );
            }
            return;
          })}
      </div>
      <p
        className="summary-description"
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          margin: 0,
          marginTop: !preview ? '0' : '0.5rem',
          maxHeight: !preview ? 'calc( 0.875rem * 1.15 * 3 )' : 'auto',
          lineHeight: '1.15',
          fontSize: '0.875rem',
        }}
      >
        {video.summary}
      </p>
    </div>
  );
};

export default VideoSummary;
