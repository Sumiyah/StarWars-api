import { Router } from '@reach/router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import People from './Components/People';
import Planets from './Components/Planets';

function App() {
  const [person, setPerson] = useState({})

  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col">
      <div className="card">
        <div className="card-title bg-dark text-center text-light p-3">
          <h1>Welcome to</h1> <span><img style={{height:`${100}px`}} src="https://cdn.iconscout.com/icon/free/png-256/starwars-6-569425.png" alt="Star Wars"/> </span> <h1>API!!</h1>
        </div>
        <div className="card-header bg-white">
      <Form />
      </div>

      <Router>
        <People path="/people/:id"/>
        <Planets path="/planets/:id"/>
      </Router>
      </div>

    </div>
    </div>
    </div>
  );
}

export default App;
