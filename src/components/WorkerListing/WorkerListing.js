import React, { Component } from 'react';
import './WorkerListing.css';

import YouTube from 'react-youtube';

class WorkerListing extends Component {

  constructor() {
    super();

    let sample_worker = {
      name: "Darren Dawson",
      review_score: " ★ ★ ★ ☆ ☆ ",
      profile_img: "https://avatars1.githubusercontent.com/u/12383469?s=400&v=4",
      bio: "I am a self-starting worker who is flexible and can adapt to your workplace. I have managerial experience at Carl's Jr and worked as a barista at Starbucks before that. ",
      skills: ["skill 1", "skill 2", "skill 3", "skill 4"],
      num_jobs: "15 successful jobs"
    };

    this.state = {
      worker: sample_worker
    }
  }


  // Render --------------------------------------------------------------------


  renderYoutubeVideo = () => {
    const opts = {
      height: '270', // 390
      width: '550', // 640
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
     // access to player in all event handlers via event.target
     event.target.pauseVideo();
   }


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
            <h1 className="wl-profile-h1" onClick={this.props.openViewWorker}>{profile.name}</h1>
            <h2 className="wl-profile-h2">{profile.num_jobs}</h2>
            <p className="wl-profile-bio-p">{profile.bio}</p>
            <h3 className="wl-profile-h3">Related Skills</h3>
            <div className="wl-skills-container">
              {skills}
            </div>
          </div>
        </div>

        {/* right half: video */}
        <div className="worker-listing-right-half-container">
          {this.renderYoutubeVideo()}
        </div>
      </div>
    );
  }
}

export default WorkerListing;
