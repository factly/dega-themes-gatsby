/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <nav sx={{
            maxWidth: '1200px',
            margin: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            my: '2rem',
            p:
            {
                color: '#000',
                '&:hover': {
                    color: 'blue',
                    textDecoration: 'underline',
                    textUnderlineOffset: '6px'
                }
            }
        }}>
            <div sx={{
                fontSize: '24px'
            }}>
                <Link to='/home'>
                    <p sx={{
                        textDecoration: 'none !important',
                        textTransform: 'uppercase',
                        fontStyle: 'italic',
                        fontWeight: 800
                    }}>
                        Dega themes
                    </p>
                </Link>
            </div>
            <div sx={{
                display: 'flex',
                gap: '1.5rem',
                fontSize: '16px',
                alignItems: 'center'
            }}>
                <Link to='/themes'>
                    <p>Themes</p>
                </Link>
                <Link to='/docs'>
                    <p>
                        Documentations</p>
                </Link>
                <Link to=''>
                    <p>Blog</p>
                </Link>
                <Link to=''>
                    <p sx={{
                        color: '#000',
                        '&:hover': {
                            color: 'blue'
                        }
                    }}>Showcase</p>
                </Link>
                <Link to=''>
                    <p>Contact</p>
                </Link>
                <Link to=''>
                    <p sx={{
                        color: 'blue !important',
                        p: '8px',
                        border: '1px solid blue'
                    }}>Get all themes</p>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar