import * as React from 'react';

export default function AuthorPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
