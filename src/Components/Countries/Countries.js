import React, { useState, useEffect } from 'react'
import Country from '../Countty/Country'

export default function Countries() {
    const [countries, setCountries] = useState([])
    const [cname, setCname] = useState('all')
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${cname}`)
        // fetch(`https://restcountries.com/v2/name/bangladesh`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCountries(data))
    }, [cname])

    // console.log(countries)

    const selectCountry = (country) => {

        const lower = country.toLowerCase()
        const urlReady = "name/" + lower

        setCname(urlReady)
        // console.log(lower)
        // console.log(urlReady)
 
    }

    console.log('mush', cname)

    return (

        <div className="container text-center mt-5">
            <div className="row align-items-start">
                {

                    countries.map((country, key) =>

                        <div className="col-4" key={country.name.common}>
                            <Country data={country} selectCountry={selectCountry}></Country>
                        </div>

                    )
                }

            </div>
        </div>
    )
}
