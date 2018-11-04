import React from 'react';


class Requests {

  // Get From Database ---------------------------------------------------------

  async makeNexmoLink() {
    let url = "https://jitsy.horokuapp.com/nexmo";

    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  }

}

export default Requests;
