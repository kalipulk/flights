import axios from "axios"
import { func } from "prop-types";

export default {
    sendEmail: function(emailData){
        console.log(emailData);
        return axios.post("/api/email", emailData)
    },
    login: function(loginInfo){

       return axios.post("/api/login", loginInfo);
    },
    user: function(userInfo){

        return axios.post("/api/users", userInfo);
    },
    getEmailAddress: function(id){
        
        return axios.get("/api/users/" + id);
    },
    getFlight: function(userInfo){
        
        return axios.post("/api/users", userInfo)
    },
    flightSearch: function(departureCity,arrivalCity,departureDate,returnDate){
        
        return axios.get("/api/data/"+departureCity+"/" +arrivalCity+"/" +departureDate+ "/"+returnDate);

    },
    buyFLight: function(data){

        return axios.post("/api/flights", data);
    },
    getMyFlights: function(id) {

        return axios.get("api/flights/" + id);
    },
    getMyList: function(id){
        return axios.get("api/packingList/"+id);
    },
    removeFromList: function(id){
        return axios.delete("api/packingList/"+id)
    },
    addToList: function(listData){
        return axios.post("api/packingList",listData)
    }

}