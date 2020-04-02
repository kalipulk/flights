import React from "react";

function SearchResults (props){
    console.log(props);
    return(
        <div>
            <h2>{props.departureCity} to {props.arrivalCity}</h2>
            <h4>Airline {props.airline}</h4>
            <h5>Leaving From {props.departureAirport} Arriving At {props.arrivalAirport}</h5>
            <h6> Departure Date {props.departureDate}</h6>
            <p> Departure Time {props.departureTime} Arriving Time {props.arrivalTime}</p>
            <h6> Return Date {props.returnDate}</h6>
            <p> Departure Time {props.returnDepartureTime} Arrival Time {props.returnArrivalTime} </p>
            <h6>Class {props.class}</h6>
            <p>Stops {props.stops}</p>
            <p>Gate {props.gate}</p>
            <p>Flight Time {props.flightTime}</p>

            
        </div>

    );
}




export default SearchResults;