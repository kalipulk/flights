import React, { Component } from "react";
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
            <div id="sign-up-container">
                <div id="sign-up-header">SIGN UP</div>
                <form>
                    <div className="form-group">
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
                        <input
                            className="form-control"
                            id="password"
                            type="password"
                            value={this.state.password}
                            placeholder="********"
                            name="password"
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="pull-right">
                        <button
                        onClick={this.handleFormSubmit}
                        type="submit"
                        className="signup-Button"
                        >
                        SUBMIT
                        </button>
                    </div>
                </form>
            </div>
          )
      }
}
export default Signup;