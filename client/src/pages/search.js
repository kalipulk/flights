import React, { Component } from "react";
import SearchResults from "../components/SearchResults";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import Button from "../components/Button"
import API from "../utils/API";
import { set } from "date-fns";
import { da } from "date-fns/locale";


class Search extends Component {

    state = {
        departure: "",
        destination: "",
        departureDate: new Date(),
        returnDate: new Date(),
        convDepartureDate: "",
        convReturnDate: "",
        searchList:[],
        searchDone:false
    }

    handleDepartureDateChange = date => {
        this.setState({
            departureDate: date,
            convDepartureDate: moment(date).format("YYYY-MM-DD")
        });
    };

    handleReturnDateChange = date => {
        this.setState({
            returnDate: date,
            convReturnDate: moment(date).format("YYYY-MM-DD")
        });
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    };
    email = data =>{
        // console.log(data)
        API.sendEmail(data).then(response =>{
            console.log(response);
        })
    }
    buyFlights = (data) =>{
        let emailData = {}
        const purchasedFlights = {
            arrivalCity: data.arrivalCity,
            departureCity: data.departureCity,
            arrivalAirport:data.arrivalAirport,
            departureAirport:data.departureAirport,
            price: data.price,
            purchased:true,
            departureDate:data.departureDate,
            arrivalDate: data.arrivalDate,
            departureTime: data.departureTime,
            returnDepartureTime:data.returnDepartureTime,
            returnDepartureDate: data.returnDate,
            UserId: JSON.parse(localStorage.getItem("id"))

        }
        // console.log(purchasedFlights);
        API.buyFLight(purchasedFlights).then(response=>{
           this.setState({searchDone:false});
        
           emailData.arrivalCity=response.data.arrivalCity;
           emailData.departureCity=response.data.departureCity;
           emailData.arrivalAirport=response.data.arrivalAirport;
           emailData.departureAirport=response.data.departureAirport;
           emailData.price=response.data.price;
           emailData.departureDate=response.data.departureDate;
           emailData.departureTime=response.data.departureTime;
        
         
         
        }).then(API.getEmailAddress(JSON.parse(localStorage.getItem("id"))).then(response=>{
            
            emailData.email=response.data.email
            this.email(emailData);
            
        }))
    }
    wishList = (data) =>{
        
        const wishListFlights = {
            arrivalCity: data.arrivalCity,
            departureCity: data.departureCity,
            arrivalAirport:data.arrivalAirport,
            departureAirport:data.departureAirport,
            price: data.price,
            purchased:false,
            departureDate:data.departureDate,
            arrivalDate: data.arrivalDate,
            departureTime: data.departureTime,
            returnDepartureTime:data.returnDepartureTime,
            returnDepartureDate: data.returnDate,
            UserId: JSON.parse(localStorage.getItem("id"))

        }
        // console.log(purchasedFlights);
        API.buyFLight(wishListFlights).then(response=>{
           this.setState({searchDone:false});
           
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
       const departure = this.state.departure.replace(/ /g,"_");
       const destination = this.state.destination.replace(/ /g,"_");
    //    console.log(departure +" "+ destination); 
        API.flightSearch(departure, destination,this.state.convDepartureDate,this.state.convReturnDate).
        then(response => {
           
            this.setState({searchList:[response.data[0]]});
            this.setState({searchDone:true});
            console.log(this.state.searchList);
        })
    };
    
    render(){
       
        return(
            
        <div>
            {this.state.searchDone?
            
            this.state.searchList.map(search =>{
                // console.log(search);
                return (
                <SearchResults 
                    
                    key={search.id}
                    purchaseFlight={this.buyFlights}
                    wishList={this.wishList}
                    allData={search}
                    departureCity={search.departureCity}
                    arrivalCity = {search.arrivalCity}
                    departureAirport = {search.departureAirport}
                    arrivalAirport= {search.arrivalAirport}
                    arrivalTime={search.arrivalTime}
                    departureTime={search.departureTime}
                    departureDate={search.departureDate}
                    returnDate={search.returnDate}
                    price= {search.price}
                    returnDepartureTime= {search.returnDepartureTime}
                    returnArrivalTime={search.returnArrivalTime}
                    class= {search.class}
                    airline={search.airline}
                    stops={search.stops}
                    gate = {search.gate}
                    flightTime={search.totalFlightTime}
                    >
                </SearchResults>
                
            )})
                :<form>
                <div className="form-group">
                    <div className="city-section">
                        <div className="text-title">ORIGIN:</div>
                            <input
                                className="form-control"
                                id="departure"
                                type="text"
                                value={this.state.departure}
                                placeholder="City"
                                name="departure"
                                onChange={this.handleInputChange}
                                required
                            />
                    
                        <div className="text-title">DESTINATION:</div>
                            <input
                                className="form-control"
                                id="destination"
                                type="text"
                                value={this.state.destination}
                                placeholder="City"
                                name="destination"
                                onChange={this.handleInputChange}
                                required
                            />
                    </div>

                    <div className="date-section">
                        <div className="text-title">DEPARTURE DATE:</div>
                        <DatePicker
                            selected={this.state.departureDate}
                            onChange={this.handleDepartureDateChange}
                            dateFormat='yyyy-MM-dd'
                            required
                        />
 
                        <div className="text-title">RETURN DATE:</div>
                        <DatePicker
                            selected={this.state.returnDate}
                            onChange={this.handleReturnDateChange}
                            dateFormat='yyyy-MM-dd'
                            required
                        />
                        </div>
                </div>

                <div className="pull-right">

                    <button onClick={this.handleFormSubmit} type="submit"  className="btn btn-lg btn-primary float-right">
                        SEARCH
                    </button>

                </div>
            </form>
            
            }
          </div>
          )
      }
}
export default Search;