import React from 'react'
import '../scss/Components/Cards.scss'


const Card = ({ name, species, status, id, image }) => {
    return (
        <div className='card' key={id}>
            <div className='card-container'>
                <div className="img-container">
                    <img src={image} alt={name} />
                </div>
                <div className="card-body">
                    <h1>{name}</h1>
                    <div className="card-status" >
                        <div className={
                            status === "Alive" ? "On"
                            : status === "Dead" ? "Off"
                            : "Unknown"
                            }>
                        </div>
                        <p>{status}</p>
                    </div>
                    <p className="card-specie" >Specie: {species}</p>
                </div>
            </div>
        </div >

    )
}

export default Card