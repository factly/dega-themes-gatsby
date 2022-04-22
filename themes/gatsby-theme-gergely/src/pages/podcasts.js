/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/** @jsx jsx */
import React, { useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/index';
import unviralImg from '../static/unviral.jpg';
import appleLogo from '../static/podcastBadges/apple.svg';
import spotifyLogo from '../static/podcastBadges/spotify.svg';
import googleLogo from '../static/podcastBadges/google.svg';
import amazonLogo from '../static/podcastBadges/amazon.png';

const PodcastsPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.buzzsprout.com/1663999.js?container_id=buzzsprout-large-player-1663999&player=large';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <Helmet>
        <meta name="title" content="Un-Viral" />
        <meta name="author" content="Factly" />
        <meta
          name="description"
          content="Un-Viral is a podcast from Factly where we tackle that dangerous combination of the
              two kinds of virality—misinformation about health. Tune in to discern the real from
              the fake, and remember to Un-Viral."
        />

        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta name="keywords" content="Factly, Podcast, Unviral" />

        <meta name="apple-itunes-app" content="app-id=1552026867" />
        {/* <link type="application/rss+xml" rel="alternate" title="Un-Viral" href="https://feeds.buzzsprout.com/1663999.rss"/> */}
        <link rel="apple-touch-icon" href={unviralImg} />
        <link rel="canonical" href="https://health.factly.in/podcasts" />
        <link rel="image_src" href={unviralImg} />

        <title>Un-Viral</title>
        <meta
          name="description"
          content="Un-Viral is a podcast from Factly where we tackle that dangerous combination of the two kinds of virality—misinformation about health. Tune in to discern the real from the fake, and remember to Un-Viral."
        />
        <meta property="og:site_name" content="Factly Health" />
        <meta property="og:url" content="https://health.factly.in/podcasts" />
        <meta property="og:title" content="Un-Viral" />
        <meta
          property="og:description"
          content="Un-Viral is a podcast from Factly where we tackle that dangerous combination of the two kinds of virality—misinformation about health. Tune in to discern the real from the fake, and remember to Un-Viral."
        />
        <meta property="og:type" content="website" />

        <meta property="og:image" content={unviralImg} />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@factly" />
        <meta name="twitter:title" content="Un-Viral" />
        <meta
          name="twitter:description"
          content="Un-Viral is a podcast from Factly where we tackle that dangerous combination of the two kinds of virality—misinformation about health. Tune in to discern the real from the fake, and remember to Un-Viral."
        />
        <meta name="twitter:image" content={unviralImg} />

        {/* 
  <link rel="shortcut icon" href="/favicon.ico"> */}
      </Helmet>
      <div
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          textAlign: 'center',
          px: (theme) => `${theme.space.spacing6}`,
        }}
      >
        <div
          sx={{
            display: 'grid',
            gridTemplateColumns: ['1fr', null, '1fr 1fr'],
            pt: (theme) => `${theme.space.spacing7}`,
            mb: (theme) => `${theme.space.spacing7}`,
          }}
        >
          <div>
            <img
              src={unviralImg}
              alt="Un-Viral"
              sx={{
                maxWidth: [150, 200, 250],
                maxHeight: [150, 200, 250],
                height: '100%',
                width: 'auto',
                mx: 'auto',
                boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.75)',
                borderRadius: 4,
              }}
            />
          </div>
          <div sx={{ alignSelf: 'center', mt: [(theme) => `${theme.space.spacing6}`, null, 0] }}>
            <h1
              sx={{
                textAlign: 'center',
                fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
              }}
            >
              Un-Viral
            </h1>
            <p
              sx={{
                fontSize: [(theme) => `${theme.fontSizes.h7}`, (theme) => `${theme.fontSizes.h6}`],
              }}
            >
              Un-Viral is a podcast from Factly where we tackle that dangerous combination of the
              two kinds of virality—misinformation about health. Tune in to discern the real from
              the fake, and remember to Un-Viral.
            </p>
            <div
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                mt: (theme) => `${theme.space.spacing5}`,
                a: {
                  display: 'inline-block',
                  p: (theme) => `${theme.space.spacing3}`,
                },
                img: {
                  display: 'inline-block',
                  maxHeight: 10,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                },
              }}
            >
              <a
                href="https://podcasts.apple.com/in/podcast/un-viral/id1552026867"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Apple Podcasts"
              >
                <img src={appleLogo} alt="Listen on Apple Podcasts" />
              </a>
              <a
                href="https://open.spotify.com/show/1p5LnkBABZuLV4jsd6LqWo"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Spotify Podcasts"
              >
                <img src={spotifyLogo} alt="Listen on Spotify Podcasts" />
              </a>
              <a
                href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xNjYzOTk5LnJzcw=="
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Google Podcasts"
              >
                <img src={googleLogo} alt="Listen on Google Podcasts" />
              </a>
              <a
                href="https://music.amazon.com/podcasts/dbf5062a-af36-428a-acd1-57f2d37cad2a"
                target="_blank"
                rel="noopener noreferrer"
                title="Listen on Amazon Podcasts"
              >
                <img src={amazonLogo} alt="Listen on Amazon Podcasts" />
              </a>
            </div>
          </div>
        </div>

        <div sx={{ width: '100%', my: (theme) => `${theme.space.spacing6}` }}>
          <div id="buzzsprout-large-player-1663999"></div>
        </div>
      </div>
    </Layout>
  );
};

export default PodcastsPage;
