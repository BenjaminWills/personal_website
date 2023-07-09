import React from 'react';
import './BlogContainer.css';
import { splitTagsToArray } from './utils';


export default function BlogContainer({
    title = 'Title',
    summary = 'Summary',
    tags = [{'name':'tagName'}],
    href = 'location'
}) {
  return (
    <div className = 'blog-container font-link'>
        <h1 ><a className='title' href={href}>{title}</a></h1>
        <p>{summary}</p>
        <h2>Tags:</h2>
        <ul>{splitTagsToArray(tags)}</ul>
    </div>
  )
}
