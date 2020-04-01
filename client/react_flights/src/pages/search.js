import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import API from "../utils/API";


class Search extends Component {

    state = {
        departure: "",
        destination: "",
        departureDate: new Date(),
        returnDate: new Date(),
        convDepartureDate: "",
        convReturnDate: ""
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
        console.log(this.state.departure, this.state.destination, this.state.convDepartureDate, this.state.convReturnDate)
        API.flightSearch(this.state.departure, this.state.destination,this.state.convDepartureDate,this.state.convReturnDate).
        then(response => {
            console.log(response)
        })
    };
    
    render(){
        return(
        <div>
            <Jumbotron></Jumbotron>
            <Nav></Nav>
            <form>
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
          </div>
          )
      }
}
export default Search;