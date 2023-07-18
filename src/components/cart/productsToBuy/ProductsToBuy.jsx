import React, { useContext } from "react";

import ProductToBuy from "../productToBuy/ProductToBuy";
import "./productsToBuy.css"

import { CartItems } from "../../../App";

export default function ProductsToBuy() {
	const cartItems = useContext(CartItems);
	return (
		<section className="col col-xl-5 col-md-12 col-sm-12">
			<h3 className="row">Items in cart</h3>
			<article className="cart-items-wrapper">
				{cartItems.length > 0
					? cartItems[0].map((cartItem, index) => (
							<ProductToBuy
								key={index}
								toyImg={cartItem.toyImg}
								toyPrice={cartItem.toyPrice}
								toyTitle={cartItem.toyTitle}
							/>
					  ))
					: null}
			</article>
		</section>
	);
}
