/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import _ from 'underscore';
import { FaRegClock, FaShareSquare } from 'react-icons/fa';
import parseDate from '../utils/parseDate';

const VideoSummaryCard = ({ video, claims, preview = false, ratings }) => {
  // TODO: Add colors from API
  //! Add colors from API
  //!
  // const colors = {
  //   1: '#108040',
  //   2: '#A5C239',
  //   3: '#ECA124',
  //   4: '#749990',
  //   5: '#E82728',
  //   6: 'transparent',
  // };
  const getRatingColors = (ratings = []) => {
    const colors = ratings.reduce(
      (obj, item) =>
        item.background_colour
          ? Object.assign(obj, { [item.name]: item.background_colour?.hex })
          : {},
      {},
    );
    return colors;
  };
  const ratingColors = getRatingColors(ratings);
  // const ratingColors = {
  //   False: '#e82728',
  //   True: '#108040',
  //   'Not a Claim': '#f9f9f9',
  //   Misleading: '#749990',
  //   Unverified: '#eca124',
  //   'Partly True': '#a5c239',
  // };
  // const ratingColorsBg = {
  //   False: '#e8272820',
  //   True: '#10804020',
  //   'Not a Claim': '#f9f9f920',
  //   Misleading: '#74999020',
  //   Unverified: '#eca12420',
  //   'Partly True': '#a5c23920',
  // };
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
  // const roundingPercentages = (l) => {
  //   let off =
  //     100 -
  //     _.reduce(
  //       l,
  //       function (acc, x) {
  //         return acc + Math.round(x);
  //       },
  //       0,
  //     );
  //   return _.chain(l)
  //     .sortBy(function (x) {
  //       return Math.round(x) - x;
  //     })
  //     .map(function (x, i) {
  //       return Math.round(x) + (off > i) - (i >= l.length + off);
  //     })
  //     .value();
  // };
  const sortedClaims = claims.sort((a, b) => {
    return a.start_time - b.start_time;
  });
  //const calculated = sortedClaims.map((claim) => {
  //  const start = claim.start_time;
  //  const end = claim.end_time;
  //  const total = video.total_duration;
  //  const percent = getWidth(start, end, total);
  //  return percent;
  //});
  // const roundedPercent = roundingPercentages(calculated);

  // const percentMap = sortedClaims.map((claim, i) => {
  //  return { claim: claim.rating.id, percent: roundedPercent[i] };
  // });

  const ratingsCount = getRatingsCount(getRatings(claims));
  // const filteredAnalysis = claims.filter((claim) => claim.rating.name === 'Not a Claim');
  return (
    <>
      <div className="summary">
        <div
          className="header"
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
            justifyContent: 'space-between',
            borderBottom: '1px solid #f0f0f0',
            p: ['1rem', '1.5rem'],
            bg: (theme) => theme.colors.bgPrimary,
          }}
        >
          <div
            sx={{
              //flex: '0 0 50%', maxWidth: '50%',
              fontWeight: 'bold',
              my: '1rem',
              justifySelf: [null, null, null, 'start'],
            }}
          >
            <h3 sx={{ m: 0, p: 0, mb: '1rem', fontSize: (theme) => `${theme.fontSizes.h7}` }}>
              {video.title}
            </h3>
            <div sx={{ fontWeight: 'bold' }}>
              <p
                sx={{
                  p: 0,
                  m: 0,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '.75rem',
                }}
              >
                <FaRegClock />
                <span sx={{ pl: '0.25rem' }}>
                  {Math.ceil(parseInt(video.total_duration) / 60)} mins
                </span>
              </p>
              <a href={video.url} target="_blank" sx={{ fontSize: '.75rem' }}>
                <FaShareSquare />{' '}
                <span sx={{ color: (theme) => `${theme.colors.textLinkPrimary}` }}>
                  View Original Source
                </span>
              </a>
            </div>
          </div>
          <div
            sx={{
              //maxWidth: '50%',
              fontWeight: 'bold',
              my: '1rem',
              justifySelf: [null, null, null, 'end'],
            }}
          >
            <p sx={{ textAlign: 'center', mb: '0.5rem' }}>{claims.length} claims in total</p>
            <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
              {ratingsCount &&
                Object.entries(ratingsCount).map(([key, value]) => {
                  return (
                    <p
                      key={key}
                      sx={{
                        flex: ['0 0 100%', '0 0 50%'],
                        maxWidth: ['100%', '50%'],
                        m: 0,
                        p: '0.125rem 0.5rem',
                        fontSize: '0.75rem',
                        bg: `${ratingColors[key]}20`,
                        color: 'black',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <span
                        sx={{
                          bg: ratingColors[key],
                          width: '0.5rem',
                          height: '0.5rem',
                          p: 0,
                          m: 0,
                          mr: '0.5rem',
                          display: 'inline-block',
                          borderRadius: '50%',
                          minWidth: '0.5rem',
                        }}
                      />
                      {`${value} of ${key}`}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
        {video.excerpt && (
          <div
            className="summary-body"
            sx={{ display: 'flex', justifyContent: 'space-between', p: ['1rem', '1.5rem'] }}
          >
            <div sx={{ flex: '0 0 100%', maxWidth: '100%' }}>
              <p
                className="summary-description-card"
                sx={{
                  // textOverflow: 'ellipsis',
                  // overflow: 'hidden',
                  margin: 0,
                  marginTop: !preview ? '0' : '0.5rem',
                  // maxHeight: !preview ? 'calc( 0.875rem * 1.15 * 3 )' : 'auto',
                  lineHeight: '1.15',
                  fontSize: '1rem',
                }}
              >
                {video.excerpt}
              </p>
            </div>
          </div>
        )}
      </div>
      {
        // <div
        //   className="summary"
        //   sx={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     justifyContent: !preview ? 'space-between' : 'flex-start',
        //     height: '100%',
        //     maxHeight: '100%',
        //   }}
        // >
        //   {!preview && (
        //     <div className="summary-header" sx={{ mb: '0.5rem' }}>
        //       <h3 sx={{ m: 0, p: 0 }}>{video.title}</h3>
        //       <p sx={{ m: 0, mb: '0.25rem', p: 0, fontSize: '0.75rem' }}>
        //         {parseDate(video.created_at)}
        //       </p>
        //     </div>
        //   )}
        //   <div className="summary-claims">
        //     <div
        //       sx={{
        //         display: 'flex',
        //         justifyContent: 'space-between',
        //         maxWidth: '300px',
        //         fontSize: '0.75rem',
        //         mb: '0.25rem',
        //       }}
        //     >
        //       <p sx={{ p: 0, m: 0, display: 'flex', alignItems: 'baseline' }}>
        //         <FaRegClock />
        //         <span sx={{ pl: '0.25rem' }}>
        //           {Math.ceil(parseInt(video.total_duration) / 60)} mins
        //         </span>
        //       </p>
        //     </div>
        //   </div>
        //   <div sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        //     <div>
        //       <p
        //         className="summary-description"
        //         sx={{
        //           textOverflow: 'ellipsis',
        //           overflow: 'hidden',
        //           margin: 0,
        //           marginTop: !preview ? '0' : '0.5rem',
        //           // maxHeight: !preview ? 'calc( 0.875rem * 1.15 * 3 )' : 'auto',
        //           lineHeight: '1.15',
        //           fontSize: '0.875rem',
        //         }}
        //       >
        //         {video.summary}
        //       </p>
        //     </div>
        //     <div>
        //       <div>
        //         <p sx={{ p: 0, m: 0, fontWeight: 'bold' }}>
        //           {analysis.length - filteredAnalysis.length} claims in total
        //         </p>
        //       </div>
        //       <div>
        //         {ratingsCount &&
        //           Object.entries(ratingsCount).map(([key, value]) => {
        //             if (key !== 'Not a Claim') {
        //               return (
        //                 <p
        //                   key={key}
        //                   sx={{ m: 0, p: 0, fontSize: '0.75rem', color: ratingColors[key] }}
        //                 >{`${value} of ${key}`}</p>
        //               );
        //             }
        //             return;
        //           })}
        //       </div>
        //     </div>
        //   </div>
        // </div>
      }
    </>
  );
};

export default VideoSummaryCard;
