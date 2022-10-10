/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import React from 'react'

const Documentation = () => {
  return (
    <>
      <div sx={{
        maxWidth: '1200px',
        margin: 'auto',
      }}>
        <div>
          <h1 sx={{
            fontSize: '32px',
            fontWeight: '600',
            mb: '1.5rem'
          }}>Documentations</h1>
        </div>
        <div sx={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          textAlign: 'center',
          a: {
            color: '#000', background: '#FAFAFA', display: 'block', p: '32px', fontSize: '20px', fontWeight: '500', '&:hover': {
              color: 'blue',
            }
          }
        }}>
          <div sx={{
            width: '32%',

          }}><h2><a href='/DodoPage'>Dodo</a></h2> </div>
          <div sx={{
            width: '32%',

          }}><h2><a href='/HarpyPage'>Harpy</a></h2> </div>
          <div sx={{
            width: '32%',

          }}><h2><a href='/KitePage'>Kite</a></h2> </div>
          <div sx={{
            width: '32%',

          }}><h2><a href='/TulipPage'>Tulip</a></h2> </div>
        </div>

      </div>
      <hr />
    </>
  )
}

export default Documentation