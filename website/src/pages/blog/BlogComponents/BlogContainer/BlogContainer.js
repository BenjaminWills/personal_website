import React from 'react';
import './BlogContainer.css';
import { splitTagsToArray } from './utils';

export default function BlogContainer({
    title = 'Title',
    summary = 'Summary',
    tags = 'Tag'
}) {
  return (
    <div className = 'blog-container'>
        <h1>{title}</h1>
        <p>{summary}</p>
        <h2>Tags:</h2>
        <ul>{splitTagsToArray(tags)}</ul>
    </div>
  )
}
