/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import Layout from '@components/Layout/index';
import { Link } from 'gatsby';
import parseDate from '@helpers/parseDate';
import StoryCard from '../UI/StoryCard';


const Indexpage = ({ data }) => {

    const { posts, featuredCategories } = data;
    const featuredPost = posts.nodes[0];
    return <Layout>
        <>
            <main sx={{ p: [null, null, null, '2rem'], pt: '2rem' }}>
                {/* Hero Section */}
                <div
                    className="hero"
                    sx={{
                        display: 'grid',
                        columnGap: [null, null, null, '2rem'],
                        gridTemplateColumns: [null, null, null, 'repeat(12,1fr)'],
                        gridTemplateRows: [null, null, null, 'minmax(2rem,auto) repeat(2,1fr)'],
                        px: ['1.5rem', null, null, 'initial'],
                        '& > *': {
                            mt: ['2rem', null, null, 'initial'],
                        },
                    }}
                >
                    {/* Left */}
                    <div
                        className="left"
                        sx={{
                            gridColumn: [null, null, null, '1/span 3'],
                            gridRowStart: [null, null, null, 1],
                            position: 'relative',
                            order: [2, null, null, 'initial'],
                            '::after': {
                                content: `""`,
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                left: 'auto',
                                right: 'calc((2rem / 2) * -1)',
                                borderRight: '1px solid #d9d9d9',
                            },
                        }}
                    >
                        {posts.nodes.slice(1, 3).map((post) => (
                            <div
                                key={post.id}
                                sx={{ borderTop: '1px solid #d9d9d9', display: 'block', py: '1rem' }}
                            >
                                <Link passHref href={`/${post.slug}`}>
                                    <a>
                                        <img src={post.medium?.url.proxy} alt="" />
                                    </a>
                                </Link>
                                {post.categories.length > 0 && (
                                    <Link key={post.id} href={`category/${post.categories[0].slug}`} passHref>
                                        <a
                                            sx={{
                                                fontSize: '0.75rem',
                                                textTransform: 'uppercase',
                                                color: '#df1c22',
                                                display: 'block',
                                            }}
                                        >
                                            {post.categories[0].name}
                                        </a>
                                    </Link>
                                )}
                                <Link key={post.id} href={`/${post.slug}`} passHref>
                                    <a sx={{ display: 'block' }}>
                                        <h3 sx={{ fontSize: '1rem' }}>{post.title}</h3>
                                    </a>
                                </Link>

                                <Link key={post.id} href={`/author/${post?.users[0]?.slug}`} passHref>
                                    <a sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                                        {post?.users[0]?.display_name}
                                    </a>
                                </Link>
                                <p sx={{ fontSize: '0.675rem' }}>{parseDate(post.published_date)}</p>
                            </div>
                        ))}
                    </div>
                    {/* Center */}
                    <div
                        className="center"
                        sx={{
                            gridColumn: [null, null, null, '4/span 6'],
                            textAlign: 'center',
                            order: [1, null, null, 'initial'],
                            mt: [0, null, null, 'initial'],
                        }}
                    >
                        <div>
                            <Link href={`/${featuredPost?.slug}`} passHref>
                                <a>
                                    <div>
                                        <img
                                            src={featuredPost?.medium?.url?.proxy}
                                            alt={featuredPost?.title}
                                            sx={{ width: '100%', maxHeight: '25rem', objectFit: 'cover' }}
                                        />
                                    </div>

                                    <div sx={{ p: '1rem' }}>
                                        <p sx={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#df1c22' }}>
                                            {featuredPost?.categories[0]?.name}
                                        </p>
                                        <h2 sx={{ fontSize: '2.25rem' }}>{featuredPost?.title}</h2>
                                        <p sx={{ fontSize: '1rem', my: '0.5rem' }}>{featuredPost?.excerpt}</p>
                                        <p sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                                            {featuredPost?.users[0].display_name}
                                        </p>
                                        <p sx={{ fontSize: '0.675rem' }}>{parseDate(featuredPost?.published_date)}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    {/* Right */}
                    <div
                        className="right"
                        sx={{
                            gridColumn: [null, null, null, '10/span 3'],
                            position: 'relative',
                            order: [2, null, null, 'initial'],
                            '::before': {
                                content: `""`,
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 'auto',
                                left: 'calc((2rem / 2) * -1)',
                                borderRight: '1px solid #d9d9d9',
                            },
                        }}
                    >
                        <h4 sx={{ mb: '0.5rem', fontSize: '1rem' }}>Latest Posts</h4>
                        <div>
                            {posts.nodes.slice(3, 8).map((post) => (
                                <div
                                    key={post.id}
                                    sx={{
                                        borderTop: '1px solid #d9d9d9',
                                        display: 'block',
                                        py: '1rem',
                                        display: 'flex',
                                        gap: '0.75rem',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <div>
                                        {post.categories.length > 0 && (
                                            <Link key={post.id} href={`category/${post.categories[0].slug}`} passHref>
                                                <a
                                                    sx={{
                                                        fontSize: '0.75rem',
                                                        textTransform: 'uppercase',
                                                        color: '#df1c22',
                                                        display: 'block',
                                                    }}
                                                >
                                                    {post.categories[0].name}
                                                </a>
                                            </Link>
                                        )}
                                        <Link key={post.id} href={`/${post.slug}`} passHref>
                                            <a sx={{ display: 'block' }}>
                                                <h3 sx={{ fontSize: '1rem' }}>{post.title}</h3>
                                            </a>
                                        </Link>
                                        <div sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                            <Link key={post.id} href={`/author/${post?.users[0]?.slug}`} passHref>
                                                <a sx={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>
                                                    {post?.users[0]?.display_name}
                                                </a>
                                            </Link>
                                            <p sx={{ fontSize: '0.675rem' }}>{parseDate(post.published_date)}</p>
                                        </div>
                                    </div>
                                    <div sx={{ maxWidth: '7.5rem', maxWidth: '25%', flex: '1 0 25%' }}>
                                        <img src={post.medium?.url?.proxy} alt={post.title} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Featured categories Section  */}
                <div>
                    {data?.featuredCategories?.nodes.length > 0 &&
                        data.featuredCategories.nodes.map((category) => {
                            return (
                                category.posts.nodes.length > 0 && (
                                    <section key={category.id} sx={{ my: '1.5rem' }}>
                                        <h4 sx={{ borderBottom: '1px solid black', pb: '0.75rem' }}>{category.name}</h4>
                                        <div
                                            sx={{
                                                display: 'grid',
                                                gridTemplateColumns: ['1fr', null, 'repeat( 2, 1fr )', 'repeat( 3, 1fr)'],
                                                px: [null, null, (theme) => `${theme.space.spacing6}`],
                                                mt: (theme) => `${theme.space.spacing7}`,
                                                gridGap: (theme) => `${theme.space.spacing7}`,
                                            }}
                                        >
                                            {category.posts?.nodes.slice(0, 6).map((post) => (
                                                <StoryCard cardStyle="tulip" key={post.id} storyData={post} />
                                            ))}
                                        </div>
                                    </section>
                                )
                            );
                        })}
                </div>
            </main>
        </>
    </Layout>;
};

export default Indexpage;