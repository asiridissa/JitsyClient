import React, { Component } from 'react';
import './Navbar.css';

// logo
import jitsy_logo from '../../jitsy_logo.svg';

class Navbar extends Component {


  render() {
    return (
      <div className="navbar-container">

        <div className="nb-side-container">
          <img id="nb-logo" src={jitsy_logo}/>
          <h1 id="nb-title-text">Jitsy</h1>
        </div>

        <div className="nb-side-container">
          <h2 className="nb-h2" onClick={this.props.clickBusiness}>Business</h2>
          <h2 className="nb-h2" onClick={this.props.clickWorker}>Worker</h2>
        </div>
      </div>
    );
  }
}

export default Navbar;
