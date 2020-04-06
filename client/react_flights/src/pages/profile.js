import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import "./style.css";



class Profile extends Component {
 
    
      render(){

        var styles = {
          container: {
            backgroundColor: 'red'
          }
        }


          return(
              <div style={styles.container}>
                {/* <Jumbotron></Jumbotron> */}
                <h1> We are Profile Page!!</h1>
            </div>
          )
      }
}
export default Profile;
