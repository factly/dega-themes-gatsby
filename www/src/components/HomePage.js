/** @jsx jsx */
import { Link } from 'gatsby';
import React from 'react';
import { jsx } from 'theme-ui';


const HomePage = () => {
  return (
    <>
      <div sx={{
        maxWidth: '1200px',
        margin: 'auto'
      }}>
        <div sx={{
          fontSize: '32px',
          mb: '1rem'
        }}>Choose a gatsby theme you love
        </div>

        <div sx={{
          display: 'flex',
          gap: '2rem',

        }}>

          <div sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            bg: '#fafafa'
          }}>
            <Link to='Themes/tulip'>
              <img src="https://d33wubrfki0l68.cloudfront.net/02705c33188cd95a1e4f0ce7ac594e6c1cf42a99/962e6/images/themes/tripoli/preview/preview.png" alt="/" />
              <h2 sx={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                mb: '2rem',
                color: '#000'
              }}>Tulip</h2>
            </Link>
          </div>
          <div sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            bg: '#fafafa'
          }}>
            <Link to='Themes/harpy'>
              <img src="https://d33wubrfki0l68.cloudfront.net/b7f4acba5ce0c01723e0afdef85bcc525ade5850/46de9/images/themes/hue/preview.png" alt="/" />
              <h2 sx={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                mb: '2rem',
                color: '#000'
              }}>Harpy</h2>
            </Link>
          </div>
        </div>

        <div sx={{
          display: 'flex',
          gap: '2rem',
          mt: '2rem'
        }}>

          <div sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            bg: '#fafafa'
          }}>
            <Link to='Themes/dodo'>
              <img src="https://d33wubrfki0l68.cloudfront.net/46f6320a5686e22f27b1150997265a75a039f326/5e33a/images/themes/melaka/preview.png" alt="/" />
              <h2 sx={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                mb: '2rem',
                color: '#000'
              }}>Dodo</h2>
            </Link>
          </div>


          <div sx={{
            flex: ['1 0 100%', null, '1 0 calc(50% - 1rem)'],
            maxWidth: ['100%', null, 'calc(50% - 1rem)'],
            bg: '#fafafa'
          }}>
            <Link to='Themes/kite'>
              <img src="https://d33wubrfki0l68.cloudfront.net/b7f4acba5ce0c01723e0afdef85bcc525ade5850/46de9/images/themes/hue/preview.png" alt="/" />

              <h2 sx={{
                fontSize: '20px',
                display: 'flex',
                justifyContent: 'center',
                mb: '2rem',
                color: '#000'
              }}>Kite</h2></Link>
          </div>

        </div>

      </div>
    </>
  )
}

export default HomePage