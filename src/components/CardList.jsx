import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const API = 'https://rickandmortyapi.com/api/character'

const CardList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {axios.get(API)
        .then(function (response) {
            setData(response.data.results)
        })
        .catch(function (error) {
            console.log(`"Lo siento mano, falló" ${error.message}`)
        })
        .finally(function () {
            setLoading(false)
        })},[])

    return (
            <>
               {
                loading ? <p>Loading</p> :(
                    data.map((data) => {
                        return (
                            <Card status = {data.status} id = {data.id} name= {data.name} species = {data.species} image = {data.image}/>
                        )
                    }
                )
                )
}
            </>
    )
}

export default CardList