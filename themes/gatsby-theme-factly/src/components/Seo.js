import React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({
  children,
  title = 'Factly',
  description = '',
  image,
  canonical,
  icon,
  type,
  fbAppId,
}) => (
  <Helmet
    title={title}
    meta={[
      { property: 'og:title', content: title },
      description && {
        name: 'description',
        content: { description },
      },
      canonical && { property: 'og:url', content: canonical },
      image && {
        property: 'og:image',
        content: image,
      },
      description && {
        property: 'og:description',
        content: description,
      },
      type && {
        property: 'og:type',
        content: type,
      },
      fbAppId && {
        property: 'fb:app_id',
        content: fbAppId,
      },
    ].filter(Boolean)}
  >
    {/* amp && <link
          rel="amphtml"
          href={typeof window !== 'undefined' ? window.location.href.concat('amp') : ''}
        /> */}
    {icon && <link rel="icon" href={icon} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <html lang="en" />
    {children}
  </Helmet>
);

export default Seo;
