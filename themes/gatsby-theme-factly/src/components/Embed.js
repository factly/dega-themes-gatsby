import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const Embed = ({ link, amp, caption }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData(url) {
      const resp = await axios
        .get(
          `https://iframe.ly/api/oembed?url=${url}&api_key=${
            process.env.GATSBY_IFRAMELY_KEY
          }&omit_script=1${amp ? '&amp=1' : ''}`,
        )
        .then((res) => setData(res.data))
        // eslint-disable-next-line no-console
        .catch((err) => console.error('iframely error: ', err));
      return resp;
    }
    getData(link);
  }, [amp, link]);

  return (
    data && (
      <>
        <div dangerouslySetInnerHTML={{ __html: data.html }} /> {caption && <p>{caption}</p>}
      </>
    )
  );
};

Embed.propTypes = {
  link: PropTypes.string,
  amp: PropTypes.bool,
  caption: PropTypes.string,
};

export default Embed;
