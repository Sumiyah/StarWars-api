import { navigate } from '@reach/router'
import React, { useState } from 'react'


const Form = () => {
  const [request, setRequest] = useState('')
  const [id, setID] = useState('')

  const submitHandler = e =>{
    e.preventDefault()
    navigate(`/${request}/${id}`)
    setRequest('')
    setID('')
  }

  return (
    <div>
          <form onSubmit={submitHandler} className="form-inline justify-content-center">
            <div className="input-group mx-2">
            <div className="input-group-prepend">
              <div className="input-group-text">Search For: </div>
            </div>
              <select className="custom-select form-control" onChange={e=> setRequest(e.target.value)}  value = {request}>
                <option selected>Choose.. </option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
              </select>
            </div>
            <div className="input-group mx-2">
              <div className="input-group-prepend">

              <div className="input-group-text">ID: </div>
              </div>
              <input type="number" className="form-control " min="1" value ={id} onChange={e=> setID(e.target.value)} />
            </div>
            <button type="submit" className=" mx-2 btn btn-outline-warning ">Search!!</button>
          </form>
        </div>
      
  )
}

export default Form
