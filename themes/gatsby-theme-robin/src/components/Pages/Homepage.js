/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import Homepage from '@components/Homepage';
import Seo from '@components/Seo';

const Indexpage = ({ data, pageContext }) => {
    const { homepage } = pageContext;

    const getHomePageComponent = (homepageType, content) => {
        const metaData = data.allDegaCategory.nodes.filter((i) => i.meta_fields !== null);

        // if (homepageType === 1) return <Homepage data={content} />;

        return <Homepage data={content} />;
    };

    return <Layout>{getHomePageComponent(homepage, data)}</Layout>;
};

export default Indexpage;

