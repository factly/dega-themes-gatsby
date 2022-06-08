/** @jsx jsx */

import React from 'react';
import StoryCard from '../UI/StoryCard';
import { jsx } from 'theme-ui';
import Helmet from 'react-helmet';

function FormatPage({ data }) {
    const filteredPosts = data.posts.nodes.filter((post) => post.published_date !== null);
    return (
        <>
            <Helmet>
                <title> {filteredPosts[0]?.format.name} </title>
            </Helmet>
            <div sx={{ mx: 'auto', maxWidth: 1560 }}>
                <h1
                    sx={{
                        mt: (theme) => `${theme.space.layout4}`,
                        mb: (theme) => `${theme.space.layout2}`,
                        px: (theme) => theme.space.layout2,
                        fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
                    }}
                >
                    {filteredPosts[0]?.format.name}
                </h1>
                <div
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        pb: (theme) => `${theme.space.spacing6}`,
                        pt: [null, null, null, (theme) => `${theme.space.spacing7}`],
                    }}
                >
                    {filteredPosts.length > 0 ? (
                        <div
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                                px: [null, null, (theme) => `${theme.space.spacing6}`],
                                mt: (theme) => `${theme.space.spacing7}`,
                                gridGap: (theme) => `${theme.space.spacing7}`,
                            }}
                        >
                            {filteredPosts.map((item, index) => (
                                <StoryCard
                                    key={index}
                                    cardStyle="tulip"
                                    storyData={item}
                                    excerpt={item.format.slug !== 'fact-check'}
                                />
                            ))}
                        </div>
                    ) : (
                        <h2 sx={{ textAlign: 'center' }}>No posts found</h2>
                    )}
                </div>
            </div>
        </>
    );
}
export default FormatPage;

