import React, { Component } from 'react';
import './HomepageBIZ.css';

// componenents
import JobListing from '../JobListing/JobListing.js';
import WorkerListing from '../WorkerListing/WorkerListing.js';
import NewJobListingForm from '../NewJobListingForm/NewJobListingForm.js';
import ViewWorker from '../ViewWorker/ViewWorker.js';

const EMPTY_LISTING = {
  job_title: "",
  company_name: "",
  start_time: "",
  end_time: "",
  date: "",
  wage: "15.00",
  description: "",
  skills: "",
  photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
  description: "",
};


// DATA ------------------------------------------------------------------------

const user1 = {
  name: "Darren Dawson",
  review_score: " ★ ★ ★ ☆ ☆ ",
  profile_img: "https://avatars1.githubusercontent.com/u/12383469?s=400&v=4",
  bio: "I am a self-starting worker who is flexible and can adapt to your workplace. I have managerial experience at Carl's Jr and worked as a barista at Starbucks before that. ",
  skills: ["Leadership", "Swimming", "Teaching"],
  num_jobs: "15 successful jobs"
}

const user2 = {
  name: "Collin Hurst",
  review_score: " ★ ★ ★ ★ ☆ ",
  profile_img: "https://avatars1.githubusercontent.com/u/29928221?s=400&v=4",
  bio: "I am Collin and Midtown got fired by me ",
  skills: ["Athletic", "Swimming", "Lifeguard Certified"],
  num_jobs: "7 successful jobs"
}

const user3 = {
  name: "Vaughn Fisher",
  review_score: " ★ ★ ★ ★ ★ ",
  profile_img: "https://media.licdn.com/dms/image/C5603AQF7-uqW8hiERA/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=lsKP9ufIzsAZfEKUy9gWwVjd-UGhcN9Odnl2mbHK-7k",
  bio: "I am a swim teacher part time! ",
  skills: ["Athletic", "CPR Certified", "Swimming", "Lifeguard Certified"],
  num_jobs: "10 successful jobs"
}

const user_final = {
  name: "Rohan Sachdeva",
  review_score: " ★ ★ ★ ★ ★ ",
  profile_img: "https://media.licdn.com/dms/image/C5603AQFJB52jXCx1ww/profile-displayphoto-shrink_800_800/0?e=1547078400&v=beta&t=0Syeo_9jY2f1ORGfwoLB618wFcL-92OWPk9gySSFTfc",
  bio: "Hello! ",
  skills: ["CPR Certified", "Swimming", "Athletic", "friendly", "Lifeguard Certified"],
  num_jobs: "12 successful jobs"
}

class HomepageBIZ extends Component {

