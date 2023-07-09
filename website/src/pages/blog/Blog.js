import React from 'react';
import './Blog.css';
import BlogContainer from './BlogComponents/BlogContainer/BlogContainer';

function Blog() {
  return (
    <div className='page-div'>
      <BlogContainer
        title = "Ben's first blog post"
        summary = "My first ever blog post on my website!"
        tags = {[
          {"name":"Literature"},
        ]}
        href = "/personal_website/cv"
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
