module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`;
  const siteUrl = themeOptions.siteUrl || `https://localhost:9002`;

  const formatString = themeOptions.formatString || `DD.MM.YYYY`;

  return {
    ...themeOptions,
    basePath,
    formatString,
    siteUrl,
  };
};
