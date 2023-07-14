import React from 'react';
import { CopyBlock, zenburn} from "react-code-blocks";

export default function CodeBlock({
    code = `print('hello world!')`,
    language = 'py',
    showLineNumbers = true
}) {
    return (
        <CopyBlock
        text={code}
        language={language}
        showLineNumbers={showLineNumbers}
        theme = {zenburn}
        wrapLines
        />
      );
}
