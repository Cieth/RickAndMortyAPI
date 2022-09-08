import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams("1");
  const [data, setData] = useState([]);
  let { name, species, status, image, gender, type } = data;
  let API = `https://rickandmortyapi.com/api/character/${id}`;
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(function (error) {
        console.log(`"Lo siento mano, falló" ${error.message}`);
      });
  }, [API]);

  return (
    <div className="card-detail" key={id}>
      <div className="card-container-detail">
        <div className="img-container-detail">
          <img src={image} alt={name} />
        </div>
        <div className="card-body-detail">
          <h1>{name}</h1>
          <div className="card-status-detail">
            <div
              className={
                status === "Alive"
                  ? "On"
                  : status === "Dead"
                  ? "Off"
                  : "Unknown"
              }
            ></div>
            <p>{status}</p>
          </div>
          <div className="card-extra-detail">
            <p>Gender: {gender}</p>
            {type === "" ? <p>Type: No type</p> : <p>Type: {type}</p>}
          </div>
          <p className="card-specie-detail">Specie: {species}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
