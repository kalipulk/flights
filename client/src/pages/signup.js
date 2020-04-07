import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import {BrowserRouter as Router, Redirect,} from "react-router-dom";
import API from "../utils/API";


class Signup extends Component {
    constructor(props){
        super(props)
        this.loginCheck = () => props.loginCheck() 
      }
    state = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",

    };

    redirect() {
        this.setState({ changePage:"/search" })
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const loginInfo = {
            email: this.state.emailAddress,
            password: this.state.password
        }

        API.user(loginInfo)
        .then(res => {
            localStorage.setItem("id", res.data.id);
            this.loginCheck()
        });
        
        this.redirect();
        
    };
   
      render() {
          if (this.state.changePage) {
                return <Redirect to={this.state.changePage} />
          }

          return(
              <div>
                <Jumbotron></Jumbotron>
                <Nav></Nav>
                <br></br>
                <br></br>
                <h2>Sign Up Here!</h2>
                <br></br>
                <br></br>
                <form>
                    <div className="form-group">
                        {/* <p>First Name:</p>
                        <input
                            className="form-control"
                            id="first-name"
                            type="text"
                            value={this.state.firstName}
                            placeholder="First Name"
                            name="firstName"
                            onChange={this.handleInputChange}
                            required
                        /> */}
                        {/* <br></br>
                        <p>Last Name:</p>
                        <input
                            className="form-control"
                            id="last-name"
                            type="text"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            name="lastName"
                            onChange={this.handleInputChange}
                            required
                        />
                        <br></br> */}
                        <p>Email Address:</p>
                        <input
                            className="form-control"
                            id="email-address"
                            type="text"
                            value={this.state.emailAddress}
                            placeholder="Email Address"
                            name="emailAddress"
                            onChange={this.handleInputChange}
                            required
                        />
                        <br></br>
                        <p>Password:</p>
                        <input
                            className="form-control"
                            id="password"
                            type="password"
                            value={this.state.password}
                            placeholder="*****************"
                            name="password"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="pull-right">
                        <button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="btn btn-lg btn-primary float-right"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
          )
      }
}
export default Signup;