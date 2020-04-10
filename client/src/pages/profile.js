import React, { Component } from "react";
import API from "../utils/API";

class Profile extends Component {
    state = {
        email: "",
        flights: {}
    };

    componentDidMount() {
        this.getEmail();
        this.getFlights();
        // this.purchasedOrNotPurchased();
    }

    getEmail = () => {
        const id = JSON.parse(localStorage.getItem("id"));
        API.getEmailAddress(id)
        .then(res =>
            this.setState( {email: res.data.email} )
        )
        .catch(err => console.log(err));
    };

    getFlights = () => {
        const id = JSON.parse(localStorage.getItem("id"));
        API.getMyFlights(id)
        .then(res =>
            this.setState( {flights: res.data} )
        )
        .catch(err => console.log(err));
    } 

    // purchasedOrNotPurchased = () => {
    //     const purchasedFlight = this.state.flights.filter(function(purchased) {
    //         return purchased.purchased = true;
    //     });
        
    //     const wishList = this.state.flights.filter(function(purchased) {
    //         return purchased.purchased = false;
    //     });
    // }


      render(){
          return(
              <div>
              
                <div>Profile Details</div>
                <p>Email Address: {this.state.email} </p>
                <br></br>
                <br></br>
                <div>Purchased Flights:</div>

                <br></br>
                <br></br>
                <div>Wish List:</div>

            </div>
          )
      }
}
export default Profile;
