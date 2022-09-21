import React, { useState, useEffect } from 'react'
import Country from '../Countty/Country'

export default function Countries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))
    }, [])

    return (

        <div className="container text-center mt-5">
            <div className="row align-items-start">
                {
                    countries.map((country, key) => 

                        <div className="col-3">
                            <Country data={country} key={country.ccn3}></Country>
                        </div>
                    )
                }
           
            </div>
        </div>
    )
}
