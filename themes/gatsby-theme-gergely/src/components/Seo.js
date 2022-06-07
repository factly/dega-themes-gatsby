import React from 'react';
import { Helmet } from 'react-helmet';
/**
 * TODO: Add profile - Namespace URI: https://ogp.me/ns/profile#
 * ? profile:first_name - string - A name normally given to an individual by a parent or self-chosen.
 * ? profile:last_name - string - A name inherited from a family or marriage and by which the individual is commonly known.
 * ? profile:username - string - A short unique string to identify them.
 * ? profile:gender - enum(male, female) - Their gender.

 * TODO Add article - Namespace URI: https://ogp.me/ns/article#
  * ?  article:published_time - datetime - When the article was first published.
  * ?  article:modified_time - datetime - When the article was last changed.
  * ?  article:expiration_time - datetime - When the article is out of date after.
  * ?  article:author - profile array - Writers of the article.
  * ?  article:section - string - A high-level section name. E.g. Technology
  * ?  article:tag - string array - Tag words associated with this article.

 */
const Seo = ({
    children,
    title = 'Factly',
    description,
    image,
    canonical,
    icon,
    type,
    fbAppId,
    fbPages,
}) => (
    <Helmet
        title={title}
        meta={[
            { property: 'og:title', content: title },
            {
                name: 'description',
                content: description || title,
            },
            canonical && { property: 'og:url', content: canonical },
            image && {
                property: 'og:image',
                content: image,
            },
            {
                property: 'og:description',
                content: description || title,
            },
            type && {
                property: 'og:type',
                content: type,
            },
            fbAppId && {
                property: 'fb:app_id',
                content: fbAppId,
            },
            fbPages && {
                property: 'fb:pages',
                content: fbPages,
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