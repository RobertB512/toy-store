import React from 'react'

import "./header.css"
import trainIllustration from "./toyTrain.svg"

export default function Header() {
  return (
    <header className="row">
      <section className="col-md-6 text-bg-primary introduction">
        <h1>Simple Fun</h1>
        <h2 className="slogan">You don't need screens to have fun</h2>
        <p className="opening">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque incidunt facilis voluptate dignissimos dolore ut similique quibusdam fugit, unde consequuntur, ea optio ratione quos eius, rerum nulla laboriosam nihil asperiores sequi provident. Dolorum laborum, quidem commodi eveniet facere itaque officiis corporis ea libero facilis veniam deleniti debitis, odio non eos.
        </p>
      </section>
      <div className="col-md-6 image-area">
        <img className="header-img" src={trainIllustration} alt="An illustration of a toy train." />
      </div>
    </header>    
  )
}
