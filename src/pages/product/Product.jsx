import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

import { CartItems } from "../../App";
import "./product.css";

export default function Product(props) {
	const [cartItems, setCartItems] = useContext(CartItems);
	const toyTitle = useParams();
	const { state } = useLocation();


	return (
		<section>
			<h2>Product: {toyTitle.toy}</h2>
			<img className="product-page-img" src={`../${state.toyImg}`} alt={toyTitle.toy} />
			<article className="toy-details">
				<p className="project-description">{state.toyDescription}</p>
				<div className="purchase-area">
					<p className="price">{state.toyPrice}</p>
					<button
						className="add-to-cart-btn"
						onClick={() => setCartItems([...cartItems, {toyTitle: toyTitle.toy, toyImg: state.toyImg, toyPrice: state.toyPrice}])
						}>
						Add to cart
					</button>
				</div>
			</article>
		</section>
	);
}
