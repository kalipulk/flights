import React from "react";
import "./style.css";

function SearchResults (props){
    // console.log(props);
    return(
        <div className="results-container">
            <div className="text-details">{props.departureCity.replace(/_/g," ")} to {props.arrivalCity.replace(/_/g," ")}</div>
            <div className="text-details">Airline:</div>
                <div> {props.airline}</div>

            <div className="trip-locations">   
                <div className="text-details">Leaving From:</div>  
                    <div>{props.departureAirport}</div>
                <div className="text-details">Arriving At:</div> 
                    <div>{props.arrivalAirport}</div>
            <div/> 

            <div className="date-time">
                <div className="departing-info">
                    <div className="text-details"> Departure Date: </div>
                        <div>{props.departureDate}</div>
                    <div>
                    <div className="text-details"> Departure Time: </div>
                        <div> {props.departureTime} </div>
                    <div className="text-details">Arriving Time:</div> 
                        <div>{props.arrivalTime}</div>
                    </div>
                </div>    
                
                <div className="arriving-info">
                    <div className="text-details"> Return Date:</div>
                        <div>{props.returnDate}</div>

                    <div className="text-details"> Return Time: </div>
                        <div>{props.returnDepartureTime}</div> 
                    <div className="text-details">Arrival Time:</div>
                        <div>{props.returnArrivalTime}</div>
                </div>
            </div>

            <div className="text-details">Class:</div>
            <div> {props.class} </div>

            <div className="text-details">Stops: </div>
            <div>{props.stops}</div>

            <div className="text-details">Gate:</div>
            <div>{props.gate}</div>

            <div className="text-details">Flight Time:</div>
            <div> {props.flightTime}</div>

            <button onClick= {()=>props.purchaseFlight(props.allData)} className="searchBtn">BUT TICKET</button>
            <button onClick= {()=>props.wishList(props.allData)} className="searchBtn">SAVE FOR LATER</button> 
        </div>

    );
}




export default SearchResults;