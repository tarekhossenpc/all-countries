import React, { useState } from 'react';
import './country.css'

const Country = ({country}) => {
    // console.log(country)
    const [visited,setVisited] =useState(false)
    const handleVisited=()=>{
        setVisited(visited?false:true)
    }
    return (
        <div className={`country ${visited && 'country-visited'
        }`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <p>Area:{country.area.area}  </p>

            <p>Country Status:{country.area.area>300000?<h4>"Big Country"</h4>:<h5>"Small Country"</h5>}</p>
            <button onClick={handleVisited}>{visited?"Visited":"Not Visited"}</button>
            
        </div>
    );
};

export default Country;