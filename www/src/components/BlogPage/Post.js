/** @jsx jsx */
import { Link } from 'gatsby'
import React from 'react'
import { jsx } from 'theme-ui'


const Post = ({ data }) => {
  const { image, title, description, link } = data
  return (
    <div>
      <div sx={{ display: 'flex' }}>
        <div sx={{ display: 'flex', flexDirection: 'column' }}>
          <div>
            <img src={image} alt="" />
          </div>
          <h4 sx={{ mt: '20px', color: ' #667085', variant: 'text.sm', }}>Sep 12, 22</h4>
          <div>
            <div sx={{
              p: {
                FontFamily: 'Inter',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '28px',
                color: '#667085'
              }
            }}>
              <h2 sx={{
                fontFamily: 'Montserrat',
                fontWeight: '600',
                fontSize: '26px',
                lineHeight: '28px',
                color: '#1E1E1E',
                mt: '16px'
              }}>{title}</h2>
              <div sx={{
                fontFamily: 'Inter',
                fontWeight: '400',
                variant: 'text.sm',
                color: '#667085',
                mt: '16px',
              }} dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div sx={{ mt: '16px' }}>
              <Link to={link} sx={{
                px: '20px', py: '10px', cursor: 'pointer', bg: '#F6F0F0', color: '#CE212B', fontFamily: 'Inter',
                fontWeight: '500',
                variant: 'text.sm',
                borderRadius: '4px'
              }}>Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post