import React from 'react'

import "./productListItem.css"

export default function ProductListItem({toyName, toyPrice, toyImg}) {
  return (
    <article className="product-list-item">
      <div className="shop-product-info">
        <h3 className="product-name">{toyName}</h3>
        <div className="price-and-button">
          <p className="product-listing-price">${toyPrice}</p>
          <button className="product-listing-btn">Add to cart</button>
        </div>
      </div>
      <img className="product-list-item-img" src={toyImg} alt={toyName} />
    </article>
  )
}
