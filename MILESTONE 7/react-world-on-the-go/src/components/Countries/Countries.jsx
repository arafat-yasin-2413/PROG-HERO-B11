import React, { use, useState } from "react";
// import Country from './components/Country/Country';
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
	const [visitedCountries, setVisitedCountries] = useState([]);
	const [visitedFlags, setVisitedFlags] = useState([]);

	const handleVisitedFlags = (flag) => {
		// console.log('flag is added , ', flag);
		const newVisitedFlags = [...visitedFlags, flag];
		setVisitedFlags(newVisitedFlags);
	};

	const handleVisitedCountries = (country) => {
		console.log("country visited clicked");

		const newVisitedCountries = [...visitedCountries, country];
		setVisitedCountries(newVisitedCountries);

		console.log(visitedCountries);
	};


    const textStyle={
        textAlign: 'center',
    }
	const countries = use(countriesPromise);
	console.log(countries);
	return (
		<div>
			<h1>Traveling Countries: {countries.length}</h1>
			<h2>Travelled so far : {visitedCountries.length} </h2>

                <h4 style={textStyle}>Visited Flags</h4>
			<div className="flag-container">

					{visitedFlags.map((flag, index) => (
						<img key={index} src={flag} alt="" />
					))}
				
			</div>

			<section className="countries">
				{countries.map((country) => (
					<Country
						key={country.cca3}
						country={country}
						handleVisitedCountries={handleVisitedCountries}
						handleVisitedFlags={handleVisitedFlags}
					></Country>
				))}
			</section>
		</div>
	);
};

export default Countries;
