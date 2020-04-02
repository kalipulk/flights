import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import API from "../utils/API";
import { set } from "date-fns";


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

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.searchDone);
        API.flightSearch(this.state.departure, this.state.destination,this.state.convDepartureDate,this.state.convReturnDate).
        then(response => {
           
            this.setState({searchList:[response.data[0]]});
            this.setState({searchDone:true});
            // console.log(this.state.searchList);
        })
    };
    
    render(){
        // console.log(this.state.searchList)
        return(
            
        <div>
            <Jumbotron></Jumbotron>
            <Nav></Nav>
            {this.state.searchDone?
            
            this.state.searchList.map(search =>{
                // console.log(search);
                return (
                <SearchResults 
                    id={search.id}
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
                    <p>Departing From:</p>
                    <input
                        className="form-control"
                        id="departure"
                        type="text"
                        value={this.state.departure}
                        placeholder="Departing From"
                        name="departure"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br></br>
                    <p>Arriving At:</p>
                    <input
                        className="form-control"
                        id="destination"
                        type="text"
                        value={this.state.destination}
                        placeholder="Arriving At"
                        name="destination"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br></br>
                    <p>Departure Date:</p>
                    <DatePicker
                        selected={this.state.departureDate}
                        onChange={this.handleDepartureDateChange}
                        dateFormat='yyyy-MM-dd'
                        required
                    />
                    <br></br>
                    <p>Return Date:</p>
                    <DatePicker
                        selected={this.state.returnDate}
                        onChange={this.handleReturnDateChange}
                        dateFormat='yyyy-MM-dd'
                        required
                    />
                </div>
                <div className="pull-right">
                    <button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="btn btn-lg btn-primary float-right"
                        >
                        Search
                    </button>
                </div>
            </form>
            
            }
          </div>
          )
      }
}
export default Search;