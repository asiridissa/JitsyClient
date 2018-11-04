import React, { Component } from 'react';
import './HomepageWORKER.css';

import JobListing from '../JobListing/JobListing.js';

class HomepageWORKER extends Component {


  constructor() {
    super();

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
      skills: ["Swimming", "Coaching", "Lifeguard Certified"],

      applied: false
    };

    let listing2 = {
      job_title: "Guardian Angel",
      company_name: "Just in Time Swimming",
      start_time: "4:00",
      end_time: "8:30",
      date: "8/24",
      status: "completed",
      wage: 15,

      photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
      location: "2600 Marine Way, Mountain View, Ca, 94043",
      description: "We need someone to make sure no more kids drown. ",
      skills: ["Swimming", "Coaching", "Lifeguard Certified"],

      applied: false
    };

    this.state = {
      listings: [listing1, listing2, listing1, listing2, listing1]
    };
  }


  // On Click ------------------------------------------------------------------

  onClick_ApplyButton = (index) => {
    let listings = this.state.listings;
    listings[index]['applied'] = true;
    this.setState({listings: listings});
  }


  // Render --------------------------------------------------------------------


  renderListings = () => {

    let listingsToRender = [];
    for (let i = 0; i < this.state.listings.length; i++) {
      listingsToRender.push(
        <div className="hpw-listing-container" key={i}>
          <JobListing
            listing={this.state.listings[i]}
            renderApplyButton={true}
            onClick_ApplyButton={this.onClick_ApplyButton}
            index={i}
          />
        </div>
      );
    }

    return (
      <div>
        {listingsToRender}
      </div>
    );
  }


  // Renders <HomepageWORKER/>
  render() {
    return (
      <div className="hpw-full-container">
        <div className="hpw-column-container">
          <div className="hpw-listing-scroll">
            {this.renderListings()}
          </div>
        </div>
      </div>
    );
  }
}

export default HomepageWORKER;
