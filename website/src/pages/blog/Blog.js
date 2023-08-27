import React from 'react';
import './Blog.css';
import BlogContainer from './BlogComponents/BlogContainer/BlogContainer';

function Blog() {
  return (
    <div className='page-div'>
      <BlogContainer
        title = "How to make a blog post!"
        summary = "My first ever blog post on my website!"
        tags = {[
          {"name":"Tutorial"},
        ]}
        href = "/personal_website/blog/test-page"
      />
      <br/>
      <BlogContainer
        title = "Ben's first blog post"
        summary = "My first ever blog post on my website!"
        tags = {[
          {"name":"Mathematics"},
          {"name":"Art"}
        ]}
        href = "/personal_website/cv"
      />
    </div>
    )
}

export default Blog;
