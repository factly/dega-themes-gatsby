/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import StoryCard from '../UI/StoryCard';
import Seo from '@components/Seo';
import { Link } from 'gatsby';

const Homepage = ({ data }) => {
  const { space, categories, factchecks, posts } = data;

  // TODo: Add pagination and featured categories

  return (
    <Layout>
      <Seo title={space.name} />
      <section sx={{ maxWidth: '1248px', mx: 'auto', }} className='container'>
        <div sx={{ padding: '2rem', bg: '#7450f7', display: 'flex', flexWrap: 'wrap', justifyContent: ['center', null, null, null, 'space-between'], mb: '2rem', gap: ['3rem', null, 'none'] }}>
          <div sx={{ maxWidth: '592px', textAlign: ['center', null, null, 'start'] }}>
            <h2 sx={{ color: '#fff' }}>Join the community!</h2>
            <p sx={{ my: '1.25rem', color: '#fff' }}>Petal is a modern, clean and dashboard style Premium Dega CMS Theme. Build a community around your content or create your own platform based on membership</p>
            <Link href='#' sx={{ bg: '#e6e6e6', color: '#1a1a1a', borderRadius: '3rem', px: '1.5rem', py: '0.75rem', fontSize: '16px', borderColor: '#e6e6e6' }}>
              Learn More
            </Link>
          </div>
          <div sx={{ display: ['flex', null, 'grid'], flexWrap: ['wrap', null, 'none'], gridTemplateColumns: 'repeat(2,1fr)', gridGap: '1rem', justifyContent: 'center' }}>
            <div sx={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', py: '1rem', px: '2rem', borderRadius: '2px', width: '176px' }}>
              <span sx={{ fontSize: '2rem', }}>4</span>
              <span sx={{ fontSize: '0.9rem' }}>Premium posts</span>
            </div>
            <div sx={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', py: '1rem', px: '2rem', borderRadius: '2px', width: '176px' }}>
              <span sx={{ fontSize: '2rem' }}>20</span>
              <span sx={{ fontSize: '0.9rem' }}>Total posts</span>
            </div>
            <div sx={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', py: '1rem', px: '2rem', borderRadius: '2px', width: '176px' }}>
              <span sx={{ fontSize: '2rem' }}>4</span>
              <span sx={{ fontSize: '0.9rem' }}>Prime members</span>
            </div>
            <div sx={{ bg: 'rgba(255, 255, 255, 0.2)', color: 'white', display: 'flex', flexDirection: 'column', textAlign: 'center', py: '1rem', px: '2rem', borderRadius: '2px', width: '176px' }}>
              <span sx={{ fontSize: '2rem' }}>200+</span>
              <span sx={{ fontSize: '0.9rem' }}>Total members</span>
            </div>
          </div>
        </div>
        <div>
          <div className="grid post-feed js-post-feed">
            {posts.nodes.slice(0, 24).map((post) => (
              <StoryCard post={post} />
            ))}{' '}
          </div>
          <hr />
        </div>
      </section>
    </Layout>
  );
};

export default Homepage;
