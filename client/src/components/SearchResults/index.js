import React from "react";
import "./style.css";

function SearchResults (props){
    // console.log(props);
    return(
        <div className="results-container">
            <div>{props.departureCity.replace(/_/g," ")} to {props.arrivalCity.replace(/_/g," ")}</div>
            <div>Airline: {props.airline}</div>
            <div>Leaving From: {props.departureAirport} Arriving At: {props.arrivalAirport}</div>
            <div> Departure Date: {props.departureDate}</div>
            <div> Departure Time: {props.departureTime} Arriving Time: {props.arrivalTime}</div>
            <div> Return Date: {props.returnDate}</div>
            <div> Departure Time: {props.returnDepartureTime} Arrival Time: {props.returnArrivalTime} </div>
            <div>Class: {props.class}</div>
            <div>Stops: {props.stops}</div>
            <div>Gate: {props.gate}</div>
            <div>Flight Time: {props.flightTime}</div>
            <button onClick= {()=>props.purchaseFlight(props.allData)} className="searchBtn">BUT TICKET</button>
            <button onClick= {()=>props.wishList(props.allData)} className="searchBtn">SAVE FOR LATER</button> 
        </div>

    );
}




export default SearchResults;