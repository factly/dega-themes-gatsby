/** @jsx jsx */
import React from 'react'; // eslint-disable-line no-unused-vars
import { jsx } from 'theme-ui';
import parseDate from '@helpers/parseDate';
import BlogCard from './UI/BlogCard';

const Homepage = ({ data }) => {
  const { degaSpace, allDegaCategory, factchecks, posts } = data;

  return (
    <>
      <div sx={{ display: "block", ml: "auto", mr: "auto", maxWidth: "1280px" }}>
        <div><h2>Featured Posts</h2></div>
        <a href="http://localhost:8000/general-vaccine-trends-in-india-33">
          <div sx={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            <div sx={{ flex: "1 0 50%", maxWidth: "50%" }}><img src="https://images.factly.in/dega/health/2021/8/1630495278280_health-site-33" alt="" width="500" height="300" /></div>
            <div><h2>General vaccine trends in India- 33</h2></div>
          </div>
        </a>
      </div>
      <div sx={{ display: "block", ml: "auto", mr: "auto", maxWidth: "1280px", pt: "3rem" }}>

        <div sx={{ display: "flex", gap: "1.25rem" }}>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-32">
              <div >
                <div sx={{ mb: "1rem" }}><img src="https://images.factly.in/dega/health/2021/7/1630389997528_health-site-32" alt="" width="300" height="200" /></div>
                <div><h3>General vaccine trends in India- 32</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-31">
              <div>
                <div sx={{ mb: "1rem" }}><img src="https://images.factly.in/dega/health/2021/7/1630389984761_health-site-31" alt="" width="300" height="200" /></div>
                <div><h3>General vaccine trends in India- 31</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-30">
              <div>
                <div sx={{ mb: "1rem" }}><img src="https://images.factly.in/dega/health/2021/7/1628667176358_health-site30" alt="" width="300" height="200" /></div>
                <div><h3>General vaccine trends in India- 30</h3></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div sx={{ display: "block", ml: "auto", mr: "auto", maxWidth: "1280px", pt: "3rem" }}>
        <div>
          <h3>Most recent posts</h3>
        </div>
        <div sx={{ display: "flex", flexWrap: "wrap", gap: "2%", "&>div": { flex: "1 0 49%", maxWidth: "49%", mb: "0.75rem" } }}>

          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-7">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/2/1615971618263_slide3" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 7</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-8">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/2/1615971631309_slide2" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 8</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-9">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/2/1616500873273_health-site-10" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 9</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-10">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/2/1616500873273_health-site-10" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 10</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-11">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/2/1617191542930_health-site-5" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 11</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-12">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/3/1618233974195_health-site" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 12</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-13">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/3/1618233974195_health-site-13" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 13</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-14">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/3/1618923011293_health-site-14" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 14</h3></div>
              </div>
            </a>
          </div>

          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-15">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/3/1619529020710_health-site-15" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 15</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-16">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/4/1621516349787_health-site-16" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 16</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-17">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/4/1621516355860_health-site-17" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 17</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-18">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/4/1621516361363_health-site-18" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 18</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-19">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/5/1622639964462_health-site-19" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 19</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-20">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/2/1615971631309_slide2" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 20</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-21">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/2/1615971618263_slide3" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 21</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-8">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/2/1615971631309_slide2" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 22</h3></div>
              </div>
            </a>
          </div>


          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-23">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}> <img src="https://images.factly.in/dega/health/2021/2/1615971618263_slide3" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 23</h3></div>
              </div>
            </a>
          </div>
          <div>
            <a href="http://localhost:8000/general-vaccine-trends-in-india-24">
              <div sx={{ display: "flex", gap: "1.25rem" }}>
                <div sx={{ display: "flex", gap: "1.25rem" }}><img src="https://images.factly.in/dega/health/2021/2/1615971631309_slide2" alt="" width="200" height="100" /></div>
                <div><h3>General vaccine trends in India- 24</h3></div>
              </div>
            </a>
          </div>

        </div>
      </div>
      {/* <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flex: '0 1 800px',
          justifyContent: 'center',
        }}
      >
        {/* featured post */}

      {/* <div sx={{ pt: '1.25rem' }}>
        <h2 sx={{ px: '2rem' }}>Featured Posts</h2>
        <BlogCard post={posts.nodes[0]} type="featured" />
      </div> */}

      {/* sidebar post */}

      {/* <div
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 500px',
            pt: '1.25rem',
          }}
        >
          <h2 sx={{ pb: '1.25rem', px: '1.5rem' }}>Factchecks</h2>
          {factchecks.nodes.map((factcheck) => {
            return <BlogCard post={factcheck} type="sidebar" key={factcheck.id} />;
          })}
        </div>
      </div> */}

      {/* bottom post */}

      {/* <div>
        <h2 sx={{ px: '2rem' }}>Most Recent Posts</h2>
        <div sx={{ display: 'flex', flexWrap: 'wrap' }}>
          {posts.nodes.map((post) => {
            return <BlogCard post={post} type="basic" key={post.id} />;
          })}
        </div>
      </div> */}
    </>
  );
};
export default Homepage;
