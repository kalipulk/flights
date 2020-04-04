import axios from "axios"
import { func } from "prop-types";

export default {
    login: function(loginInfo){

       return axios.post("/api/login", loginInfo);
    },
    user: function(userInfo){

        return axios.post("/api/users", userInfo);
    },
    getEmailAddress: function(id){
        
        return axios.get("/api/users/" + id);
    },
    getFlight: function(id){
        
        return axios.get("api/flights/" + id);
    }

}