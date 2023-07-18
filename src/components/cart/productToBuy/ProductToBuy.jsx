import React from "react";

import "./productToBuy.css";

export default function ProductToBuy({ toyImg, toyTitle, toyPrice }) {
	return (
		<div className="mb-2 product-to-buy">
			<div className="toy-img-wrapper">
				<img className="toy-img" src={toyImg} alt={toyTitle} />
			</div>
			<div className="text-bg-primary w-auto toy-info">
				<div className="p-3 info-wrapper">
          <p className="toy-title">{toyTitle}</p>
          <p className="text-bg-dark p-2 toy-price">${toyPrice}</p>
        </div>
			</div>
		</div>
	);
}
