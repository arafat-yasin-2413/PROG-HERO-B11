import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Products.css";

const Products = ({ handleHeartClickEvents, clickedMap }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	console.log(products);

	return (
		<section className="">
			<table className="table-auto w-full border-collapse rounded-3xl bg-white">
				<thead>
					<tr className="">
						<th className="font-medium text-[16px] py-6 px-2 pl-6 item-header">
							Items
						</th>
						<th className="font-medium text-[16px] py-6 px-2">
							Current Bid
						</th>
						<th className="font-medium text-[16px] py-6 px-2">
							Time Left
						</th>
						<th className="font-medium text-[16px] py-6 px-2">
							Bid Now
						</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{products.map((product) => (
						<Product
							key={product.id}
							product={product}
							handleHeartClickEvents={handleHeartClickEvents}
                            clickedMap = {clickedMap}



						></Product>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default Products;
