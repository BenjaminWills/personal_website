import React from 'react'
import './MathsBlock.css'

import Latex from 'react-latex';

export default function MathsBlock({content}) {
  return (
    <div className='maths-div'>
        <Latex>{content}</Latex>
    </div>
  )
}
