DROP DATABASE IF EXISTS flying_time_db;
-- Creates the "animals_db" database --
CREATE DATABASE flying_time_db;
USE flying_time_db;
INSERT INTO Flights(arrival,departure, airport, price, purchased, UserId)
VALUES("NYC", "LAX", "JFK", 150, false,1);