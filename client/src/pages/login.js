import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Button from "../components/Button";
import API from "../utils/API";
import {BrowserRouter as Router, Redirect,} from 'react-router-dom';

class Login extends Component {
  constructor(props){
      super(props)
     this.loginCheck = () => props.loginCheck() 
    }
    state = {
        email: "",
        password:"",
        changePage:null
      };
      redirect(){
        this.setState({changePage:"/profile"})
      }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        
        event.preventDefault();
        const credentials = {
            email:this.state.email,
            password:this.state.password
        }
       
        
        if (!credentials.email || !credentials.password) {
            
            return;
        }else{
          
        API.login(credentials).then(response =>{
            localStorage.clear();
            localStorage.setItem("id", response.data.id);
           
            this.redirect();
            this.loginCheck()
        })}
      };
     
      render(){
        if (this.state.changePage) {
          return <Redirect to={this.state.changePage} />
        }
        
        return(
        <div>
          <Jumbotron/>
          <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.email}
              name="email"
              type="text"
              className="form-control"
              placeholder="Enter email"
              id="email"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.password}
              name="password"
              type="text"
              className="form-control"
              placeholder="Enter Password"
              id="password"
            />
            <Button click={this.handleFormSubmit} title="Login"/>
          </div>
        </form>
        
        </div>
        
        );
      }
}
export default Login;
