import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li className="App-link">Built With React</li>
          <li className="App-link">Served By NGINX</li>
          <li className="App-link">Stored On Github</li>
          <li className="App-link">CI/CD Through Travis CI</li>
          <li className="App-link">Deployed On AWS (elasticbeanstalk)</li>
          <li className="App-link">Developed by enigma6174</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
