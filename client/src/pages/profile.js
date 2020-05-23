import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import PurchasedResults from "../components/PurchasedResults";
import PackingListForm from "../components/PackingListForm";
import Button from "../components/Button";
import API from "../utils/API";
import moment from "moment";

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
    createItemList = (id, itemList) =>{
        console.log(id)
        console.log(itemList.length)
        for(let i =0; i< itemList.length;i++){
            const listData ={
                items:itemList[i],
                FlightId:id
            }
            this.packingListAdd(listData);
        }
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = (event, id) => {
          
        event.preventDefault();
       
        this.createItemList(id, this.state.item.split(", "))
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
        API.removeWishList(flight.id)
        .then(res => this.getFlights())
        .catch(err => console.log(err));
    }

        render() {
            return (
                <div className="profile-container">
                    <div className="profile-head">PROFILE DETAILS</div>
                    <div className="profile-titles">EMAIL ADDRESS:</div> 
                        <div>{this.state.email} </div>
                    <div className="profile-titles">PURCHASED FLIGHTS:</div>
                        <div className="flight-info">
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
                                            departureDate={moment(flight.departureDate).format("MM-DD-YYYY")}
                                            departureTime={flight.departureTime}
                                            returnDepartureTime={flight.returnDepartureTime}
                                            returnDepartureDate={moment(flight.returnDepartureDate).format("MM-DD-YYYY")}
                                        />
                                        <PackingListForm
                                            id={flight.id}
                                            handleInputChange={this.handleInputChange}
                                            handleFormSubmit={this.handleFormSubmit}

                                            item={this.state.item}/>

                                        <hr></hr>
                                        <br></br>

                                    </div>
                                );
                            }
                        })}

                    <hr></hr>
                    </div>

                    <div className="wish-list-head">WISH LIST:</div>
                    <div className="wish-flight-info">
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
                                        <Button title="PURCHASE FLIGHT" click={() => this.purchaseFromWishList(flight.id)}/>
                                        <Button title="REMOVE FROM WISH LIST" click={() => this.removeFromWishList(flight.id)}/>
                                    </div>
                                );  
                            }
                        })}
                    </div>
                </div>
            )
        }
}
export default Profile;
