import React, { useEffect, useState } from 'react'
import axios from 'axios';

const People = props => {
  const [person, setPerson] = useState({})
  const [isErr, setIsErr] = useState(false)

  useEffect(() => {
    setIsErr(false)
    axios.get(`https://swapi.dev/api/people/${props.id}`)
      .then(response => {
        console.log(response)
        setPerson(response.data)
        console.log(person)
      })
      .catch(err => {
        if (err.response && err.response.status === 404) {
          setIsErr(true);
        } else {
          console.error(err);
        }
      })
  }, [props])

  return (
    <>{
      !isErr ?
        <div className="card-body">
          <h2><em>{person.name}</em></h2>
          <p><b>Height: </b> {person.height} cm</p>
          <p><b>Mass: </b> {person.mass} Kg</p>
          <p><b>Hair Color: </b> {person.hair_color}</p>
          <p><b>Skin Color: </b> {person.skin_color}</p>
          <p><b>Eye Color: </b> {person.eye_color}</p>
          <p><b>Gender: </b> {person.gender}</p>
        </div>
        :
        <p>These aren't the droids you're looking for</p>
    }
    </>
  )
}

export default People
