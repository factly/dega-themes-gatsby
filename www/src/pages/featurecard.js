/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

const FeatureCard = () => {
  const ARTICLES = [

    {
      title: "Rock Solid Code",
      description:
        "We build our themes following the best gatsby coding practices. This makes them stable and also compatible with most gatsby plugins",
    },
    {
      title: "Responsive Design",
      description:
        " Responsive Design ensures that your website adapts seamlessly to different screen sizes and devices, providing a consistent and user-friendly experience across desktop, tablet, and mobile devices.",
    },
    {
      title: "Sitemaps",
      description:
        " Having XML sitemaps allows search engines to crawl and index a website sufficiently, and allowing all search engines be notified of site map by inserting it into the robots. txt file.",
    },
    {
      title: "RSS Feed",
      description:
        "RSS Feed allows visitors to subscribe to your content using RSS readers, staying updated with the latest posts and updates from your site.",
    },
    {
      title: "Amp pages",
      description:
        " Our themes include built-in support for Accelerated Mobile Pages (AMP). This means that your website will have optimized AMP versions of your web pages, resulting in faster loading times and improved performance on mobile devices.",
    },
    {
      title: "Plugin Compatibility",
      description:
        "Our themes are compatible with all your favorite plugins like MANIFEST, TRANSFORMER-SHARP, GOOGLE-ANALYTICS and many others.",
    },
    {
      title: "Competent Support",
      description:
        "Our themes are simple with detailed online documentation. However, if you need assistance we'll give support and clarify all your questions.",
    },
    {
      title: "User friendly",
      description:
        " Our theme also includes and offers support for users by providing simple and understandable documentation which helps users to know about the theme.",
    },
    {
      title: "Translation Ready",
      description:
        "Easily translate the theme into any language using any popular translation plugin like gatsby translate plugins.",
    },
  ]
  return (
    <div sx={{
      maxWidth: '1240px',
      mx: 'auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(316px, 1fr))',
      gridGap: '24px',
      px: '2rem'
    }}>
      {/* <div sx={{ fontSize: ['42px', null, '54px'], textAlign: 'center', py: '3rem', px: '1.5rem' }}>
        <p><strong>Features that are included in <span sx={{ color: '#F7475E' }}>all</span> our themes</strong></p>
      </div> */}
      {ARTICLES.map((article, i) => (
        <div sx={{
          //my: ['1.5rem', null, '3rem'],
          p: {
            my: '24px',
            fontSize: '16px',
            lineHeight: '32px',
            color: '#1b1f22'
          },
          h4: {
            fontSize: '24px'
          }
        }}>
          {/* <div sx={{ px: '1.5rem' }} >
          <div>
            <h4>
              <strong>Rock Solid Code</strong>
            </h4>
            <p>
              We build our themes following the best gatsby coding practices. This makes them stable and also compatible with most gatsby plugins.
            </p>
          </div>
          <div>
            <h4>
              <strong>Responsive Design</strong>
            </h4>
            <p>
              Responsive Design ensures that your website adapts seamlessly to different screen sizes and devices, providing a consistent and user-friendly experience across desktop, tablet, and mobile devices.
            </p>
          </div>
          <div>
            <h4>
              <strong>Sitemaps</strong>
            </h4>
            <p>
              Having XML sitemaps allows search engines to crawl and index a website sufficiently, and allowing all search engines be notified of site map by inserting it into the robots. txt file.
            </p>
          </div>
        </div>
        <div sx={{ px: '1.5rem' }}>
          <div>
            <h4>
              <strong>RSS Feed</strong>
            </h4>
            <p>
              RSS Feed allows visitors to subscribe to your content using RSS readers, staying updated with the latest posts and updates from your site.
            </p>
          </div>
          <div>
            <h4>
              <strong>Amp pages</strong>
            </h4>
            <p>
              Our themes include built-in support for Accelerated Mobile Pages (AMP). This means that your website will have optimized AMP versions of your web pages, resulting in faster loading times and improved performance on mobile devices.
            </p>
          </div>
          <div>
            <h4>
              <strong>Plugin Compatibility</strong>
            </h4>
            <p>
              Our themes are compatible with all your favorite plugins like MANIFEST, TRANSFORMER-SHARP, GOOGLE-ANALYTICS and many others.
            </p>
          </div>
        </div>
        <div sx={{ px: '1.5rem' }}>


          <div>
            <h4>
              <strong>Competent Support</strong>
            </h4>
            <p>
              Our themes are simple with detailed online documentation. However, if you need assistance we'll give support and clarify all your questions.
            </p>
          </div>
          <div>
            <h4>
              <strong>User friendly</strong>
            </h4>
            <p>
              Our theme also includes and offers support for users by providing simple and understandable documentation which helps users to know about the theme.
            </p>
          </div>
          <div>
            <h4>
              <strong>Translation Ready</strong>
            </h4>
            <p>
              Easily translate the theme into any language using any popular translation plugin like gatsby translate plugins.
            </p>
          </div>
        </div> */}
          <h2 className="text-3xl my-4">
            <strong>
              <strong>{article.title}</strong>
            </strong>
          </h2>{" "}
          <p>{article.description}</p>

        </div>
      ))}
    </div>
  )
}

export default FeatureCard
