import React from 'react'


const CardDetails = ({ name, species, status, id, image , gender , type, origin}) => {
  const {nameOrigin,urlOrigin} = origin
    return (
        <div className='card-detail' key={id}>
            <div className='card-container-detail'>
                <div className="img-container-detail">
                    <img src={image} alt={name} />
                </div>
                <div className="card-body-detail">
                    <h1>{name}</h1>
                    <div className="card-status-detail" >
                        <div className={
                            status === "Alive" ? "On"
                            : status === "Dead" ? "Off"
                            : "Unknown"
                            }>
                        </div>
                        <p>{status}</p>
                    </div>
                    <div className='card-extra-detail'>
                        <p>Gender: {gender}</p>
                        {
                            type === "" ? <p>Type: No type</p> :<p>Type: {type}</p>
                        }
                        <p>Location: {nameOrigin}</p>
                        <p>Url: {urlOrigin}</p>


                    </div>
                    <p className="card-specie-detail" >Specie: {species}</p>
                </div>
            </div>
        </div >
  )
}

export default CardDetails