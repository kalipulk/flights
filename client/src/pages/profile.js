import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import PurchasedResults from "../components/PurchasedResults";
import API from "../utils/API";

class Profile extends Component {
    state = {
        email: "",
        flights: [],
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
            this.setState( {flights: res.data[0].Flights} )
            
        )
        .catch(err => console.log(err));

        
    }; 

        render() {

            return (
                <div>
                    <Jumbotron></Jumbotron>
                    <Nav></Nav>
                    <h4>Profile Details</h4>
                    <p>Email Address: {this.state.email} </p>
                    <br></br>
                    <br></br>
                    <h4>Purchased Flights:</h4>
                        {this.state.flights.map(flight => {
                            console.log(flight);
                            if (flight.purchased === true) {
                                return (
                                    <PurchasedResults
                                        key={flight.id}
                                        departureCity={flight.departureCity.replace(/_/g," ")}
                                        departureAirport={flight.departureAirport}
                                        arrivalCity={flight.arrivalCity.replace(/_/g," ")}
                                        arrivalAirport={flight.arrivalAirport}
                                        price={flight.price}
                                        departureDate={flight.departureDate}
                                        departureTime={flight.departureTime}
                                        returnDepartureTime={flight.returnDepartureTime}
                                        returnDepartureDate={flight.returnDepartureDate}
                                    />
                                );
                            }
                        })}
                    <br></br>
                    <br></br>
                    <h4>Wish List:</h4>
                    {this.state.flights.map(flight => {
                            console.log(flight);
                            if (flight.purchased === false) {
                                return (
                                    <PurchasedResults
                                        key={flight.id}
                                        departureCity={flight.departureCity.replace(/_/g," ")}
                                        departureAirport={flight.departureAirport}
                                        arrivalCity={flight.arrivalCity.replace(/_/g," ")}
                                        arrivalAirport={flight.arrivalAirport}
                                        price={flight.price}
                                        departureDate={flight.departureDate}
                                        departureTime={flight.departureTime}
                                        returnDepartureTime={flight.returnDepartureTime}
                                        returnDepartureDate={flight.returnDepartureDate}
                                    />
                                );
                            }
                        })}
                </div>
            )
        }
}
export default Profile;
