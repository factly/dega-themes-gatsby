import * as React from "react"

export default function FormatPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}


