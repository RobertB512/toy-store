import React from "react";

import "./productToBuy.css";

export default function ProductToBuy({ toyImg, toyTitle, toyPrice }) {
	return (
		<div className="product-to-buy">
			<div className="toy-img-wrapper">
				<img className="toy-img" src={toyImg} alt={toyTitle} />
			</div>
			<div className="toy-info">
				<p className="toy-title">{toyTitle}</p>
				<p className="toy-price">${toyPrice}</p>
			</div>
		</div>
	);
}
