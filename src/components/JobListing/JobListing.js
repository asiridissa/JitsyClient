import React, { Component } from 'react';
import './JobListing.css';

class JobListing extends Component {

  constructor() {
    super();


    this.state = {
      company_name: "Intuit SmallBizHack",
    };
  }


  // Render --------------------------------------------------------------------


  renderSkills = (listing) => {

    //
    let skills = [];
    for (let i = 0; i < listing.skills.length; i++) {
      skills.push(<div key={i} className="jl-listing-skill">{listing.skills[i]}</div>);
    }

    return (
      <div className="jl-listing-skills-container">
        {skills}
      </div>
    );
  }

  // renders a job listing
  renderJobListings = () => {

    let listing = this.props.listing;

    return (
      <div className="jl-listing-container">

        {/* Top bar has name of the job and when the job is scheduled for */}
        <div className="jl-listing-top-bar">
          <div>
            <h1 className="jl-listing-h1">{listing.job_title}</h1>
            <h3 className="jl-listing-h3">{listing.location}</h3>
          </div>
          <div>
            <div className="jl-listing-date-group-container">
              <h2 className="jl-listing-date-item">{listing.date}</h2>
              <h2 className="jl-listing-date-item">|</h2>
              <h2 className="jl-listing-date-item">{listing.start_time}-{listing.end_time}</h2>
            </div>
            <div>
              <h2 id="jl-listing-wage">${listing.wage}/hr</h2>
            </div>
          </div>

        </div>


        {/* Description of job */}
        <div className="jl-listing-description-container">
          <p>{listing.description}</p>
        </div>

        {/* Room for Required skills */}
        <div className="jl-listing-bottom-bar">
          <div className="jl-listing-bottom-bar-left-container">
            {this.renderSkills(listing)}
          </div>

          <div className="jl-listing-bottom-bar-right-container">
            <div className="jl-listing-status-container">
              <h2 className="jl-live-status-description">status: <span id="jl-live-status">{listing.status}</span></h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // renders <HomepageBIZ/>
  render() {
    return (
      <div>
        {this.renderJobListings()}
      </div>
    );
  }
}

export default JobListing;