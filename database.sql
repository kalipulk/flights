DROP DATABASE IF EXISTS flying_time_db;

CREATE DATABASE flying_time_db;
USE flying_time_db;

INSERT INTO PackingLists (items, FlightId, createdAt,updatedAt)
VALUES ("4 pairs of pants", 29,"2020-03-24 00:47:19","2020-03-24 00:51:19");

INSERT INTO Data(departureCity,arrivalCity,departureAirport,arrivalAirport, departureTime,arrivalTime, departureDate,
returnDate, price, returnDepartureTime,returnArrivalTime, class, airline, stops,gate,totalFlightTime, createdAt, updatedAt)
VALUES("New_York_City","San_Francisco","JFK","SFO","1:00pm","4:00am", "2020-06-06","2020-06-12", 50,"6:30pm", "7:45am","first", "United Airways",
0,24,"7:21","2020-03-24 00:46:19","2020-03-24 00:50:19");

INSERT INTO Data(departureCity,arrivalCity,departureAirport,arrivalAirport, departureTime,arrivalTime, departureDate,
returnDate, price, returnDepartureTime,returnArrivalTime, class, airline, stops,gate,totalFlightTime, createdAt, updatedAt)
VALUES("Dallas","Las_Vegas","DFW","LAS","6:00pm","10:00pm", "2020-04-20","2020-04-27", 10,"5:30pm", "9:45pm","first", "Green AirWays",
2,3,"5:35","2020-03-24 00:47:19","2020-03-24 00:51:19");

INSERT INTO Data(departureCity,arrivalCity,departureAirport,arrivalAirport, departureTime,arrivalTime, departureDate,
returnDate, price, returnDepartureTime,returnArrivalTime, class, airline, stops,gate,totalFlightTime, createdAt, updatedAt)
VALUES("Seattle","Orlando","MCO","LAS","7:00am","9:00am", "2020-06-20","2020-06-30", 25,"8:30pm", "11:00pm","economy", "Disney Express",
0,9,"2:00","2020-03-24 00:47:40","2020-03-24 00:51:20");

INSERT INTO Data(departureCity,arrivalCity,departureAirport,arrivalAirport, departureTime,arrivalTime, departureDate,
returnDate, price, returnDepartureTime,returnArrivalTime, class, airline, stops,gate,totalFlightTime, createdAt, updatedAt)
VALUES("Charlotte","Phoenix","PHX","LAS","9:00am","3:00pm", "2020-05-15","2020-05-25", 15,"8:30pm", "1:00am","business", "Fun In The Sun Airways",
1,12,"5:00","2020-03-24 00:48:40","2020-03-24 00:52:20");

INSERT INTO Data(departureCity,arrivalCity,departureAirport,arrivalAirport, departureTime,arrivalTime, departureDate,
returnDate, price, returnDepartureTime,returnArrivalTime, class, airline, stops,gate,totalFlightTime, createdAt, updatedAt)
VALUES("Houston","Minneapolis","IAH","MSP","10:00am","1:00pm", "2020-08-05","2020-08-15", 27,"8:30pm", "12:00am","business", "Migration Way",
0,32,"3:00","2020-03-24 00:49:40","2020-03-24 00:53:20");

INSERT INTO Data(departureCity,arrivalCity,departureAirport,arrivalAirport, departureTime,arrivalTime, departureDate,
returnDate, price, returnDepartureTime,returnArrivalTime, class, airline, stops,gate,totalFlightTime, createdAt, updatedAt)
VALUES("Detroit","Miami","DTW","MIA","6:00am","9:00am", "2020-07-01","2020-07-10", 40,"8:30pm", "11:30pm","first", "Beach Time",
0,29,"3:00","2020-03-24 00:49:50","2020-03-24 00:53:25");