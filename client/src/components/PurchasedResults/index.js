import React from "react";
import "./style.css";


function PurchasedResults(props) {
  return (
    <div>
            <p>Departure City: {props.departureCity}</p>
            <p>Departure Airport: {props.departureAirport}</p>
            <p>Arrival City: {props.arrivalCity}</p>
            <p>Arrival Airport: {props.arrivalAirport}</p>
            <p>Price: {props.price}</p>
            <p>Date of Departure: {props.departureDate}</p>
            <p>Time of Departure: {props.departureTime}</p>
            <p>Time of Arrival: {props.returnDepartureTime}</p>
            <p>Date of Return: {props.returnDepartureDate}</p>
    </div>
  );
}

export default PurchasedResults;