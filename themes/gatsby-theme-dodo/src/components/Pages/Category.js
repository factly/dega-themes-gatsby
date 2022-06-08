/** @jsx jsx */

import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui'
import parseEditorJsData from '@helpers/parseEditorJsData';
import PostGrid from '../PostGrid';
import Helmet from 'react-helmet';


function CategoryDetailsAll({ data }) {
    const [readMore, setReadMore] = React.useState(true);
    const [isReadMoreNeeded, setIsReadMoreNeeded] = useState(false);

    useEffect(() => {
        if (process.browser) {
            const el = document.getElementById('category-description');
            setIsReadMoreNeeded(el?.clientHeight < el?.scrollHeight);
        }
    }, []);

    const header = (item) => {
        return (
            <div
                sx={{
                    mb: (theme) => `${theme.space.spacing6}`,
                    fontSize: (theme) => `${theme.fontSizes.h6}`,
                }}
            >
                <h1
                    sx={{
                        fontSize: [(theme) => `${theme.fontSizes.h5}`, (theme) => `${theme.fontSizes.h4}`],
                        mb: (theme) => `${theme.space.spacing5}`,
                        textTransform: 'capitalize',
                        px: (theme) => theme.space.layout2,
                    }}
                >
                    {item.name}
                </h1>
                <div
                    id="category-description"
                    sx={{
                        maxHeight: (theme) => (readMore ? `calc(${theme.lineHeights.normal}em * 6 )` : '100%'),
                        overflow: 'hidden',
                        px: (theme) => `${theme.space.spacing5}`,
                    }}
                >
                    {parseEditorJsData({ content: item.description })}
                </div>
                {item.description && isReadMoreNeeded && (
                    <button
                        type="button"
                        onClick={() => setReadMore((prev) => !prev)}
                        sx={{
                            px: (theme) => `${theme.space.spacing5}`,
                            color: (theme) => `${theme.colors.textLinkPrimary}`,
                            fontSize: (theme) => `${theme.fontSizes.h6}`,
                        }}
                    >
                        {readMore ? 'Read more' : 'Read less'}
                    </button>
                )}
            </div>
        );
    };
    return (
        <>
            <Helmet>
                <title> {data.category.name} </title>
            </Helmet>
            <PostGrid
                type="category"
                posts={data.posts.nodes}
                formats={data.formats.nodes}
                item={data.category}
                header={header}
            />
        </>
    );
}

export default CategoryDetailsAll;



