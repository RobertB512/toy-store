import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
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
					<NavLink to="/toy-store/cart">Cart</NavLink>
				</li>
			</ul>
		</nav>
	);
}
