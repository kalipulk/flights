import axios from "axios"
import { func } from "prop-types";

export default {
    login: function(loginInfo){
        
       return axios.post("/api/login", loginInfo)
    },
    user: function(userInfo){
        
        return axios.post("/api/users", userInfo)
    }
}