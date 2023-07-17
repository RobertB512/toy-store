import React from 'react'

import "./productListItem.css"

export default function ProductListItem({toyName, toyPrice, toyImg}) {
  return (
    <article className="product-list-item">
      <div className="row align-items-center shop-product-info">
        <h3 className="col-8 product-name">{toyName}</h3>
        <div className="col-4 h-100 text-bg-success price-wrapper">
          <p className="product-listing-price">${toyPrice}</p>
        </div>
      </div>
      <img className="product-list-item-img" src={toyImg} alt={toyName} />
    </article>
  )
}
