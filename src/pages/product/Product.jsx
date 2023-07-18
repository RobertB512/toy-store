import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

import { CartItems } from "../../App";
import "./product.css";

export default function Product(props) {
	const [cartItems, setCartItems] = useContext(CartItems);
	const toyTitle = useParams();
	const { state } = useLocation();


	return (
		<section className="container-fluid p-3">
			<h2>{toyTitle.toy}</h2>
			<div className="row justify-content-center product-info">
        <div className=" col-md-4 img-wrapper"><img className="product-page-img" src={`../${state.toyImg}`} alt={toyTitle.toy} /></div>
        <article className="col-md-8 w-100 toy-details">
          <p className="project-description">{state.toyDescription}</p>
          <div className="row purchase-area">
            <p className="col-2 text-bg-dark price">${state.toyPrice}</p>
            <button
              className="col-2 w-auto border-0 btn btn-primary add-to-cart-btn"
              onClick={() => setCartItems([...cartItems, {toyTitle: toyTitle.toy, toyImg: state.toyImg, toyPrice: state.toyPrice}])
              }>
              Add to cart
            </button>
          </div>
        </article>
      </div>
		</section>
	);
}
