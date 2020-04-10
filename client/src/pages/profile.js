import React, { Component } from "react";

import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import PurchasedResults from "../components/PurchasedResults";
import PackingListForm from "../components/PackingListForm";
import Button from "../components/Button";

import API from "../utils/API";

class Profile extends Component {
    constructor(props){
        super(props)
       this.flights = () => props.flights(localStorage.getItem("id")) 
       
      }
    state = {
        email: "",
        flights: [],
        item:""
    };
    packingListAdd = listData =>{
        API.addToList(listData).then(res =>{
            this.flights(JSON.parse(localStorage.getItem("id")))
            console.log("Added new Item")
        })
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
        
      };
      handleFormSubmit = (event, id) => {
          
        event.preventDefault();
        const listData ={
            items:this.state.item,
            FlightId:id
        }
      
        
        this.packingListAdd(listData);
        
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

    email = data =>{
        API.sendEmail(data).then(response =>{
            console.log(response);
        });
    }

    purchaseFromWishList = id => {
        const flight = this.state.flights.find(flight => flight.id === id);
        API.buyFromWishList(flight.id)
        .then(res => this.getFlights())
        .catch(err => console.log(err));
    }

    removeFromWishList = id => {
        const flight = this.state.flights.find(flight => flight.id === id);
        console.log(id);
        console.log("clicked");
        API.removeWishList(flight.id)
        .then(res => this.getFlights())
        .catch(err => console.log(err));
    }

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

                            if (flight.purchased === true) {
                                return (
                                    <div>
                                        <PurchasedResults
                                            key={flight.id}
                                            id={flight.id}
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
                                        <PackingListForm
                                           
                                            id={flight.id}
                                            handleInputChange={this.handleInputChange}
                                            handleFormSubmit={this.handleFormSubmit}
                                            item={this.state.item}/>

                                        />
                                        <hr></hr>
                                        <br></br>

                                    </div>
                                );
                            }
                        })}
                    <br></br>
                    <br></br>
                    <h4>Wish List:</h4>
                    {this.state.flights.map(flight => {

                            if (flight.purchased === false) {
                                return (
                                    <div>
                                        <PurchasedResults
                                            key={flight.id}
                                            id={flight.id}
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
                                        <Button
                                            title="Purchase Flight"
                                            click={() => this.purchaseFromWishList(flight.id)}
                                        />
                                        <Button
                                            title="Remove From Wish List"
                                            click={() => this.removeFromWishList(flight.id)}
                                        />
                                        <hr></hr>
                                        <br></br>
                                    </div>
                                );
                            }
                        })}
                </div>
            )
        }
}
export default Profile;
