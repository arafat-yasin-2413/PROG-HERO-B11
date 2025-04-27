import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
	const [visited, setVisited] = useState(false);

	// console.log(handleVisitedCountries);

	const handleVisited = () => {
		// console.log('visited clicked');

		// if (visited) {
		//     setVisited(false);
		// }
		// else{
		//     setVisited(true);
		// }

		setVisited(!visited);
        handleVisitedCountries(country);
	};

	return (
		<div className={`country-card ${visited && "country-visited"}`}>
			<h3>Name: {country.name.common} </h3>

			<img src={country?.flags?.png} alt={country.flags.alt} />

			<p>
				Independent: {country.independent ? "Shadhin" : "Not Shadhin"}
			</p>
			<p>Population: {country.population}</p>

			<button
				className={visited ? "btn-visited" : "btn-not-visited"}
				onClick={handleVisited}
			>
				{visited ? "Visited" : "Not Visited"}
			</button>


            <button onClick={()=> handleVisitedFlags(country.flags.png)}>Add visited flag</button>
		</div>
	);
};

export default Country;
