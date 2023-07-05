import React from "react";
import { Link } from "react-router-dom";

import "./shop.css"
import ProductListItem from "../../components/shop/ProductListItem";
import toyList from "../../toyList"

export default function Shop() {

	return (
		<>
			<h2>Shop</h2>
			<p>Click an item to view more information</p>

			<section>
				<h3>Products</h3>
				<div className="product-list-wrapper">
					{
            toyList.map(toy => <Link to={toy.toyTitle} key={toy.id}><ProductListItem toyName={toy.toyTitle} toyImg={toy.toyImg.img} /></Link>)
          }
				</div>
			</section>
		</>
	);
}
