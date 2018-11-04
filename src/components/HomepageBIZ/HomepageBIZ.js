import React, { Component } from 'react';
import './HomepageBIZ.css';

// componenents
import JobListing from '../JobListing/JobListing.js';
import WorkerListing from '../WorkerListing/WorkerListing.js';
import NewJobListingForm from '../NewJobListingForm/NewJobListingForm.js';

class HomepageBIZ extends Component {

  constructor() {
    super();

    // fake data for company job listing
    let listing1 = {
      job_title: "Lifeguard",
      start_time: "4:00",
      end_time: "8:30",
      date: "8/24",
      status: "live",
      wage: 15,

      photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
      location: "2600 Marine Way, Mountain View, Ca, 94043",
      description: "We need someone to make sure no more kids drown. ",
      skills: ["Swimming", "Coaching", "Lifeguard Certified"]
    };

    let listings = [];
    listings.push(listing1);
    listings.push(listing1);


    let empty_listing = {
      job_title: "Test",
      start_time: "",
      end_time: "",
      date: "",
      wage: "15.00",
      description: "",
      skills: ""
    };


    this.state = {
      new_form_active: true,
      company_name: "Just in Time Swimming",

      new_listing: empty_listing,
      listing: listing1
    };
  }



  // On Click ------------------------------------------------------------------


  onClick_ToggleNewFormActive = () => {
    let new_state = !this.state.new_form_active;
    this.setState({
      new_form_active: new_state
    });
  }

  // publish new listing
  publishNewListing = () => {

  }

  // Update Info ---------------------------------------------------------------

  // updates info in new listing
  updateNewListing = (category, value) => {
    let newListing = this.state.new_listing;
    newListing[category] = value;
    this.setState({new_listing: newListing});
  }


  // Render --------------------------------------------------------------------


  //
  renderNewJobListingForm = () => {
    if (this.state.new_form_active) {
      return (
        <div>
          <NewJobListingForm
            listing={this.state.new_listing}
            updateNewListing={this.updateNewListing}
          />
        </div>
      );
    } else {

      // No form
      return;
    }
  }


  // command bar is at the top, major interaction keys
  renderCommandBar = () => {
    return (
      <div className="hpb-command-bar-container">
        <div>
          <h1 className="hbp-h1">{this.state.company_name}</h1>
        </div>
        <button id="new-listing-button" onClick={this.onClick_ToggleNewFormActive}>New Job Listing</button>
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

              {/* renders form for creating a new job listing*/}
              {this.renderNewJobListingForm()}

              {/* Job listings */}
              <JobListing listing={this.state.listing}/>
              <div className="hpb-50px-space"></div>
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
