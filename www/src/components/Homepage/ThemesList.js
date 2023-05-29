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
      <div className='pb-[12vmin] px-4 sm:px-6 pt-6 bg-[#e8e8ed]'>
        <h2 className='text-4xl max-w-7xl mx-auto cursor-pointer hover:no-underline italic mb-7 mt-14'><span className='text-[#4e5965]'>Latest</span> Themes</h2>
        {/* <Tabs /> */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5.6vmin_4.8vmin] max-w-7xl mx-auto'>
          {themes.map(theme => (
            <article className={theme.name}>
              <Link Link className='group' to={theme.slug} >
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
                <header className='flex justify-center items-center'>
                  <h2 className='text-md md:text-[2rem] font-semibold tracking-[-0.003em] hover:text-blue-600'>
                    {theme.name}
                  </h2>
                  <div className='flex gap-[2px]'>
                    <div className='flex gap-[2px] text-gray-500'></div>
                    <div className='flex gap-[2px] text-gray-300'></div>
                  </div>
                </header>
                <footer className='flex justify-center items-center mt-1'>
                  <div className='flex flex-row-reverse gap-2 items-center text-xs md:text-[1.2rem] font-semibold text-gray-500 uppercase'>
                    {/* <span>{theme.category}</span> */}
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
