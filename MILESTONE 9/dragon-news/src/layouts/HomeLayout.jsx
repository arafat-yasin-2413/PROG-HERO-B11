import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RightAside from "../components/homelayout/RightAside";

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

            {/* *:border */}
			<main className=" my-4 grid grid-cols-12 gap-3">
                <aside className="col-span-3">
				    <LeftAside></LeftAside>
                </aside>
                    

				<section className="main col-span-6">
					<Outlet></Outlet>
				</section>

                <aside className="col-span-3">
				    <RightAside></RightAside>
                </aside>
			</main>
		</div>
	);
};

export default HomeLayout;
