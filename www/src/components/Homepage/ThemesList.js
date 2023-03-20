/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import Tabs from './Tabs'
import { Link } from 'gatsby'

const ThemesList = () => {
  const themes = [
    {
      name: 'Dodo',
      category: 'News',
      slug: '/themes/dodo/',
      image: '/images/dodo.png',
    },
    {
      name: 'Quail',
      category: 'Newsletter',
      slug: '/themes/quail/',
      image: '/images/quail.png',
    },
    {
      name: 'Kite',
      category: 'Blog',
      slug: '/themes/kite/',
      image: '/images/kite.png',
    },
    {
      name: 'Harpy',
      category: 'Blog',
      slug: '/themes/harpy/',
      image: '/images/harpy.png',
    },
    {
      name: 'Weaver',
      category: 'News',
      slug: '/themes/weaver/',
      image: '/images/weaver.png',
    }
  ]
  return (
    <section>
      <div className='pb-[12vmin] px-4 sm:px-6 pt-6'>
        <Tabs />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5.6vmin_4.8vmin] max-w-7xl mx-auto'>
          {themes.map(theme => (
            <article className={theme.name}>
              <Link className='group' to={theme.slug}>
                <figure className='relative overflow-hidden mb-6 rounded-md transform-gpu shadow-xl group-hover:shadow-2xl transition-shadow'>
                  <img
                    className='w-full'
                    src={theme.image}
                    alt='Theme'
                    loading='eager'
                    width='600'
                    height='750'
                  />
                </figure>
                <header className='flex justify-between items-center'>
                  <h2 className='text-[2rem] font-semibold tracking-[-0.003em]'>
                    {theme.name}
                  </h2>
                  <div className='flex gap-[2px]'>
                    <div className='flex gap-[2px] text-gray-500'></div>
                    <div className='flex gap-[2px] text-gray-300'></div>
                  </div>
                </header>
                <footer className='flex justify-between items-center mt-1'>
                  <div className='flex flex-row-reverse gap-2 items-center text-[1.2rem] font-semibold text-gray-500 uppercase'>
                    <span>{theme.category}</span>
                    {/* <span className='w-[2px] h-[2px] rounded-full bg-gray-500'></span> */}
                  </div>
                </footer>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ThemesList
