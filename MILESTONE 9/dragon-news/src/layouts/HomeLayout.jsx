import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
	return (
		<div className="font-poppins w-11/12 mx-auto">
			<header>
				<Header></Header>
				<section>
					<LatestNews></LatestNews>
				</section>

				<nav className="my-3">
					<Navbar></Navbar>
				</nav>
			</header>

			<main>
				<section className="left-nav"></section>

				<section className="main">
					<Outlet></Outlet>
				</section>

				<section className="right-nav"></section>
			</main>
		</div>
	);
};

export default HomeLayout;