  constructor() {
    super();

    // fake data for company job listing
    let listing1 = {
      job_title: "Lifeguard",
      company_name: "Just in Time Swimming",
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

    let listing2 = {
      job_title: "Lifeguard",
      company_name: "Just in Time Swimming",
      start_time: "4:00",
      end_time: "8:30",
      date: "8/24",
      status: "completed",
      wage: 15,

      photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
      location: "2600 Marine Way, Mountain View, Ca, 94043",
      description: "We need someone to make sure no more kids drown. ",
      skills: ["Swimming", "Coaching", "Lifeguard Certified"]
    };

    let listings = [];
    listings.push({listing: listing1, workers: [0, 1, 2], completed: false});
    listings.push({listing: listing2, workers: [0], completed: true});




    this.state = {
      new_form_active: false,
      view_worker_active: false,
      company_name: "Just in Time Swimming",

      new_listing: EMPTY_LISTING,
      listings: listings,
      final_active: false
    };
  }



  // On Click ------------------------------------------------------------------


  onClick_ToggleNewFormActive = () => {
    let new_state = !this.state.new_form_active;
    this.setState({
      new_form_active: new_state
    });
  }

  onClick_CancelListing = () => {

    const EMPTY_LISTING = {
      job_title: "",
      company_name: "",
      start_time: "",
      end_time: "",
      date: "",
      wage: "15.00",
      description: "",
      skills: "",
      photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
      description: "",
    };

    this.setState({
      new_form_active: false,
      new_listing: EMPTY_LISTING
    });
  }
  // publish new listing
  onClick_PublishNewListing = () => {

    const EMPTY_LISTING = {
      job_title: "",
      start_time: "",
      end_time: "",
      date: "",
      wage: "15.00",
      description: "",
      skills: "",
      photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
      description: "",
    };

    // fix new list
    let newListing = this.state.new_listing;
    let skillsList = newListing.skills.split(",");
    newListing['skills'] = skillsList;
    newListing['status'] = "live";
    newListing['location'] = "2600 Marine Way, Mountain View, Ca, 94043";


    // add to other listings
    let allListings = this.state.listings;
    allListings.unshift({listing: newListing, workers: []});
    this.setState({listings: allListings, new_listing: EMPTY_LISTING, new_form_active: false});
  }



  // opens view worker
  onClick_OpenViewWorker = () => {
    this.setState({view_worker_active: true});
  }

  // closes viewWorker
  onClick_CloseViewWorker = () => {
    this.setState({view_worker_active: false});
  }

  // update
  onClick_Update = () => {
    this.setState({final_active: true});
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
            publishNewListing={this.publishNewListing}
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


    // get right button
    let button;
    let cancelButton;
    if (this.state.new_form_active) {
      button = <button id="new-listing-button" onClick={this.onClick_PublishNewListing}>Publish Job</button>;
      cancelButton = <button id="cancel-listing-button" onClick={this.onClick_CancelListing}>Cancel</button>
    } else {
      button = <button id="new-listing-button" onClick={this.onClick_ToggleNewFormActive}>New Job Listing</button>;
    }


    // render
    return (
      <div className="hpb-command-bar-container">
        <div>
          <h1 className="hbp-h1">{this.state.company_name}</h1>
        </div>
        <div>
          {cancelButton}
          {button}
        </div>

      </div>
    );
  }


  // renders the job listings
  renderLiveJobListings = () => {
    let results = [];

    for (let i = 0; i < this.state.listings.length; i++) {

      if (!this.state.listings[i]['completed']) {
        results.push(<JobListing listing={this.state.listings[i]['listing']} updateClick={this.onClick_Update}/>);

        let user;
        if (this.state.final_active && i === 0) {
          results.push(<WorkerListing worker={user_final} openViewWorker={this.onClick_OpenViewWorker}/>);
        } else {
          for (let j = 0; j < this.state.listings[i]['workers'].length; j++) {
            if (j === 0) {
              user = user3;
            } else if (j === 1) {
              user = user2;
            } else if (j === 2) {
              user = user1;
            }
            results.push(<WorkerListing worker={user} openViewWorker={this.onClick_OpenViewWorker}/>);
          }
        }
        results.push(<div className="hpb-50px-space"></div>);
        results.push(<div className="hpb-50px-space"></div>);
        results.push(<div className="hpb-50px-space"></div>);
      }
    }

    return results
  }


  // renders job listings that have already completed
  renderCompletedListings = () => {
    let results = [];

    for (let i = 0; i < this.state.listings.length; i++) {
      if (this.state.listings[i]['listing']['status'] === "completed") {
        results.push(<JobListing listing={this.state.listings[i]['listing']}/>);
      }
    }


    results.push(<div className="hpb-50px-space"></div>);
    results.push(<div className="hpb-50px-space"></div>);
    results.push(<div className="hpb-50px-space"></div>);

    return results;
  }


  renderBorderTitle = (title) => {
    return (
      <div className="hpb-border-title-container">
        <div className="hpb-border-left"></div>
        <h1 className="hpb-border-title-h1">{title}</h1>
        <div className="hpb-border-right"></div>
      </div>
    );
  }



  renderViewWorker = () => {

    if (this.state.view_worker_active) {
      return (
        <div className="hpb-view-worker-container">
          <ViewWorker
            closeViewWorker={this.onClick_CloseViewWorker}
          />
        </div>
      );
    }
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
              {this.renderBorderTitle("Live Listings")}
              {this.renderLiveJobListings()}

              {/* Renders completed job listings */}
              {this.renderBorderTitle("Completed Listings")}
              {this.renderCompletedListings()}
            </div>
          </div>

        </div>

        {this.renderViewWorker()}
      </div>
    );
  }
}

export default HomepageBIZ;
