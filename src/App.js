import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Homepage from './components/Homepage/Homepage.js';
import Navbar from './components/Navbar/Navbar.js';
import HomepageBIZ from './components/HomepageBIZ/HomepageBIZ.js';

class App extends Component {


  render() {
    return (

      <div className="App">
        <Navbar/>

        <div className="app-content-container">
          <HomepageBIZ/>
        </div>
        {/* <Homepage/> */}
      </div>
    );
  }
}

export default App;
