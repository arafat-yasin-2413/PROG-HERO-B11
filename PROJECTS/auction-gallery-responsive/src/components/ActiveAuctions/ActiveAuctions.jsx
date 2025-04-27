import React, { useState } from "react";
import Products from "../Products/Products";
import { FaRegHeart } from "react-icons/fa";
import { PiXBold } from "react-icons/pi";
import { toast } from "react-toastify";

const ActiveAuctions = () => {
	const [favProducts, setFavProducts] = useState([]);
	const [totalBidsAmount, setTotalBidsAmount] = useState(0);
	const [clickedMap, setClickedMap] = useState({});

	const handleHeartClickEvents = (product) => {
		handleHeartButton(product);
		setClickedMap((prevItems) => ({
			...prevItems,
			[product.id]: true,
		}));

		toast.success("An item is added to favorites", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,

			style: {
				color: "#0E2954",
				fontWeight: "bold",
			},
		});
	};

	const handleHeartButton = (product) => {
		console.log("clicked heart button", product);

		setFavProducts([...favProducts, product]);
		const newAmount = totalBidsAmount + product.currentBidPrice;
		setTotalBidsAmount(newAmount);
	};

	const handleXClickEvents = (product) => {
		handleXButton(product);

		setClickedMap((prevItems) => ({
			...prevItems,
			[product.id]: false,
		}));
	};

	const handleXButton = (product) => {
		console.log("clicked X button");

		const updateFavProducts = favProducts.filter(
			(p) => p.id !== product.id
		);
		const updateTotalBidsAmount = totalBidsAmount - product.currentBidPrice;

		setFavProducts([...updateFavProducts]);
		setTotalBidsAmount(updateTotalBidsAmount);

		toast.error("An item is removed from favorites", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			style: {
				color: "#0E2954",
				fontWeight: "bold",
			},
		});
	};

	// console.log(favProducts);

	return (
		<section className="bg-blue-50 py-10 font-sora">

			<section className="my-20 max-w-11/12 mx-auto">
				<h1 className="text-2xl font-bold text-[#0E2954] mb-6 md:text-4xl">
					Active Auctions
				</h1>

				<p className="text-sm opacity-90 mb-6 md:text-xl">
					Discover and bid on extraordinary items
				</p>

				{/* Products and Favorite items container */}
				<section className="flex gap-4 flex-col lg:flex-row">
					{/* Products side */}
					<div className="w-full lg:w-8/12">
						<Products
							handleHeartClickEvents={handleHeartClickEvents}
							clickedMap={clickedMap}
						></Products>


                        
                        
					</div>

					{/* Whole Favorite items side */}
					<div className="bg-white flex-1 max-h-max rounded-3xl">
						<div className="flex items-center justify-center gap-2 py-5 border-b  border-gray-400">
							<FaRegHeart
								style={{ fontSize: "32px", color: "#0E2954" }}
							></FaRegHeart>
							<h2 className="font-semibold text-4xl text-[#0E2954] ">
								Favorite Items
							</h2>
						</div>

						{favProducts.length > 0 ? (
							<div className="px-4">
								{favProducts.map((prod) => (
									<div
										key={prod.id}
										className="flex gap-4 py-3 mt-2 border-b border-gray-200"
									>
										<img
											className="w-16 h-16 rounded-md"
											src={prod.image}
											alt=""
										/>

										<div className="flex flex-col flex-grow text-[#0E2954] text-xl">
											<div className="flex justify-between items-center pr-2">
												<h3>{prod.title}</h3>
												<button className="" onClick={() =>handleXClickEvents(prod)}>
													<PiXBold className="text-xl "></PiXBold>
												</button>
											</div>

											<div className="flex gap-6 mt-2 ">
												<h4 className="font-medium">
													$
													{prod.currentBidPrice.toLocaleString(
														"en-US"
													)}
												</h4>
												<h4>Bids: {prod.bidsCount}</h4>
											</div>
										</div>
									</div>
								))}
                                
                            </div>

                            
						) : (
							<div className="text-center  pb-10 ">
								<h3 className="mt-10 mb-4 text-2xl font-medium">
									No favorites yet
								</h3>
								<p className="opacity-80 ">
									Click the heart icon on any item <br /> to
									add it to your favorites
								</p>
							</div>
						)}

						<div className="text-2xl gap-3 font-semibold flex justify-between px-6 my-4 pt-4 border-t border-gray-400">
							<h2>Total bids Amount</h2>

							{totalBidsAmount > 0 ? (
								<p>${totalBidsAmount}</p>
							) : (
								<p>$0000</p>
							)}
						</div>
					</div>

                    
				</section>
			</section>
		</section>
	);
};

export default ActiveAuctions;
