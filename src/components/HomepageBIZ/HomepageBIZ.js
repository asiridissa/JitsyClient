import React, { Component } from 'react';
import './HomepageBIZ.css';

// componenents
import JobListing from '../JobListing/JobListing.js';
import WorkerListing from '../WorkerListing/WorkerListing.js';

class HomepageBIZ extends Component {

  constructor() {
    super();

    // fake data for company job listing
    let listing1 = {
      job_title: "Part Time Hacker",
      start_time: "4:00",
      end_time: "8:30",
      date: "8/24",
      status: "live",
      wage: 15,

      location: "2600 Marine Way, Mountain View, Ca, 94043",
      description: "At this hack, your only challenge is to create a brand NEW solution that saves a small business time or money. It's that simple!",
      skills: ["React.js Experience", "Flask Development", "Willing to fuck up the tax code for all Americans for profit"]
    };

    this.state = {
      company_name: "Intuit SmallBizHack",

      listing: listing1
    };
  }


  // Render --------------------------------------------------------------------

  // command bar is at the top, major interaction keys
  renderCommandBar = () => {
    return (
      <div className="hpb-command-bar-container">
        <div>
          <h1 className="hbp-h1">{this.state.company_name}</h1>
        </div>
        <button id="new-listing-button">New Job Listing</button>
      </div>
    );
  }


  // renders <HomepageBIZ/>
  render() {
    return (
      <div className="homepage-biz-container">
        <div className="hpb-column-container">

          {/* command bar lets you create a new posting*/}
          {this.renderCommandBar()}

          <div className="hpb-listings-container">
            <div className="hpb-listings-scroll-container">
              <JobListing listing={this.state.listing}/>
              <WorkerListing/>
              <WorkerListing/>
              <WorkerListing/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default HomepageBIZ;
