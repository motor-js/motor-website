import React, { useState } from 'react'
import Highlight, { defaultProps }  from 'prism-react-renderer'
import theme from "prism-react-renderer/themes/nightOwl";

export default function CustomCodeBlock({
  js
}) {
   
  return (
    <div>
      <Highlight {...defaultProps} code={js} theme={theme} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
