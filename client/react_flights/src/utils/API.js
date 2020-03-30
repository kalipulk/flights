import axios from "axios"
import { func } from "prop-types";

export default {
    login: function(loginInfo){
        
       return axios.post("/api/login", loginInfo)
    }

}