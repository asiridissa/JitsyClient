import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Homepage from './components/Homepage/Homepage.js';
import Navbar from './components/Navbar/Navbar.js';
import HomepageBIZ from './components/HomepageBIZ/HomepageBIZ.js';
import HomepageWORKER from './components/HomepageWORKER/HomepageWORKER.js';

class App extends Component {


  constructor() {
    super();

    this.state = {
      business_active: true
    };
  }


  // On Click ------------------------------------------------------------------

  onClick_SetBusinessActive = () => {
    this.setState({business_active: true});
  }

  onClick_SetBusinessInActive = () => {
    this.setState({business_active: false});
  }

  // Render --------------------------------------------------------------------


  render() {

    if (this.state.business_active) {
      return (
        <div className="App">
          <Navbar
            clickBusiness={this.onClick_SetBusinessActive}
            clickWorker={this.onClick_SetBusinessInActive}
          />
          <div className="app-content-container">
            <HomepageBIZ/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar
            clickBusiness={this.onClick_SetBusinessActive}
            clickWorker={this.onClick_SetBusinessInActive}
          />
          <div className="app-content-container">
            <HomepageWORKER/>
          </div>
        </div>
      );
    }

  }
}

export default App;
