import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
	const countries = use(countriesPromise);
	// console.log(countries);

	return (
		<div>
			<h2>Traveling Countries: {countries.length} </h2>

            <h3>Traveled so far: </h3>

			<section className="countries">
				{countries.map((country) => (
					<Country key={country.cca3} country={country}></Country>
				))}
			</section>
		</div>
	);
};

export default Countries;
