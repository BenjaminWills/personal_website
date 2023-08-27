import React from 'react';
import { CopyBlock, zenburn} from "react-code-blocks";
import './CodeBlock.css';

export default function CodeBlock({
    code = `print('hello world!')`,
    language = 'py',
    showLineNumbers = true
}) {
    return (
        <div className='code-div'>
            <CopyBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                theme = {zenburn}
                wrapLines
            />
        </div>
      );
}
