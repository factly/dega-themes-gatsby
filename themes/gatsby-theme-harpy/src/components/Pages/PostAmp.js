/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { Helmet } from 'react-helmet';
import { jsx } from 'theme-ui';
import parseEditorJsData from '@helpers/parseEditorJsData';
import LayoutAmp from '@components/LayoutAmp';

const PostDetails = ({ data }) => {
    const { degaPost } = data;
    // console.log({ data, degaPost });
    return (
        <LayoutAmp>
            <Helmet>
                <html lang="en" amp />
                <title>{degaPost.title}</title>
                {/* <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-0.1.js"></script>
        <script async custom-element="amp-facebook" src="https://cdn.ampproject.org/v0/amp-facebook-0.1.js"></script>
        <script async custom-element="amp-instagram" src="https://cdn.ampproject.org/v0/amp-instagram-0.1.js"></script>
        <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"></script> */}
                {/* <script async custom-element="amp-pinterest" src="https://cdn.ampproject.org/v0/amp-pinterest-0.1.js"></script> */}
            </Helmet>
            <article>
                <h1 className="amp-title">
                    <strong>{degaPost.title}</strong>
                </h1>
                {degaPost.users.map((user, i, arr) => (
                    <div key={i}>
                        By <a href={`/author/${user.id}`}>{`${user.first_name} ${user.last_name}`}</a>
                        {arr.length - i > 1 && ','}
                    </div>
                ))}
                <div>
                    {degaPost.excerpt && (
                        <>
                            <strong>Excerpt</strong>
                            <p>{degaPost.excerpt}</p>
                        </>
                    )}
                    <div className="parsed">
                        {parseEditorJsData({ content: degaPost.description, scripts: true, amp: true })}
                    </div>
                </div>
            </article>
        </LayoutAmp>
    );
};

export default PostDetails;