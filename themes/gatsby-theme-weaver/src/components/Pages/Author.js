/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import FormatPageLayout from '@components/FormatPageLayout';
import Seo from '@components/Seo';

function UserDetailsFormat({ data }) {
  const { user, posts } = data;

  const name = user.display_name ? `${user.display_name}` : `${user.first_name} ${user.last_name}`;

  return (
    <>
      <Seo title={name} />
      <FormatPageLayout type="author" posts={posts.nodes} item={{ ...user, name }} />;
    </>
  );
}

export default UserDetailsFormat;
