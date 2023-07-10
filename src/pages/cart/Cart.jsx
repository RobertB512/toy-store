import React from 'react'

import ProductsToBuy from "../../components/cart/productsToBuy/ProductsToBuy"
import CheckOutArea from "../../components/cart/checkOutArea/CheckOutArea"


export default function Cart() {
  return (
    <>
      <h2>Cart</h2>
      <ProductsToBuy />
      <CheckOutArea />
    </>
  )
}
