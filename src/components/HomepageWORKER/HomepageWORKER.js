import React, { Component } from 'react';
import './HomepageWORKER.css';

import Requests from '../../network/requests.js';


import JobListing from '../JobListing/JobListing.js';


let requests = new Requests();


class HomepageWORKER extends Component {


  constructor() {
    super();

    let listing1 = {
      job_title: "Swimming Instructor",
      company_name: "Swim School",
      start_time: "3:00 PM",
      end_time: "5:00 PM",
      date: "11/7",
      status: "live",
      wage: 15,

      photo: "https://st.depositphotos.com/1000647/2519/i/950/depositphotos_25199049-stock-photo-swimming-pool.jpg",
      location: "2600 Marine Way, Mountain View, Ca, 94043",
      description: "We need a part time worker in order to cover a shift! Has to be good with kids ",
      skills: ["Swimming", "Coaching", "Lifeguard Certified", "good with children"],

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



    //------------------------

    let listing3 = {
      applied: false,
      company_name: "Just in Time Swimming",
      date: "8/24",
      description: "We need someone to make sure no more kids drown. ",
      end_time: "8:30",
      job_title: "Lifeguard",
      location: "2600 Marine Way, Mountain View, Ca, 94043",
      photo: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.westjet.com%2Fwp-content%2Fuploads%2F2014%2F10%2FWestJet-Vacations-secluded-Caribbean-beach.jpg&f=1",
      skills: ["Swimming" , "Coaching" , "Lifeguard",  "Certified"],
      start_time: "4:00",
      status: "live",
      wage: 15
    }

    let listing4 = {
      applied: false,
      company_name: "Json's Bar",
      date: "11/5",
      description: "We need a waiter to help cover the evening shift for a sick employee ",
      end_time: "9:30",
      job_title: "Waiter",
      location: "1298 Fuller Road, Mountain View, Ca, 94040",
      photo: "http://media.istockphoto.com/photos/empty-bar-picture-id519051249?k=6&m=519051249&s=612x612&w=0&h=FMdNDji9NtTWDHOShxUbl_i3U1msz5X4wcR5fg2kDbc=",
      skills: ["Waiting" , "Communication"],
      start_time: "1:00",
      status: "live",
      wage: 12
    }
    let listing5 = {
      applied: false,
      company_name: "Ruth and Arnold's Antiques",
      date: "11/23",
      description: "We need an extra clerk for this upcoming Black Friday afternoon. We are expectiong a lot of customers and are short on staff. Thank you",
      end_time: "3:30",
      job_title: "Clerk",
      location: "100 Old Tech Street, Palo Alto, Ca",
      photo: "https://images.fineartamerica.com/images-medium-large-5/french-antique-store-in-clermont-ferrand-georgia-fowler.jpg",
      skills: ["Organization", "Microsoft Office", "Sales"],
      start_time: "1:00",
      status: "live",
      wage: 18
   }

   let listing69 = {
         job_title: "Security Guard",
         company_name: "West Materials Inc",
         start_time: "7:00",
         end_time: "11:30",
         date: "11/20",
         status: "live",
         wage: 20,

         photo: "http://toledoglassinc.com/communities/2/000/002/035/642//images/13384992.jpg",
         location: "9332 Walter Road, Sunnyvale, Ca",
         description: "We would like some extra security for the holiday season",
         skills: ["Security Certification"],
         applied: false

   }

    //------------------

    this.state = {
      listings: [listing1, listing4, listing5, listing69, listing3]
    };
  }


  componentDidMount() {
    // alert("test");
    console.log("fuck");
    // requests.getListings();
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
