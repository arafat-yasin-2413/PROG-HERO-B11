import React from "react";

const Banner = () => {
	return (
		<section className="font-sora">
			<div className="bg-[url('../assets/Banner-min.jpg')]  bg-cover bg-center px-10 py-10 w-full">
				<h1 className="text-3xl font-semibold my-4 text-white md:text-4xl">
					Bid on Unique Items from <br /> Around the World
				</h1>

				<p className="text-sm font-light opacity-70 my-6 text-white md:text-xl">
					Discover rare collectibles, luxury goods, and vintage <br />
					treasures in our curated auctions
				</p>

				<button className="btn bg-white rounded-full font-semibold text-sm px-6 py-6 md:text-xl">
					Explore Auctions
				</button>
			</div>
		</section>
	);
};

export default Banner;
