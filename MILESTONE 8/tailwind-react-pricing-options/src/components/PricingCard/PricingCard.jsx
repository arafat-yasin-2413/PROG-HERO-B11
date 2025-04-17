import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
	const { name, price, description, features } = pricing;

	return (
		<div className="border rounded-2xl p-4 bg-amber-600 mt-2">
			{/* card header */}
			<div>
				<h1 className="text-7xl">{name}</h1>
				<h4 className="text-3xl">{price}</h4>
			</div>

			{/* card body */}
			<div className="bg-amber-400 p-4 rounded-2xl mt-10">
				<p>{description}</p>

				{features.map((feature, index) => (
					<PricingFeature key={index} feature={feature}></PricingFeature>
				))}
			</div>
		</div>
	);
};

export default PricingCard;
