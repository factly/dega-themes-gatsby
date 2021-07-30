/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsx jsx */
import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { graphql, Link } from 'gatsby';
import ReactPlayer from 'react-player';
import Layout from '../components/Layout';
import HorizontalTimelineBar from '../components/horizontalTimelineBar';
import VideoSummaryCard from '../components/videoSummaryCard';
import parseDate from '../utils/parseDate';
import Slider from '../components/Slider';
import parseEditorJsData from '../utils/parseEditorJsData';
import { Helmet } from 'react-helmet';

const PreviewPage = ({ data }) => {
  const colors = {
    1: '#108040',
    2: '#A5C239',
    3: '#ECA124',
    4: '#749990',
    5: '#E82728',
    6: '#f9f9fa',
  };
  const { video, claims } = data.vidCheck;

  const [currentStartTime, setCurrentStartTime] = React.useState(null);
  const player = React.useRef(null);
  const [playing, setPlaying] = React.useState(false);
  const [played, setPlayed] = React.useState(0);
  const [currentFormdata, setCurrentFormData] = React.useState({});
  const [currentClaimIndex, setCurrentClaimIndex] = React.useState(0);
  const [totalDuration, setTotalDuration] = React.useState(0);
  const [loopDetails, setLoopDetails] = React.useState({
    loopEnabled: false,
    startFraction: 0,
    endFraction: 1,
  });
  const updateFormState = (data) => {
    setPlayed(data.end_time_fraction);
    player.current.seekTo(data.start_time, 'seconds');
    setCurrentFormData(data);
    const claimIndex = claims.findIndex((item) => item.id === data.id);
    setCurrentClaimIndex(claimIndex);
  };
  const factCheckReview = claims;
  const currentClaim = claims[currentClaimIndex];
  const handleProgress = () => {
    // console.log(player.current);
    const currentPlayedTime = player.current.getCurrentTime();
    const currentPlayed = Math.currentPlayedTime / totalDuration;
    if (
      loopDetails.loopEnabled &&
      (currentPlayed < loopDetails.startFraction || currentPlayed > loopDetails.endFraction)
    ) {
      player.current.seekTo(loopDetails.startFraction, 'fraction');
      setPlaying(false);
    }
    let index;
    let currentFormStartTime;
    for (index = 0; index < factCheckReview.length; ++index) {
      if (currentPlayed < factCheckReview[index].end_time_fraction) {
        currentFormStartTime = index > 0 ? factCheckReview[index - 1].end_time : '00:00';
        break;
      }
    }
    if (typeof currentFormStartTime == 'undefined') {
      if (factCheckReview.length === 0) {
        currentFormStartTime = '00:00';
      } else {
        currentFormStartTime = factCheckReview[factCheckReview.length - 1].end_time;
      }
    }
    setCurrentStartTime(currentFormStartTime);
    setPlayed(currentPlayed);
  };
  useEffect(() => {
    updateFormState(claims[currentClaimIndex]);
  }, [currentClaimIndex]);
  return (
    <Layout>
      <Helmet>
        <title>{video.title}</title>
      </Helmet>
      {/* <div sx={{ mb: '2rem' }}>
        <Link
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': { textDecoration: 'none', color: '#ea364a' },
          }}
        >
          <FaArrowLeft sx={{ mx: '0.5rem', fontSize: '0.875em' }} />
          Back to FactCheck Videos
        </Link>
      </div> */}

      <div>
        <div sx={{ m: '1.5rem 1rem' }}>
          <h2
            sx={{
              mt: '.5rem',
              fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
            }}
          >
            {video.title}
          </h2>
          <p sx={{ fontSize: (theme) => `${theme.fontSizes.h8}` }}>{parseDate(video.created_at)}</p>
        </div>

        <div
          className="video-summary"
          sx={{
            // p: '1rem',
            // ml: '1rem',
            m: '2rem 1rem',
            borderRadius: '0.25rem',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
            background: 'white',
            maxWidth: ['100%'],
            '& .summary-description': {
              fontSize: '1.125rem',
            },
          }}
        >
          <VideoSummaryCard
            video={video}
            claims={claims}
            ratings={data.allVidCheckRating.nodes}
            preview
          />
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: ['center', null, 'space-between'],
            flexWrap: ['wrap', null, 'nowrap'],
            m: '0 1rem',
          }}
        >
          <div
            className="main-container"
            sx={{
              display: 'flex',
              // flex: '0 0 50%',
              maxWidth: ['100%', null, '50%'],
              mx: '1%',
              width: '100%',
              flexDirection: ['column', null, null, 'row'],
              justifyContent: 'center',
            }}
          >
            <div
              className="video-card"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                minWidth: '350px',
                mb: '2rem',
              }}
            >
              <div className="video-player">
                <ReactPlayer
                  className="react-player"
                  url={video.url}
                  playing={playing}
                  controls={true}
                  ref={player}
                  volume={0}
                  progressInterval={1000}
                  onProgress={handleProgress}
                  onDuration={setTotalDuration}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="interactive-timeline" sx={{ mt: '2rem' }}>
                <HorizontalTimelineBar
                  claims={claims}
                  total={video.total_duration}
                  currentIndex={currentClaimIndex}
                  setCurrentIndex={setCurrentClaimIndex}
                  //   updateFormState={updateFormState}
                />
              </div>
            </div>
          </div>
          <div
            sx={{
              //flex: '0 0 48%',
              maxWidth: ['100%', null, '48%'],
              mx: '1%',
            }}
          >
            <Slider
              claims={claims}
              currentIndex={currentClaimIndex}
              setCurrentIndex={setCurrentClaimIndex}
              currentClaim={currentClaim}
              //  updateFormState={updateFormState}
            />
          </div>
        </div>
        <div sx={{ display: 'flex' }}>
          <div sx={{ flex: '0 0 48%', maxWidth: '50%' }}>
            {/* <Slider
              claims={analysis}
              currentIndex={currentClaimIndex}
              setCurrentIndex={setCurrentClaimIndex}
              updateFormState={updateFormState}
            /> */}
          </div>
        </div>

        {/* <div
          className="main-container"
          sx={{
            display: 'flex',
            flexDirection: ['column', null, null, 'row'],
            justifyContent: 'center',
          }}
        >
          <div
            className="video-card"
            sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: '350px', mb: 8 }}
          >
            <div className="video-player">
              <ReactPlayer
                className="react-player"
                url={video.url}
                playing={playing}
                controls={true}
                ref={player}
                volume={0}
                onProgress={handleProgress}
                onDuration={setTotalDuration}
                width="100%"
                height="100%"
              />
            </div>
            <div className="interactive-timeline" sx={{ mt: '2rem' }}>
              <HorizontalTimelineBar
                claims={analysis}
                total={video.total_duration}
                currentIndex={currentClaimIndex}
                setCurrentIndex={setCurrentClaimIndex}
                updateFormState={updateFormState}
              />
            </div>
          </div>
        </div>
   */}
        {/* <section className="slider-test">
          <div
            style={{
              alignItems: 'center',
              justifyContent: 'space-around',
              width: '70%',
              height: '450px',
              marginTop: '20px',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: '#e9ecec',
              marginTop: -120,
            }}
          >
            <div style={{ height: 60 }}></div>
            {currentClaimIndex > -1 && (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{ padding: 20 }}
                  onClick={() =>
                    currentClaimIndex === 0
                      ? null
                      : updateFormState(factCheckReview[currentClaimIndex - 1])
                  }
                >
                  <FaArrowLeft
                    style={{
                      fontSize: 30,
                      color: currentClaimIndex === 0 ? '#ddd' : '#222',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0px 0px 9px 1px grey',
                    borderStyle: 'solid',
                    borderWidth: '2px',
                    borderRadius: '6px',
                    borderColor: colors[currentClaim.rating.id],
                    backgroundColor: '#fff',
                    padding: '20px',
                    minHeight: '240px',
                    maxHeight: '320px',
                    overflow: 'auto',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ fontSize: '12px', textTransform: 'uppercase' }}>
                      {currentClaimIndex + 1} of {analysis.length} claims
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        textTransform: 'uppercase',
                        color: colors[currentClaim.rating.id],
                      }}
                    >
                      {currentClaim.rating.name}
                    </div>
                  </div>
                  <div style={{ height: '40%', margin: 10, overflowX: 'auto' }}>
                    <h4>Claim:</h4>
                    {currentClaim.claim}
                  </div>
                  <br />
                  <div style={{ height: '40%', margin: 10, overflowX: 'auto' }}>
                    <h4>Fact:</h4>
                    <div
                      style={{
                        color: colors[currentClaim.rating.id],
                      }}
                    >
                      {currentClaim.fact}
                    </div>
                  </div>
                </div>
                <div
                  style={{ padding: 20 }}
                  onClick={() =>
                    currentClaimIndex === analysis.length - 1
                      ? null
                      : updateFormState(factCheckReview[currentClaimIndex + 1])
                  }
                >
                  <FaArrowRight
                    style={{
                      fontSize: 30,
                      color: currentClaimIndex === analysis.length - 1 ? '#ddd' : '#222',
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </section> */}
        {claims[currentClaimIndex].description && (
          <section className="description" sx={{ mt: '2rem' }}>
            <div />
            <div
              className="parsed"
              sx={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '60px',
              }}
            >
              {parseEditorJsData({ content: claims[currentClaimIndex].description, scripts: true })}
            </div>
          </section>
        )}
        <section className="sources" sx={{ mt: '2rem' }}>
          {claims[currentClaimIndex].review_sources ? (
            <div
              style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '60px',
                backgroundColor: '#e9ecec',
                padding: '3rem',
              }}
            >
              <h3 sx={{ mb: '1rem', fontSize: (theme) => theme.fontSizes.h5 }}>Review sources</h3>
              <ul sx={{ pl: '1.25rem' }}>
                {claims[currentClaimIndex].review_sources.map((review) => (
                  <li>
                    {' '}
                    <p>
                      <strong>{review.description}: </strong>
                      <a
                        href={review.url}
                        sx={{
                          color: (theme) => theme.colors.textLinkPrimary,
                          '&:hover': {
                            color: (theme) => theme.colors.textLinkHoverPrimary,
                          },
                        }}
                      >
                        {review.url}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {claims[currentClaimIndex].claim_sources ? (
            <div
              style={{
                width: '70%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '60px',
                backgroundColor: '#e9ecec',
                padding: '3rem',
              }}
            >
              <h3 sx={{ mb: '1rem', fontSize: (theme) => theme.fontSizes.h5 }}>Claim sources</h3>
              <ul sx={{ pl: '1.25rem' }}>
                {claims[currentClaimIndex].claim_sources.map((claim) => (
                  <li>
                    <p>
                      <strong>{claim.description}: </strong>
                      <a
                        href={claim.url}
                        sx={{
                          color: (theme) => theme.colors.textLinkPrimary,
                          '&:hover': {
                            color: (theme) => theme.colors.textLinkHoverPrimary,
                          },
                        }}
                      >
                        {claim.url}
                      </a>
                    </p>
                  </li>
                ))}{' '}
              </ul>
            </div>
          ) : null}
        </section>
      </div>
    </Layout>
  );
};

export default PreviewPage;
export const query = graphql`
  query ($id: String!) {
    vidCheck(video: { id: { regex: $id } }) {
      video {
        created_at
        id
        space_id
        status
        summary
        title
        total_duration
        updated_at
        url
        video_type
      }
      claims {
        checked_date
        claim
        claim_date
        claimant_id
        created_at
        description
        end_time
        fact
        id
        is_claim
        rating_id
        rating {
          id
          colour
          background_colour
          text_colour
          created_at
          name
          deleted_at
          description
          numeric_value
          slug
          space_id
          updated_at
        }
        review_sources
        start_time
        updated_at
        video_id
        claimant {
          created_at
          id
          name
          slug
          space_id
          tag_line
          updated_at
        }
      }
    }
    allVidCheckRating {
      nodes {
        background_colour
        name
        text_colour
      }
    }
  }
`;
