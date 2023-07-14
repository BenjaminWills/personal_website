import React from 'react'

export default function BlogPage({
  title,
  content
}
  ) {
  return (
    <div className='page-div'>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}
