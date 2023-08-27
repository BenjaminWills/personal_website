import React from 'react';
import './BlogContainer.css';
import { splitTagsToArray } from './utils';


export default function BlogContainer({
    title = 'Title',
    summary = 'Summary',
    tags = [{'name':'tagName'}],
    href = 'location',
    id = '1'
}) {
  return (
    <div className = 'blog-container font-link'>
        <h1 ><a className='title' href={href}>{title}</a></h1>
        <p className='summary'>{summary}</p>
        <ul className='tag-list'>{splitTagsToArray(tags)}</ul>
    </div>
  )
}
