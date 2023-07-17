import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CartItems } from "../../../App";

import "./navigation.css"

export default function Navigation() {
	const cartItems = useContext(CartItems);

	return (
		<nav className="navbar navbar-expand bg-secondary-subtle">
			<div className="container">
        <p className="navbar-brand logo">SF</p>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/toy-store">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/toy-store/shop">Shop</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-dark" to="/toy-store/cart">
              Cart <span className="text-bg-dark fw-bold p-2 items-in-cart">{cartItems[0].length}</span>
            </NavLink>
          </li>
        </ul>
      </div>
		</nav>
	);
}
