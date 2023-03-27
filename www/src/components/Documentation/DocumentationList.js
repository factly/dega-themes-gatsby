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
          py: "2rem",
          px: ['1.5rem', '0rem', '0rem']
        }}
      >
        <div>
          <h1
            sx={{
              fontSize: "32px",
              fontWeight: "600",
              mb: "2.5rem",
              color: '#1E1E1E',
              textAlign: 'center'
            }}
          >
            Documentations
          </h1>
        </div>
        <div
          sx={{
            display: "flex",
            justifyContent: 'center',
            gap: "48px",
            flexWrap: "wrap",
            textAlign: "center",
            a: {
              color: "#000",
              //background: "#FAFAFA",
              display: "block",
              px: "24px",
              py: "16px",
              fontSize: "20px",
              fontWeight: "400",
              "&:hover": {
                backgroundColor: '#000',
                color: '#FFFFFF',
                borderRadius: '8px'
              },
            },
          }}
        >
          <div
            sx={{
              border: '1px solid',
              borderColor: '#0B0B0B',
              borderRadius: '8px'
              //width: "32%",
            }}
          >
            <h2>
              <a href="/docs/dodo">Dodo</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              border: '1px solid',
              borderColor: '#0B0B0B',
              borderRadius: '8px'
              //width: "32%",
            }}
          >
            <h2>
              <a href="/docs/quail">Quail</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              border: '1px solid',
              borderColor: '#0B0B0B',
              borderRadius: '8px'
              //width: "32%",
            }}
          >
            <h2>
              <a href="/docs/kite">Kite</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              border: '1px solid',
              borderColor: '#0B0B0B',
              borderRadius: '8px'
              //width: "32%",
            }}
          >
            <h2>
              <a href="/docs/harpy">Harpy</a>
            </h2>{" "}
          </div>
          <div
            sx={{
              border: '1px solid',
              borderColor: '#0B0B0B',
              borderRadius: '8px'
              //width: "32%",
            }}
          >
            <h2>
              <a href="/docs/weaver">weaver</a>
            </h2>{" "}
          </div>
        </div>
      </div>
    </>
  )
}

export default DocumentationList
