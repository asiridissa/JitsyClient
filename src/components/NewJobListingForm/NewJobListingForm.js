import React, { Component } from 'react';
import './NewJobListingForm.css';

class NewJobListingForm extends Component {

  constructor() {
    super();

    this.state = {

    };
  }


  // Update --------------------------------------------------------------------
  /*
    - For passing info back to <HomepageBiz/>
  */

  updateInputValue = (value, category) => {
    this.props.updateNewListing(category, value);
  }

  // Render --------------------------------------------------------------------

  render() {
    return (
      <div className="njlf-container">
        <div className="njlf-column">

          <h1 className="njlf-h1">New Job Listing</h1>
          <div>

            {/* JOB TITLE */}
            <div className="njlf-row">
              <div className="njlf-category-title-container">
                <h1>Job Title</h1>
              </div>

              <div className="njlf-input-container">
                <input
                  className="njlf-input"
                  value={this.props.listing.job_title}
                  onChange={evt => this.updateInputValue(evt.target.value, "job_title")}
                />
              </div>
            </div>

            {/* WAGE */}
            <div className="njlf-row">
              <div className="njlf-category-title-container">
                <h1>Wage</h1>
              </div>

              <div className="njlf-input-container">
                <input
                  className="njlf-input"
                  value={this.props.listing.wage}
                  onChange={evt => this.updateInputValue(evt.target.value, "wage")}
                />
              </div>
            </div>

            {/* DATE */}
            <div className="njlf-row">
              <div className="njlf-category-title-container">
                <h1>Date</h1>
              </div>

              <div className="njlf-date-container">

                <div className="njlf-date-pair-container">
                  <h2 className="njlf-date-h2">MM/DD</h2>
                  <input
                    className="njlf-input"
                    value={this.props.listing.date}
                    onChange={evt => this.updateInputValue(evt.target.value, "date")}
                  />
                </div>

                <div className="njlf-date-pair-container">
                  <h2 className="njlf-date-h2">Start</h2>
                  <input
                    className="njlf-input"
                    value={this.props.listing.start_time}
                    onChange={evt => this.updateInputValue(evt.target.value, "start_time")}
                  />
                </div>

                <div className="njlf-date-pair-container">
                  <h2 className="njlf-date-h2">End</h2>
                  <input
                    className="njlf-input"
                    value={this.props.listing.end_time}
                    onChange={evt => this.updateInputValue(evt.target.value, "end_time")}
                  />
                </div>

              </div>

            </div>

            {/* SKILLS  */}
            <div className="njlf-row">
              <div className="njlf-category-title-container">
                <h1>Skills</h1>
              </div>

              <div className="njlf-input-container">
                <input
                  className="njlf-input"
                  value={this.props.listing.skills}
                  onChange={evt => this.updateInputValue(evt.target.value, "skills")}
                />
              </div>
            </div>

            {/* DESCRIPTION  */}
            <div className="njlf-row">
              <div className="njlf-category-title-container">
                <h1>Description</h1>
              </div>

              <div className="njlf-input-container">
                <input
                  className="njlf-input"
                  value={this.props.listing.description}
                  onChange={evt => this.updateInputValue(evt.target.value, "description")}
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default NewJobListingForm;


/*
// updates input value in searchParameters in parent component
updateInputValue = (value, parameterCategory, parameterType) => {
  console.log(value);
  let inputValue = this.props.searchParameters[parameterCategory][parameterType];

  this.props.updateSearchParameters(value, parameterCategory, parameterType);
}


<input
  className={studioNameCSS}
  value={studioValue}
  placeholder="Your Studio Name"
  onChange={evt => this.updateInputValueNoParameterType(evt.target.value, this.props.studioNameTag)}
/>
*/
