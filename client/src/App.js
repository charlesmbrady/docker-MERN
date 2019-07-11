import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import API from './apis';

function App() {
  const [checks] = useState(['no checks']);

  useEffect( () => {
    API.getChecks()
  }, []);

  const newCheck = () => {
    console.log("newCheck clicked")
    // axios.post("/newCheck").then( res => console.log("new check proposed" + res))
    API.newCheck({name:"new check req"});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Basic dockerized react app
        </p>
        <button onClick={() => newCheck()}>New Check</button>
        {checks.map( check => (
          <p>{check}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
