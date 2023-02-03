/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import React from "react"

const DocumentationList = () => {
  return (
    <>
      <div
        sx={{
          maxWidth: "1200px",
          margin: "auto",
          pb: "2rem",
        }}
      >
        <div>
          <h1
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              mb: "1.5rem",
              color: '#1E1E1E'
            }}
          >
            Documentations
          </h1>
        </div>
        <div
          sx={{
            display: "flex",
            gap: "24px",
            flexWrap: "wrap",
            textAlign: "center",
            a: {
              color: "#000",
              background: "#FAFAFA",
              display: "block",
              p: "32px",
              fontSize: "20px",
              fontWeight: "500",
              "&:hover": {
                color: '#45e091'
              },
            },
          }}
        >
          <div
            sx={{
              width: "32%",
            }}
          >
            <h2>
              <a href="/docs/dodo">Dodo</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              width: "32%",
            }}
          >
            <h2>
              <a href="/docs/quail">Quail</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              width: "32%",
            }}
          >
            <h2>
              <a href="/docs/kite">Kite</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              width: "32%",
            }}
          >
            <h2>
              <a href="/docs/harpy">Harpy</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              width: "32%",
            }}
          >
            <h2>
              <a href="/docs/weaver">weaver</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              width: "32%",
            }}
          >
            <h2>
              <a href="/docs/harpy">Harpy</a>
            </h2>{" "}
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default DocumentationList
