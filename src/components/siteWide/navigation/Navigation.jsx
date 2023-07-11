import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CartItems } from "../../../App";

export default function Navigation() {
	const cartItems = useContext(CartItems);

	return (
		<nav>
			<p className="logo">SF</p>
			<ul>
				<li>
					<NavLink to="/toy-store">Home</NavLink>
				</li>
				<li>
					<NavLink to="/toy-store/shop">Shop</NavLink>
				</li>
				<li>
					<NavLink to="/toy-store/cart">
						Cart <span className="items-in-cart">{cartItems[0].length}</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
