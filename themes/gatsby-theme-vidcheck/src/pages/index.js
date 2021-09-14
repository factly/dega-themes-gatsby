/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import VideoSummary from '../components/videoSummary';

const IndexPage = ({ data }) => {
  const addDefaultSrc = (e, id) => {
    e.target.src = `https://img.youtube.com/vi/${id}/0.jpg`;
  };
  const getId = (url) => {
    const index = url.indexOf('?v=') + 3;
    return url.substring(index, url.length);
  };

  return (
    <Layout>
      <div>
        <h2 sx={{ textAlign: 'center', fontSize: '1.75rem', my: 8 }}>
          Fact Check and Video Analysis
        </h2>
        <div sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          {data.allVidCheck.nodes.map((videoItem) => {
            const { video, claims } = videoItem;
            return (
              <Link
                to={`/video/${video.id}`}
                key={video.id}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  justifyContent: 'center',
                  maxWidth: '900px',
                  width: '100%',
                  mb: '1rem',
                  '&:hover': {
                    textDecoration: 'none',
                    color: 'inherit',
                  },
                }}
              >
                <div
                  key={videoItem.video.id}
                  className="summary-card"
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    alignItems: 'flex-start',
                    width: '100%',
                    maxWidth: '900px',
                    boxShadow:
                      'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
                  }}
                >
                  <div
                    className="thumbnailContainer"
                    sx={{
                      maxWidth: '420px',
                      maxHeight: '236px',
                      width: '100%',
                      height: '100%',
                      flex: 1,
                    }}
                  >
                    <img
                      sx={{
                        width: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                      src={`https://img.youtube.com/vi/${getId(video.url)}/mqdefault.jpg`}
                      onError={(e) => addDefaultSrc(e, getId(video.url))}
                      alt="Video Thumbnail"
                    />
                  </div>
                  <div
                    sx={{
                      maxWidth: '450px',
                      p: '1rem',
                      height: '100%',
                      flex: 1,
                      maxHeight: '236px',
                    }}
                  >
                    <VideoSummary video={video} claims={claims} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  query {
    (sort: {fields: video___created_at, order: DESC}) {
      nodes {
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
    }
  }
`;
