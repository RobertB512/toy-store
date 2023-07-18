import React from 'react'

import ProductsToBuy from "../../components/cart/productsToBuy/ProductsToBuy"
import CheckOutArea from "../../components/cart/checkOutArea/CheckOutArea"


export default function Cart() {
  return (
    <section className="container p-3 cart">
      <h2 className="row">Cart</h2>
      <div className="row cart-content">
        <ProductsToBuy />
        <CheckOutArea />
      </div>
    </section>
  )
}
