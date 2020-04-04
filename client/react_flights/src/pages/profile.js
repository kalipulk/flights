import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
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
        API.getFlight(id)
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
                <Jumbotron></Jumbotron>
                <Nav></Nav>
                <h4>Profile Details</h4>
                <p>Email Address: {this.state.email} </p>
                <br></br>
                <br></br>
                <h4>Purchased Flights:</h4>

                <br></br>
                <br></br>
                <h4>Wish List:</h4>

            </div>
          )
      }
}
export default Profile;
