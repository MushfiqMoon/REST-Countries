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
                    <a href="#" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">View More</a>
                </div>
            </div>

            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="card-title">{name.common}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>


    )
}

export default Country