import React, { Component } from 'react';
import './WorkerListing.css';

class WorkerListing extends Component {


  render() {
    return (
      <div className="worker-listing-container">

        {/* left half: worker information*/}
        <div className="worker-listing-left-half-container">
          <div className="wl-profile-photo-column">
            <div className="wl-profile-photo-container">
              <img id="wl-profile-photo-img" src="https://avatars1.githubusercontent.com/u/12383469?s=400&v=4"/>
            </div>

            <div className="wl-review-container">
              <h1 className="wl-review-star"> ★ ★ ★ ☆ ☆ </h1>
            </div>
          </div>
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
