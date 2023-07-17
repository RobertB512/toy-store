import React from 'react'

import "./extraInfo.css"

export default function ExtraInfo({heading, text}) {
  return (
    <article className="col-md-6 extra-info">
      <h3>{heading}</h3>
      <p>
        {text}
        
      </p>
    </article>
  )
}
