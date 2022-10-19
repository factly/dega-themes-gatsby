import * as React from 'react';

export default function TagPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
