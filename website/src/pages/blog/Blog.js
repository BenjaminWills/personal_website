import React from 'react';
import './Blog.css';
import BlogContainer from './BlogComponents/BlogContainer/BlogContainer';

function Blog() {
  return (
    <div class='page-div'>
      <BlogContainer
        title = "Ben's first blog post"
        summary = "My first ever blog post on my website!"
        tags = "First"
      />
    </div>
    )
}

export default Blog;
