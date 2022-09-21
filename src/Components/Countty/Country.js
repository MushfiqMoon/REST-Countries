import React from 'react'

function Country(props) {
    console.log(props);

    const { flags, name, population, region, area } = props.data

    return (
        <>
            <div className="card mb-3">
                <div className="p-2 border border-warning bg-warning">
                    <img src={flags.svg} className="card-img-top" alt="..." />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name.common}</h5>
                    <p className="card-text">Population: {population}
                        <br />Region: {region}
                        <br />Area: {area}</p>
                    <a href="#" className="btn btn-primary">View More</a>
                </div>
            </div>
        </>


    )
}

export default Country