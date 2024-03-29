/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import React from "react"
import Footer from "../../components/Layout/Footer"
import Layout from "../../components/Layout/index"
import { Seo } from '@components/Seo'
import FeatureCard from './../featurecard';

const weaver = () => {
  const FEATURES = [
    {
      title: "Easy to Set Up",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quis perferendis maxime eos obcaecati eaque fugiat quibusdam officia, molestiae, similique repudiandae mollitia. At nesciunt reprehenderit provident ea quibusdam eveniet rerum.",
      image: "",
    },
  ]
  return (
    <Layout>
      <Seo
        title="Showcase | Weaver Theme"
        description="" />
      <div id="content" className="site-content relative">
        <div id="primary" className="content-area">
          <main id="main" className="site-main" role="main">
            <article
              id="post-16270"
              className="post-16270 page type-page status-publish hentry entry"
            >
              <div className="entry-content">
                <div
                  className="my-0 px-6 relative"
                  style={{
                    background:
                      "linear-gradient(90deg,rgba(189,237,255,0.4) 0%,rgb(241,250,254) 49%,rgb(255,255,255) 100%)",
                  }}
                >
                  <div className="wp-block-group__inner-container">
                    <div
                      style={{ height: "50px" }}
                      aria-hidden="true"
                      className="wp-block-spacer"
                    ></div>
                    <div className="flex-none md:flex lg:flex flex-wrap md:flex-wrap mx-auto max-w-[1240px] justify-between items-center">
                      <div style={{ flexBasis: "40%" }} className="px-4">
                        <h1 className="text-6xl">
                          <strong>
                            <span className="accent-text">Weaver</span>
                          </strong>{" "}
                        </h1>
                        <p className="has-text-align-left deco accent has-small-font-size">

                          <em>Gatsby Theme for Blog Sites</em>
                        </p>
                        <p>
                          <strong>
                            <em>Weaver</em>
                          </strong>{" "}
                          is Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Assumenda, numquam fuga quam ullam
                          exercitationem ratione aspernatur laudantium, sed
                          soluta nostrum id consequatur blanditiis error
                          adipisci rerum eum suscipit laboriosam deserunt?.{" "}
                        </p>
                        <div className="flex gap-8 flex-wrap my-8">
                          <div className="">
                            <a
                              className="border-2 border-[#ff7106] px-4 py-2 bg-white"
                              href="https://stag-weaver.netlify.app"
                              style={{ borderRadius: "50px" }}
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              <strong>Demo</strong>
                            </a>
                          </div>
                          <div className="wp-block-button is-style-fill green">
                            <a
                              className="border-[#45e051] border-2 px-4 py-2 hover:shadow-[0 12px 24px -6px #34dd8733] bg-white"
                              href="/docs/weaver"
                              style={{ borderRadius: "50px" }}
                            >
                              <strong>Documentation</strong>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="" style={{ flexBasis: "60%" }}>
                        <img src="/images/weaver.png"
                          alt=""
                          width="600"
                          height="475"
                        />
                      </div>
                      {/* <div className="" style={{ flexBasis: "66.66%" }}>
                        <div>
                          {" "}
                          <figure className="alignright w-full">
                            <a href="#">
                              <img
                                decoding="async"
                                src="https://source.unsplash.com/random/600x475"
                                alt=""
                                width="600"
                                height="475"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="mt-[-340px] relative z-[100] w-[200px] ">
                          <div className="wp-block-group__inner-container">
                            <div
                              className="is-layout-flow wp-block-group anariel-mobile-frame px[3.7%] py-[18%] bg-[#201e21] rounded-[10%/5%]"
                            >
                              <div className="wp-block-group__inner-container">
                                <div className="is-layout-flow wp-block-group anariel-mobile-ratio">
                                  <div className="wp-block-group__inner-container">
                                    {" "}
                                    <figure className="wp-block-image size-full">
                                      <a href="#">
                                        <img
                                          decoding="async"
                                          src="https://source.unsplash.com/random/200x348"
                                          alt=""
                                          className="wp-image-16933"
                                          width="200"
                                          height="348"
                                        />
                                      </a>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="is-layout-flex wp-container-9 wp-block-columns alignwide is-style-default">
                      <div
                        className="is-layout-flow wp-block-column is-vertically-aligned-top"
                        style={{ flexBasis: "100%" }}
                      >
                        <div
                          style={{ height: "50px" }}
                          aria-hidden="true"
                          className="wp-block-spacer"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* documentatiion section */}
                <div
                  className="mx-auto max-w-7xl"
                  sx={{ paddingTop: ["32px", null, "60px"], paddingBottom: ["32px", null, "60px"] }}
                >
                  <div className="wp-block-group__inner-container">
                    <div className="flex flex-wrap justify-between gap-8 p-8">
                      <div className="is-layout-flow wp-block-column">
                        {" "}
                        <p className="has-small-font-size">
                          Gatsby Version:{" "}
                          <span className="accent-text">5.0</span>
                        </p>{" "}
                        <p className="has-text-align-left anariel-changelog has-extra-small-font-size">
                          <a href="#" data-type="page">
                            Theme Updates Changelog
                          </a>
                        </p>
                      </div>

                      <div className="is-layout-flow wp-block-column">
                        {" "}
                        <p className="has-text-align-left anariel-documentation">
                          <a
                            href="/docs/weaver"
                            target="_blank"
                            className="underline"
                            rel="noreferrer noopener"
                          >
                            <strong>Documentation</strong>
                          </a>
                        </p>{" "}
                        <p className="has-extra-small-font-size">
                          Find Answers to All Your Questions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Features */}
                {FEATURES.map((feature, i) => (
                  <div
                    className=""
                    style={{
                      backgroundColor: "#f1fafe",
                      // paddingTop: "120px",
                      // paddingBottom: "120px",
                      py: '24px'
                    }}
                  >
                    <div className="wp-block-group__inner-container mx-auto max-w-7xl p-8">
                      <div className="mx-auto flex flex-wrap md:justify-center lg:justify-start">
                        <div
                          className={`md:max-w-[50%] p-4 ${i % 2 === 1 ? "order-1" : "order-2"
                            }`}
                        >
                          <h2 className="text-3xl my-4">
                            <strong>
                              <strong>{feature.title}</strong>
                            </strong>
                          </h2>{" "}
                          <p>{feature.description}</p>
                        </div>
                        <div className="md:max-w-[50%]">
                          <figure className="wp-block-video">
                            <img alt="" src={feature.image}></img>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <section>
                  <div sx={{ fontSize: ['42px', null, '54px'], textAlign: 'center', py: '3rem', px: '1.5rem' }}>
                    <p><strong>Features that are included in <span sx={{ color: '#F7475E' }}>all</span> our themes</strong></p>
                  </div>
                  <FeatureCard />
                </section>
              </div>
            </article>
          </main>
        </div>
      </div>
    </Layout>
  )
}

export default weaver
