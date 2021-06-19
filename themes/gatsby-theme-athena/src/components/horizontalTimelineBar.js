/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import _ from 'underscore';

const HorizontalTimelineBar = ({
  claims,
  total,
  currentIndex,
  setCurrentIndex,
  // updateFormState,
}) => {
  // const colors = {
  //   False: '#e82728',
  //   True: '#108040',
  //   'Not a Claim': 'transparent',
  //   Misleading: '#749990',
  //   Unverified: '#eca124',
  //   'Partly True': '#A5C239',
  // };

  // TODO: Add colors from API
  //! Add colors from API
  //!
  const getWidth = (start, end, total) => {
    const timeElapsed = parseInt(end - start);
    return (timeElapsed / total) * 100;
  };
  const roundingPercentages = (array) => {
    let off =
      100 -
      _.reduce(
        array,
        function (acc, x) {
          return acc + Math.round(x);
        },
        0,
      );
    return _.chain(array)
      .sortBy(function (x) {
        return Math.round(x) - x;
      })
      .map(function (x, i) {
        return Math.round(x) + (off > i) - (i >= array.length + off);
      })
      .value();
  };
  const sortedClaims = claims.sort((a, b) => {
    return a.start_time - b.start_time;
  });
  const getStartingPercent = (start, total) => {
    // console.log({ startingPoint: `${(start / total) * 100}%` });
    return `${(start / total) * 100}%`;
  };
  const getClaimWidth = (start, end, total) => {
    //  console.log({ claimWidth: `${(parseInt(end - start) / total) * 100}%` });
    return `${(parseInt(end - start) / total) * 100}%`;
  };
  const calculated = sortedClaims.map((claim) => {
    const start = claim.start_time;
    const end = claim.end_time;
    const percent = getWidth(start, end, total);
    return percent;
  });
  const roundedPercent = roundingPercentages(calculated);
  const percentMap = sortedClaims.map((claim, i) => {
    return { claimId: claim.id, rating: claim.rating.name, percent: roundedPercent[i] };
  });
  const handleClick = (i) => {
    setCurrentIndex(i);
    //  updateFormState(claims[i]);
  };

  return (
    <div className="interactive-bar" sx={{ width: '100%' }}>
      <div
        className="bar"
        sx={{
          backgroundImage:
            'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABZJREFUeNpi2r9//38gYGAEESAAEGAAasgJOgzOKCoAAAAASUVORK5CYII=)',
          display: 'flex',
          flexWrap: 'nowrap',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
          position: 'relative',
          height: '32px',
        }}
      >
        {sortedClaims.map((claim, i) => {
          const ml = getStartingPercent(claim.start_time, total);
          const w = getClaimWidth(claim.start_time, claim.end_time, total);
          return (
            <button
              type="button"
              className="claimBar"
              key={claim.id}
              onClick={() => handleClick(i)}
              sx={{
                border: 'none',
                outline: 'none',
                py: '16px',
                position: 'absolute',
                width: w,
                ml,
                boxShadow: currentIndex === i ? `inset 0px 0px 0px 4px #002b5a` : 'none',
                background:
                  currentIndex === i
                    ? `repeating-linear-gradient( 135deg,
                        rgba(0, 0, 0, 0.2),
                        rgba(0, 0, 0, 0.2) 5px,
                        rgba(0, 0, 0, 0.3) 5px,
                        rgba(0, 0, 0, 0.3) 10px
                      ),${claim.rating.background_colour.hex}`
                    : claim.rating.background_colour.hex,
              }}
            />
          );
        })}
        {/* {Object.entries(percentMap).map(([key, value], i) => {
          return (
            <button
              type="button"
              className="claimBar"
              key={key}
              onClick={() => handleClick(i)}
              sx={{
                border: 'none',
                outline: 'none',
                py: '16px',
                width: `${value.percent}%`,
                // outline: '2px solid blue' : 'none',
                boxShadow: currentIndex === i ? `inset 0px 0px 0px 4px #002b5a` : 'none',
                background:
                  currentIndex === i
                    ? `repeating-linear-gradient( 135deg,
                        rgba(0, 0, 0, 0.2),
                        rgba(0, 0, 0, 0.2) 5px,
                        rgba(0, 0, 0, 0.3) 5px,
                        rgba(0, 0, 0, 0.3) 10px
                      ),${colors[value.rating]}`
                    : colors[value.rating],
              }}
              disabled={value.rating === 'Not a Claim'}
            />
          );
        })} */}
      </div>
    </div>
  );
};

export default HorizontalTimelineBar;
