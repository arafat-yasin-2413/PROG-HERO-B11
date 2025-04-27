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
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
                <NavLink to="/posts">Posts</NavLink>
			</nav>
		</div>
	);
};

export default Header;
