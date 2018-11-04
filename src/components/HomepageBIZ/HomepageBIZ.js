import React, { Component } from 'react';
import './HomepageBIZ.css';

class HomepageBIZ extends Component {

  constructor() {
    super();

    // fake data for company job listing
    let listing1 = {
      job_title: "Part Time Hacker",
      start_time: "4:00",
      end_time: "8:30",
      date: "8/24",

      location: "2600 Marine Way, Mountain View, Ca, 94043",
      description: "At this hack, your only challenge is to create a brand NEW solution that saves a small business time or money. It's that simple!",
      skills: ["React.js Experience", "Flask Development", "Fuck up the tax code for all Americans"]
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


  renderSkills = (listing) => {

    //
    let skills = [];
    for (let i = 0; i < listing.skills.length; i++) {
      skills.push(<div key={i} className="hpb-listing-skill">{listing.skills[i]}</div>);
    }

    return (
      <div className="hpb-listing-skills-container">
        {skills}
      </div>
    );
  }

  // renders a job listing
  renderJobListings = () => {

    let listing = this.state.listing;

    return (
      <div className="hpb-listing-container">

        {/* Top bar has name of the job and when the job is scheduled for */}
        <div className="hbp-listing-top-bar">
          <div>
            <h1 className="hpb-listing-h1">{listing.job_title}</h1>
            <h3 className="hpb-listing-h3">{listing.location}</h3>
          </div>
          <div>
            <div className="hpb-listing-date-group-container">
              <h2 className="hpb-listing-date-item">{listing.date}</h2>
              <h2 className="hpb-listing-date-item">|</h2>
              <h2 className="hpb-listing-date-item">{listing.start_time}-{listing.end_time}</h2>
            </div>
            <div>
              <h2 id="hpb-listing-wage">$15</h2>
            </div>
          </div>

        </div>


        {/* Description of job */}
        <div className="hpb-listing-description-container">
          <p>{listing.description}</p>
        </div>

        {/* Room for Required skills */}
        {this.renderSkills(listing)}

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

          {/* renders listings */}
          {this.renderJobListings()}
        </div>
      </div>
    );
  }
}

export default HomepageBIZ;
