import React from 'react';


class Requests {

  // Get From Database ---------------------------------------------------------

  async getListings() {
    let url = "https://jitsy.horokuapp.com/listing";

    fetch("https://github.com")
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }

}

export default Requests;
