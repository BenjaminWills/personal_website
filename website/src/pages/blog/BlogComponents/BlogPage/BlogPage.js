import React from 'react'

const description = `
We want the 
`

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
