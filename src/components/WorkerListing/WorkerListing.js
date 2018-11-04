import React, { Component } from 'react';
import './WorkerListing.css';

class WorkerListing extends Component {

  constructor() {
    super();

    let sample_worker = {
      name: "Darren Dawson",
      review_score: " ★ ★ ★ ☆ ☆ ",
      profile_img: "https://avatars1.githubusercontent.com/u/12383469?s=400&v=4",
      bio: "I am a self-starting worker who is flexible and can adapt to your workplace. I have managerial experience at Carl's Jr and worked as a barista at Starbucks before that. ",
      skills: ["skill 1", "skill 2", "skill 3", "skill 4"]

    };

    this.state = {
      worker: sample_worker
    }
  }


  // Render --------------------------------------------------------------------

  render() {
    let profile = this.state.worker;

    // get skills
    let skills = [];
    for (let i = 0; i < profile.skills.length; i++) {
      skills.push(<div key={i} className="wl-listing-skill">{profile.skills[i]}</div>)
    }


    return (
      <div className="worker-listing-container">

        {/* left half: worker information*/}
        <div className="worker-listing-left-half-container">
          <div className="wl-profile-photo-column">
            <div className="wl-profile-photo-container">
              <img id="wl-profile-photo-img" src={profile.profile_img}/>
            </div>

            <div className="wl-review-container">
              <h1 className="wl-review-star">{profile.review_score}</h1>
            </div>
          </div>

          <div className="wl-profile-description-column">
            <h1 className="wl-profile-h1">{profile.name}</h1>
            <h2 className="wl-profile-h2">15 successful jobs</h2>
            <p className="wl-profile-bio-p">{profile.bio}</p>
            <h3 className="wl-profile-h3">Related Skills</h3>
            <div className="wl-skills-container">
              {skills}
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
