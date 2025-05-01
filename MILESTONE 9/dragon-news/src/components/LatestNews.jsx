import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
	return (
		<div className="flex justify-center gap-5 bg-base-200 p-3 mt-4">
			<p className="bg-secondary text-base-100 px-3 py-2">latest</p>

			<Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
				<p className="font-bold">
					1 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Iure, tempore.
				</p>
				
                <p className="font-bold">
					2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Iure, tempore.
				</p>
				
                <p className="font-bold">
					3 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Iure, tempore.
				</p>

			</Marquee>
		</div>
	);
};

export default LatestNews;
