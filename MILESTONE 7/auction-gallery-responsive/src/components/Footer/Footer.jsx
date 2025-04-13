import React from "react";

const Footer = () => {
	return (
		<footer>
			<div className="flex flex-col justify-center items-center my-32">
				<h2 className="font-sora text-3xl my-6">
					
					<span className="text-[#003EA4] font-medium">Auction</span>
					<span className="text-[#FFD337] font-extrabold">
						Gallery
					</span>
				</h2>

				<div className="flex font-sora text-[16px] font-semibold gap-2 mb-3">
					<h4>Bid.</h4>
					<h4>Win.</h4>
					<h4>Own.</h4>
				</div>

				<div className="flex flex-col justify-center items-center font-poppins gap-4 font-medium text-[16px] mt-3 mb-3 md:flex-row">
					<a href="" target="_blank">
						Home
					</a>
					<a href="" target="_blank">
						Auctions
					</a>
					<a href="" target="_blank">
						Categories
					</a>
					<a href="" target="_blank">
						How to works
					</a>
				</div>

				<h5 className="font-sora text-[18px] font-medium mt-4">
					{"\u00A9"} 2025. AuctionGallery. All rights reserved.
                    {/* ©2025AuctionHub. All rights reserved. */}
				</h5>
			</div>
		</footer>
	);
};

export default Footer;
