import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Profile extends Component {
    state = {
        email: "",
        flights: [],
        purchasedFlight: [],
        wishList: []
    };

    componentDidMount() {
        this.getEmail();
        this.getFlights();
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
            this.setState( {flights: res.data.Flights} ),
        )
        .catch(err => console.log(err));

        const purchasedFlight = this.state.flights.filter(function(purchased) {
            return purchased.purchased = true;
            this.setState({ purchasedFlight })
        });
            
        const wishList = this.state.flights.filter(function(purchased) {
            return purchased.purchased = false;
            this.setState({ purchasedFlight})
        });
    } 

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
                {/* {this.state.purchasedFlight.length ? (
                    <ul>
                       {this.state.purchasedFlight.map(purchased => (
                           <li>Departure City: {purchased.departureCity} </li>
                           <li>Departure Airport: {purchased.departureAirport} </li>
                           <li>Arrival City: {purchased.arrivalCity} </li>
                           <li>Price: {purchased.price} </li>
                           <li>Date of Departure: {purchased.departureDate} </li>
                           <li>Time of Departure: {purchased.departureTime} </li>
                           <li>Time of Arrival: {purchased.returnDepartureTime} </li>
                           <li>Date of Return: {purchased.returnDepartureDate} </li>
                        )} 
                    </ul>
                ))} */}
                
                <br></br>
                <br></br>
                <h4>Wish List:</h4>
                

            </div>
          )
      }
}
export default Profile;
