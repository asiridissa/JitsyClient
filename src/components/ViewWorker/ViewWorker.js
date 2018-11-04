import React, { Component } from 'react';
import './ViewWorker.css';
import YouTube from 'react-youtube';

class ViewWorker extends Component {

  constructor() {
    super();

    let review1 = {title: "Great Worker!", company: "The Coffee Shop", "score": " ★ ★ ★ ★ ★ ", content: "Collin really put the extra effort into making coffee"};
    let review2 = {title: "An OK Worker!", company: "The Tea Shop", score: " ★ ★ ★ ★ ☆ ", content: "He did his work and we had no problems"};
    let reviews = [review1, review2];

    let experience1 = {title: "Lifeguard", company: "The Swimming Company", description: "He made sure no one actually drowned"};
    let experience2 = {title: "Barista", company: "Midtown", description: "Did he work here?"};
    let experience = [experience1, experience2];

    let worker = {
      name: "Collin Hurst",
      bio: "I am Collin; Midtown got fired by me.",
      review_score: " ★ ★ ★ ★ ☆ ",
      skills: ["Athletic", "Swimming", "Lifeguard Certified"],
      profile_img: "https://avatars1.githubusercontent.com/u/29928221?s=400&v=4",
      num_jobs: "7 successful jobs",
      video_id: "snh-E-lQbMQ",
      reviews: reviews,
      experience: experience
    };


    this.state = {
      worker: worker
    }
  }



  // render --------------------------------------------------------------------

  renderTopBar = () => {

    let worker = this.state.worker;

    let skills = [];
    for (let i = 0; i < worker.skills.length; i++) {
      skills.push(<div key={i} className="vw-skill">{worker.skills[i]}</div>)
    }

    return (
      <div className="vw-top-bar-container">
        <div className="vw-profile-photo-column">
          <div className="vw-photo-container">
            <img id="vw-photo-img" src={worker.profile_img}/>
          </div>
        </div>

        <div className="vw-description-column">
          <div className="open-link-bar">
            <h1 id="vw-name-h1">{worker.name}</h1>
            <a className="open-link-button" href="http://localhost:34163">Call</a>
          </div>
          <h1 id="vw-num-jobs">{worker.num_jobs} - <span id="vw-review-stars">{worker.review_score}</span></h1>
          <p id="vw-bio">{worker.bio}</p>

          <h2 className="vw-h2">Skills & Certificates</h2>
          <div className="vw-skills-container">
            {skills}
          </div>
        </div>
      </div>
    );
  }


  //
  renderVideoBar = () => {
    return (
      <div className="vw-videobar-container">
        {this.renderYoutubeVideo()}
      </div>
    );
  }

  renderYoutubeVideo = () => {
    const opts = {
      height: '400', // 390
      width: '750', // 640
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube
        videoId={this.state.worker.video_id}
        opts={opts}
      />
    );
  }



  renderReview = (review) => {
    return (
      <div className="vw-review-container">
        <div className="vw-review-top-bar">
          <h1 className="vw-review-title">{review.title} - {review.company}</h1>
          <h1 className="vw-review-stars">{review.score}</h1>
        </div>

        <p className="vw-review-p">{review.content}</p>

      </div>
    );
  }

  // render reviews
  renderReviewsBar = () => {

    let results = [];

    let reviews = this.state.worker.reviews;
    for (let i = 0; i < reviews.length; i++) {
      results.push(this.renderReview(reviews[i]));
    }
    return (
      <div className="vw-reviews-bar-container">
        <h1 id="review-title">Reviews</h1>
        {results}
      </div>
    );
  }



  renderExperience = (experience) => {
    return (
      <div className="vw-review-container">
        <div className="vw-review-top-bar">
          <h1 className="vw-review-title">{experience.title} - {experience.company}</h1>
        </div>

        <p className="vw-review-p">{experience.description}</p>
      </div>
    );
  }


  renderExperienceBar = () => {

    let results = [];
    let experience = this.state.worker.experience;
    for (let i = 0; i < experience.length; i++) {
      results.push(this.renderExperience(experience[i]));
    }

    return (
      <div className="vw-experience-bar-container">
        <h1 id="review-title">Experience</h1>
        {results}
      </div>
    );
  }

  // renders <ViewWorker/>
  render() {
    return (
      <div className="vw-full-container">
        <div className="vw-side-column" onClick={this.props.closeViewWorker}></div>
        <div className="vw-column-scroll-container">
          <div className="vw-column-container">
            <div className="vw-top-gray"></div>
            {this.renderTopBar()}
            {this.renderVideoBar()}
            {this.renderReviewsBar()}
            {this.renderExperienceBar()}
          </div>
        </div>

        <div className="vw-side-column" onClick={this.props.closeViewWorker}></div>
      </div>
    );
  }
}

export default ViewWorker;
