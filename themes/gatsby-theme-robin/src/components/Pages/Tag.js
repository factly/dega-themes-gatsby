/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';

const TagDetailsAll = ({ data }) => {
    const { posts, tag, formats } = data;
    /**
     * TODO: add description under category name
     */
    return (
        <FormatPageLayout
            type="tag"
            posts={posts.nodes}
            formats={formats.nodes}
            item={tag}
        />
    );
};

export default TagDetailsAll;