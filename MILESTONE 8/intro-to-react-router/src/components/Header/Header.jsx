import React from "react";
import { Link } from "react-router";
import "./Header.css";
import { NavLink } from "react-router";

const Header = () => {
	return (
		<div>
			<h3>This is Header</h3>

			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/mobiles">Mobiles</NavLink>
				<NavLink to="/laptops">Laptops</NavLink>
			</nav>
		</div>
	);
};

export default Header;
