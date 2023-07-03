import React from 'react'

export default function ExtraInfo({heading, text}) {
  return (
    <article>
      <h3>{heading}</h3>
      <p>
        {text}
        
      </p>
    </article>
  )
}
