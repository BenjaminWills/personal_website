import React from 'react';
import './BlogContainer.css';

export default function BlogContainer({
    title = 'Title',
    summary = 'Summary',
    tags = 'Tag'
}) {
  return (
    <div class = 'blog-container'>
        <h1>{title}</h1>
        <p>{summary}</p>
        <h2>Tags:</h2>
        <li>{tags}</li>
    </div>
  )
}
