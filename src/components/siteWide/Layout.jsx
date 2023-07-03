import React from "react";
import {Outlet} from "react-router-dom"


import Navigation from "./navigation/Navigation";
import Footer from "./footer/Footer";
export default function Layout() {
	return (
		<>
			<Navigation />
      <Outlet />
			<Footer />
		</>
	);
}
