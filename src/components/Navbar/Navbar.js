import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {


  render() {
    return (
      <div className="navbar-container">

        <div className="nb-side-container">
          <h1 className="nb-h2 nb-color-white">Jitsy</h1>
        </div>

        <div className="nb-side-container">
          <h2 className="nb-h2">Link 1</h2>
          <h2 className="nb-h2">Link 2</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
