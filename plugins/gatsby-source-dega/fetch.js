const nodeFetch = require(`isomorphic-fetch`);

// this is passed to the Apollo Link
// https://www.apollographql.com/docs/link/links/http/#fetch-polyfill

exports.fetchWrapper = async (uri, options) => {
  const response = await nodeFetch(uri, options);

  if (response.status >= 400) {
    throw new Error(`Source DEGA API: HTTP error ${response.status} ${response.statusText}`);
  }

  return response;
};
