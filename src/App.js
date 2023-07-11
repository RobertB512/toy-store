import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Layout from "./components/siteWide/Layout";
import Product from "./pages/product/Product";
import "./App.css";

export const CartItems = createContext();

function App() {
	const [cartItems, setCartItems] = useState([]);
  
	return (
		<CartItems.Provider value={[cartItems, setCartItems]}>
			<BrowserRouter>
				<Routes>
					<Route path="toy-store" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/toy-store/shop" element={<Shop />} />
						<Route path="/toy-store/shop/:toy" element={<Product />} />
						<Route path="/toy-store/cart" element={<Cart />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</CartItems.Provider>
	);
}

export default App;
