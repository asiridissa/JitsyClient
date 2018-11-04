import React, { Component } from 'react';
import './WorkerListing.css';

class WorkerListing extends Component {


  render() {
    return (
      <div className="worker-listing-container">

        {/* left half: worker information*/}
        <div className="worker-listing-left-half-container">

        </div>

        {/* right half: video */}
        <div className="worker-listing-right-half-container">
          <div className="wl-video-container">

          </div>
        </div>
      </div>
    );
  }
}

export default WorkerListing;
