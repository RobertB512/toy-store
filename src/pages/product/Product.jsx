import React from "react";
import { useLocation, useParams } from "react-router-dom";

import "./product.css"

export default function Product(props) {
	const toyTitle = useParams();
	const { state } = useLocation();
  console.log("description", JSON.stringify(state.toyDescription), state.toyDescription)

	return ( 
		<section>
			<h2>Product: {toyTitle.toy}</h2>
			<img className="product-page-img" src={`../${state.toyImg}`} alt="" />
      <article className="toy-details">
        <p className="project-description">{state.toyDescription}</p>
        <div className="purchase-area">
            <button className="add-to-cart-btn">Add to cart</button>
            <p className="price">{state.toyPrice}</p>
        </div>
      </article>
		</section>
	);
}
