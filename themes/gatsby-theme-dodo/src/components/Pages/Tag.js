/** @jsx jsx */
import React, { useState, useEffect } from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseEditorJsData from '@helpers/parseEditorJsData';
import PostGrid from '../PostGrid';
import Helmet from 'react-helmet';

function TagDetailsAll({ data }) {
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
            </div>
        );
    };
    return (
        <>
            <Helmet>
                <title> {data.tag.name} </title>
            </Helmet>
            <PostGrid
                type="tag"
                posts={data.posts.nodes}
                formats={data.formats.nodes}
                item={data.tag}
                header={header}
            />
        </>
    );
}

export default TagDetailsAll;

