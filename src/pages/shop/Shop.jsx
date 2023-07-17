import React, { useContext } from "react";
import { Link } from "react-router-dom";

import "./shop.css";
import ProductListItem from "../../components/shop/ProductListItem";
import toyList from "../../toyList";
// import {CartItems} from "../../App";

export default function Shop() {
	// const [cartItems, setCartItems] = useContext(CartItems)
	return (
		<section className="shop">
			<h2 className="">Shop</h2>
			<p className="tip">Click an item to view more information</p>
			<section>
				<h3 className="mb-3">Products</h3>
				<div className="product-list-wrapper">
					{toyList.map(toy => (
						<Link
							to={`/toy-store/shop/${toy.toyTitle}`}
							key={toy.id}
							state={{
                toyInfo: {toy},
								toyName: toy.toyTitle,
								toyDescription: toy.toyDescription,
								toyPrice: toy.toyPrice,
								toyImg: toy.toyImg.img,
							}}>
							<ProductListItem
								toyName={toy.toyTitle}
								toyPrice={toy.toyPrice}
								toyImg={toy.toyImg.img}
							/>
						</Link>
					))}
				</div>
			</section>
		</section>
	);
}
