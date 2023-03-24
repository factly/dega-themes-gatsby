/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

export default function HeroSection() {
  return (
    <main>
      <div
        className="p-8 relative"
        style={{
          background:
            "linear-gradient(90deg,rgba(189,237,255,0.4) 0%,rgb(241,250,254) 49%,rgb(255,255,255) 100%)",
        }}
      >
        <div className="mx-auto">
          {/* <div style={{ height: "50px" }} aria-hidden="true"></div> */}
          <div className="max-w-[1240px] mx-auto w-full my-8 flex">
            <div
              className="mb-0 flex-grow-0 self-start "
              style={{ flexBasis: "63.33%" }}
            >
              {/* <figure className="size-large is-resized anariel-lines">
                <img
                  decoding="async"
                  src="https://www.anarieldesign.com/wp-content/uploads/2021/06/deco-lines-1.png"
                  alt=""
                  className="wp-image-15111"
                  width="53"
                  height="31"
                />
              </figure> */}
              <h1 id="" className="text-6xl my-4">
                Professional <span className="accent-text">Dega</span> Themes<br />
                <strong className="text-2xl">
                  Faster with GatsbyJS and NextJS{" "}
                </strong>
              </h1>
              <p className="my-4">
                Discover how our dega themes and plugins help you create
                beautiful, high-performing, secure, SEO-optimized, successful
                websites, in a few minutes.{" "}
              </p>
              <div className="my-4">
                <div className="py-4">
                  <a
                    className="border-[#45e051] border-2 px-4 py-2 hover:shadow-[0 12px 24px -6px #34dd8733]"
                    href="/themes/"
                    style={{ borderRadius: "50px" }}
                  >
                    <strong>View Themes</strong>
                  </a>
                </div>
              </div>
              {/* <div
                style={{ height: "90px" }}
                aria-hidden="true"
                className="wp-block-spacer"
              ></div> */}
            </div>
            <div style={{ flexBasis: "66.66%" }}>
              {" "}
              <img
                width="720"
                height="535"
                src="/images/hero.png"
                alt="HeroSection image"
              // sizes="(max-width: 720px) 100vw, 720px"
              />
            </div>
          </div>
          {/* <div className="custom-shape-divider-bottom-1622446369 alignfull absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
            {" "}
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[200px]"
            >
              {" "}
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="fill-white"
              ></path>{" "}
            </svg>
          </div> */}
        </div>
      </div>
    </main>
  )
}
