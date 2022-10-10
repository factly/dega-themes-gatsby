/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react'
import Layout from '../../components/Layout'
import Footer from '../../components/Layout/Footer'
import Navbar from '../../components/Layout/Navbar'


const tulipPage = () => {
  return (
    <Layout>
      <div sx={{
        maxWidth: '746px',
        margin: 'auto'
      }}>
        <a sx={{
          color: '#000',
          fontSize: '14px',
          '&:hover': { color: 'blue' }
        }} href="/"> BACK TO DOCUMENTATIONS</a>
        <div sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <h1 sx={{
            fontSize: '32px',
            textDecoration: 'underline',
            '&:hover': { color: 'blue' }
          }}>Tulip</h1>
          <span> - </span>
          <a sx={{ color: '#525252', fontSize: '20px', fontWeight: 400 }} href="">Documentation</a>
        </div>
        <div sx={{
          background: '#FAFAFA', display: 'flex', marginleft: '8px', mt: '16px', padding: '16px'
        }}> <p sx={{
          marginRight: '8px'
        }}> Theme version:</p><code sx={{
          border: '1px solid #D2D2D7', marginRight: '8px', px: '6px'
        }}> 1.1.9 - 4 may 2022 </code> <p> Changelog</p></div>
        <div sx={{
          background: '#E7F5FB',
          marginTop: '32px',
          padding: '32px',
          borderRadius: '2px',
          a: {
            color: '#000', textDecoration: 'underline',
            '&:hover': { color: 'blue' }, textUnderlineOffset: '4px'
          }
        }}>
          <h1 sx={{
            mb: '8px',
            pb: '16px'
          }}>Theme Editing & Tools</h1>
          <hr />
          <p sx={{
            mt: '24px',
          }}>Edit the theme files mentioned here with a code editor. I recommend <a href='/'>Visual Studio Code,</a> Sublime Text, or Atom. Don’t use TextEdit on Mac.</p>
          <p sx={{
            mt: '24px'
          }}>Once you finish, <a href='/'>zip</a> the theme files, and  <a href='/'>upload</a> the final zip file to your Ghost website.</p>
          <p sx={{
            mt: '24px'
          }}>If editing the <code sx={{
            background: '#FFFFFF', border: '1px solid', padding: '4px', borderRadius: '6px'
          }}>routes.yaml</code> file, make sure to upload it after every change you make.</p>
          <hr sx={{
            mt: '2rem'
          }} />
        </div>
        <h1 sx={{
          mt: '32px',
          pb: '16px',
        }}>
          <strong> TABLE OF CONTENTS</strong>
        </h1>
        <hr />
        <div sx={{
          ml: '20px',
          my: '16px'
        }}>
          <ul sx={{
            a: { color: '#000', textDecoration: 'underline', '&:hover': { color: 'blue' } },
            li: { mb: '8px' },
          }}>
            <li><a href="#Theme_Installation"> Theme Installation</a></li>
            <li><a href="#Upload_yaml_Files">Upload the routes.yaml File</a></li>
            <li><a href="#Homepage">Homepage</a>
              <ul sx={{
                ml: '20px',
                mt: '8px'
              }}>
                <li><a href="#Hero_section">Hero Section</a></li>
                <li><a href="#Tags_section">Tags Section</a></li>
                <li><a href="#Editor_section">Editor's Picks Section</a></li>
              </ul>
            </li>
            <li><a href="#">Colors</a>
              <ul sx={{
                ml: '20px',
                mt: '8px'
              }}>
                <li><a href="#">Accent Color</a></li>
                <li><a href="#">Dark Mode</a></li>
                <li><a href="#">Chaging Colors With CSS Variables</a></li>
              </ul>
            </li>
            <li><a href="#">Pages</a>
              <ul sx={{
                ml: '20px',
                mt: '8px'
              }}>
                <li><a href="#">Tags Page</a></li>
                <li><a href="#">Authors Page</a></li>
                <li><a href="#">Newsletters Page</a></li>
              </ul>
            </li>
            <li> <a href="#"> Post Featured Image Size</a></li>
            <li> <a href="#">Navigation</a>
              <ul sx={{
                ml: '20px',
                mt: '8px'
              }}><li> <a href="#">Secondary Navigation / Footer</a></li></ul>
            </li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Comments</a></li>
            <li><a href="#">Footer Social Media Links</a></li>
            <li><a href="#">Languages</a>
              <ul sx={{
                ml: '20px',
                mt: '8px'
              }}>
                <li><a href="#">Theme Translation</a></li>
                <li> <a href="#">Add a New Language Translation</a> </li>
                <li><a href="#">Edit Translation</a></li>
                <li><a href="#">Portal Text & Translation</a></li>
                <li><a href="#">RTL</a></li>
              </ul>
            </li>
            <li><a href="#">Posts Per Page</a></li>
            <li><a href="#">Typography Drop Caps</a></li>
            <li><a href="#">Changing Theme Typeface</a></li>
            <li><a href="#">Loading Custom Typeface</a></li>
            <li><a href="#">RSS Feed URL</a></li>
            <li><a href="#">Google Analytics</a></li>
            <li><a href="#">Update Favicon</a></li>
            <li><a href="#">Footnotes</a></li>
            <li><a href="#">Theme Deploy With GITHUB Actions</a></li>
            <li><a href="#">Code Injection</a></li>
            <li><a href="#">Customize Logo Size</a></li>
            <li><a href="#">Footer Copyright</a></li>
            <li><a href="#">AMP</a></li>
            <li><a href="#">Remove Author Name</a></li>
            <li><a href="#">Remove Post Date</a></li>
            <li><a href="#">Remove Reading Time</a></li>
            <li><a href="#">Theme Deployment</a>
              <ul sx={{
                ml: '20px',
                mt: '8px'
              }}>
                <li>My Current Setup</li>
                <li>Zip Theme Files</li>
              </ul>
            </li>
            <li><a href="#">Theme Update</a></li>
          </ul>
        </div>
        <hr />
        <div id='Theme_Installation'>
          <h2 sx={{
            fontSize: '24px',
            fontWeight: '600',
            mt: '32px'
          }}>Theme Installation</h2>
          <p sx={{ mt: '16px' }}>The first step is to unzip the downloaded package by double-clicking it on Mac or by right-clicking and selecting “Extract All” in Windows.

          </p>
          <p sx={{ mt: '32px' }}>Inside the new folder tripoli, you will find the tripoli.zip theme file and an online documentation file.</p>
          <p sx={{ mt: '32px' }}>Follow these steps to upload the theme to your website:</p>
          <ol sx={{ mt: '32px', ml: '18px', li: { mt: '8px' } }}>
            <li>Log in to your Ghost website admin (example.com/ghost).</li>
            <li>Click the  <strong> settings icon</strong> ( ) at the bottom of the left-hand side.</li>
            <li>Go to <strong> Design {'>'} Change theme</strong>.</li>
            <li>Click <strong>Upload theme</strong> and select the tripoli.zip theme file.</li>
            <li>Once uploaded, click <strong>Activate now</strong> to activate Tripoli.</li>
          </ol>
        </div>
        <hr sx={{ mt: '40px' }} />
        <div id='Upload_yaml_Files'>
          <h2 sx={{
            fontSize: '24px',
            fontWeight: '600',
            mt: '32px'
          }}>Upload the routes.yaml File </h2>
          <p sx={{
            mt: '16px'
          }}>The routes.yaml is required for the following reasons:</p>
          <ul sx={{
            mt: '32px',
            ml: '14px',
            textDecoration: 'underline'
          }}>
            <li>Latest page</li>
            <li>Setup URL</li>
          </ul>
          <p sx={{
            mt: '32px'
          }}>To upload the file, follow these steps:</p>
          <ol sx={{
            mt: '32px',
            ml: '18px',
            li: { mt: '8px' }
          }}>
            <li>Unzip the tripoli.zip theme file.</li>
            <li>In your Ghost admin, click the settings icon ( ) at the bottom of the left-hand side.</li>
            <li>Go to the <strong>Labs</strong>.</li>
            <li>Scroll down to the Routes section and click the Upload routes YAML button.</li>
            <li>Select and upload the <code sx={{ border: '1px solid #D2D2D7', padding: '4px', borderRadius: '4px', background: '#FAFAFA' }}>routes.yaml</code> file inside the theme folder.</li>
          </ol>
        </div>
        <hr sx={{ mt: '40px' }} />
        <div sx={{ background: '#E7F5FB', padding: '32px', mt: '32px' }}>
          <h2 sx={{
            pb: '16px', mb: '8px', borderBottom: '1px solid #181818'
          }}>Note: upload routes.yaml after uploading the theme zip</h2>
          <p sx={{
            mt: '24px'
          }}>There will already be a default <code sx={{ border: '1px solid #D2D2D7', padding: '4px', borderRadius: '4px', background: '#FFF' }}> routes.yaml</code> file uploaded to Ghost. You need to upload your theme’s <code sx={{ border: '1px solid #D2D2D7', padding: '4px', borderRadius: '4px', background: '#FFF' }}> routes.yaml</code> to override the default.</p>
          <p sx={{
            mt: '24px'
          }}>Do this separately after uploading your theme zip file</p>
        </div>
        <div id='Homepage' sx={{
          li: { textDecoration: 'underline', '&:hover': { color: 'blue' } }
        }}>
          <h2 sx={{
            fontSize: '24px',
            fontWeight: '600',
            mt: '32px'
          }}>Homepage</h2>
          <p sx={{
            background: '#FBECEB',
            p: '16px',
            mt: '32px'
          }}>Make sure to <a sx={{ color: '#000', textDecoration: 'underline', textUnderlineOffset: '4px', '&:hover': { color: 'blue' } }} href="/">Upload the routes.yaml file</a>.</p>
          <p sx={{
            mt: '32px'
          }}>The homepage will show a list of content sections.</p>
          <ul sx={{
            mt: '32px', ml: '18px',
            li: { mt: '8px', textUnderlineOffset: '4px' }
          }}>
            <li >Hero Section</li>
            <li >Tags Section</li>
            <li >Editors Picks Section</li>
          </ul>
          <h2 id='Hero_section' sx={{ fontSize: '20px', mt: '32px' }}>Hero Section</h2>
          <p sx={{ mt: '16px' }}>The homepage hero section will include three columns—two for featured posts and one for the latest posts.</p>
          <p sx={{ mt: '32px' }}>The center and left columns will include the most recent three featured posts. To make a post as featured, you can do that from the post setting by checking the <strong>Feature this post</strong> checkbox.</p>
          <p sx={{ mt: '32px' }}>The right column will include the most recent six posts. Clicking the <strong>Latest</strong> header will take you to the Latest page, where you can see all the recent posts.</p>
          <img sx={{ maxWidth: '682px', height: '402px', mt: '32px', padding: '32px', background: '#FAFAFA' }} src="/images/Tripoli.png" alt="" />
          <hr sx={{ mt: '2rem' }} />
        </div>
        <div sx={{
          img: { mt: '32px', p: '32px', background: '#FAFAFA', maxWidth: '682px', height: '256px' }
        }}>
          <h2 id='Tags_section' sx={{
            fontSize: '20px',
            mt: '32px'
          }}>Tags Sections</h2>
          <p sx={{
            mt: '20px'
          }}>You can add many tag sections to the homepage; each section will show the recent four posts by the tag. To set this up:</p>
          <ol sx={{
            mt: '32px', ml: '18px'
          }}>
            <li>Go to the Ghost admin Settings {'>'} Design  {'>'} Site design {'>'} Homepage</li>
            <li>In the <strong>Tag slugs for home sections</strong> input, add all the Tags Slug you want to include separated by (,). No spaces between commas.</li>
          </ol>
          <img src="/images/tags1.png" alt="" />
          <p sx={{
            mt: '32px'
          }}>To get the Tag Slug, you can find it on each Tag page from the admin.</p>
          <img src="/images/tag_slug.png" alt="" />
          <p sx={{ mt: '32px' }}>You might end up with the Slugs as:</p>
          <p sx={{
            mt: '32px',
            background: '#FAFAFA',
            borderRadius: '4px',
            p: '32px'
          }}><code>politics,covid,technology,business,sport,life,history,food</code></p>
        </div>
        <div sx={{
          img: { maxWidth: '682px', padding: '32px', mt: '32px', background: '#FAFAFA' },
          li: { mt: '8px' }
        }}>
          <h2 id='Editor_section' sx={{
            fontSize: '20px',
            mt: '32px'
          }}>Editors’ Picks Section</h2>
          <p sx={{
            mt: '24px'
          }}>The Editors’ Picks section will show four posts with the hash-editors-picks tag.</p>
          <ol sx={{
            mt: '32px',
            ml: '18px'
          }}>
            <li>
              Go to your admin Tags page, and click the top right <strong>Internal tags</strong> tab.</li>
            <li>Click the <strong>New tag</strong> button.</li>
            <li>In the name field, add <strong>#editors-picks</strong></li>
            <li>Click<strong> Save</strong></li>
          </ol>
          <img sx={{ height: '256px' }} src="/images/internal_tag.png" alt="" />
          <p sx={{
            mt: '32px'
          }}>Then, select the #editors-picks from the post Tags setting for each post you want to highlight here.</p>
          <img sx={{
            height: '118px'
          }} src="/images/internal_tag_post.png" alt="" />
        </div>
      </div>
    </Layout >
  )
}

export default tulipPage