/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

const Showcase = () => {
  const themes = [
    {
      slug: '/themes/dodo/',
      image: '/images/dodo.png',
    },
    {
      slug: '/themes/quail/',
      image: '/images/quail.png',
    },
    {
      slug: '/themes/kite/',
      image: '/images/kite.png',
    },
    {
      slug: '/themes/harpy/',
      image: '/images/harpy.png',
    },
    {
      slug: '/themes/weaver/',
      image: '/images/weaver.png',
    }
  ]
  return (
    <section>
      <div className='pb-[12vmin] px-4 sm:px-6 pt-6 bg-[#ea5e34]'>
        <Link href='/showcase'><h2 className='text-4xl font-semibold max-w-7xl mx-auto underline text-[#FFFFFF] cursor-pointer hover:no-underline italic'>Showcase</h2></Link>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5.6vmin_4.8vmin] max-w-7xl mx-auto mt-8'>
          {themes.map(theme => (
            <article className='bg-[#000] rounded-xl p-1'>
              <Link Link className='group' to={theme.slug} >
                <figure className='relative overflow-hidden rounded-md transform-gpu shadow-xl group-hover:shadow-2xl transition-shadow'>
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
                  <div className='flex gap-[2px]'>
                    <div className='flex gap-[2px] text-gray-500'></div>
                    <div className='flex gap-[2px] text-gray-300'></div>
                  </div>
                </header>
                <footer className='flex justify-center items-center mt-1'>
                  <div className='flex flex-row-reverse gap-2 items-center text-xs md:text-[1.2rem] font-semibold text-gray-500 uppercase'>
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

export default Showcase

