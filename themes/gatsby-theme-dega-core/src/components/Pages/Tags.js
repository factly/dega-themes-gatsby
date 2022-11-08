import * as React from 'react';

export default function TagsPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
