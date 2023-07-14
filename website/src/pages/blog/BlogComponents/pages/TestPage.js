import React from 'react'
import BlogPage from '../BlogPage/BlogPage';
import CodeBlock from '../CodeBlock/CodeBlock'

const code = `import boto3

from typing import Dict

def download_from_cloud(information: Dict[str,str]) -> bool:
    """
    This is a function
    """
    try:
        bucket, key, output_path = information.values()
        client = boto3.client('s3')
        client.download(bucket,key, output_path)
    except:
        raise Exception(e)
`

export default function TestPage() {
  return (
    <div>
        <BlogPage
        title = "Hello, welcome to my first blog post!"
        content= <CodeBlock code={code}></CodeBlock>
        ></BlogPage>
       
    </div>
  )
}
