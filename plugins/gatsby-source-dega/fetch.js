const nodeFetch = require(`isomorphic-fetch`);

/**
 * Wrapper/Polyfill for fetch function for Apollo Client
 * @param {string} uri - uri of the api
 * @param {Object} options - options for nodeFetch
 * @returns {Object}
 */
exports.fetchWrapper = async (uri, options) => {
  const response = await nodeFetch(uri, options);

  if (response.status >= 400) {
    throw new Error(`Source DEGA API: HTTP error ${response.status} ${response.statusText}`);
  }

  return response;
};
