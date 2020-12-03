import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Planets = props => {
  const [planet, setPlanet] = useState({})
  const [isErr, setIsErr] = useState(false)

  useEffect(() => {
    setIsErr(false)
    axios.get(`https://swapi.dev/api/planets/${props.id}`)
      .then(response => {
        console.log(response)
        setPlanet(response.data)
        console.log(planet)
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          setIsErr(true);
        } else {
          console.error(err);
        }
      })
  }, [props])

  const check = x => {
    if (x === "unknown") {
      return "unknown"
    } else {
      return parseInt(x).toLocaleString()
    }
  }


  return (
    <>
      {
        !isErr ?
          <div className="card-body">
            <h2><em>{planet.name}</em></h2>
            <p><b>Climate: </b> {planet.climate}</p>
            <p><b>Terrain: </b> {planet.terrain}</p>
            <p><b>Surface Water: </b> {planet.surface_water}</p>
            <p><b>Population: </b>  {check(planet.population)}</p>
            <p><b>Gravity: </b> {planet.gravity}</p>
          </div>
          :
          <p>These aren't the droids you're looking for</p>

      }
    </>
  )
}

export default Planets
