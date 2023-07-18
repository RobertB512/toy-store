import React from 'react'

import "./header.css"
import trainIllustration from "./toyTrain.svg"

export default function Header() {
  return (
    <header className="row">
      <section className="col-md-6 text-bg-primary introduction">
        <h2 className="fs-2 text-start">Simple Fun</h2>
        <h1 className="slogan">You don't need screens to have fun</h1>
        <p className="mb-2 opening">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque incidunt facilis voluptate dignissimos dolore ut similique quibusdam fugit, unde consequuntur, ea optio ratione quos eius, rerum nulla laboriosam nihil asperiores sequi provident. Dolorum laborum, quidem commodi eveniet facere itaque officiis corporis ea libero facilis veniam deleniti debitis, odio non eos.
        </p>
        <p className="text-bg-danger fs-6 p-3 disclaimer"> Note: this is not a real toy store. There are no real toys that you can buy here. This site can not process any data or payment information. If you want to fill out the form in the cart, you could, and your information will not be saved. This site was just to practice making websites.</p>
        <p className="text-bg-danger fs-6 p-3 disclaimer"> Note: the Latin throughout this site is fake text, so I could produce this site faster.</p>
      </section>
      <div className="col-md-6 image-area">
        <img className="header-img" src={trainIllustration} alt="An illustration of a toy train." />
      </div>
    </header>    
  )
}
