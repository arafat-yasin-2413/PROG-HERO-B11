import React, { use, useState } from "react";
import './Country.css'


const Country = ({ country }) => {

    // console.log(country);


    const [visited, setVisited] = useState(false);

    
    const handleVisited = () => {
        // console.log('visited clicked');
        
        
        // if(visited) {
        //     setVisited(false);
        // }

        // else{
        //     setVisited(true);
        // }


        setVisited(!visited);
    }

	return (
		<div className= {`country fav-country ${visited && 'country-visited'}`}  >

            <h3>
			    Name: {country.name.common}
            </h3>
            <p>
                Independent: {country.independent ? 'Free' : 'Not Free'}
            </p>

            <p>
                Population: {country.population}
            </p>
			
            <p>
				<img src={country?.flags?.png} alt="" />
			</p>

            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}> {
                visited ? 'Visited' : 'Not Visited'
                } </button>
		</div>
	);
};

export default Country;
