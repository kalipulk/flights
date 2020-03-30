import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Nav extends Component {
    state = {
      open: false,
      width: window.innerWidth
    };
  
    updateWidth = () => {
      const newState = { width: window.innerWidth };
  
      if (this.state.open && newState.width > 991) {
        newState.open = false;
      }
  
      this.setState(newState);
    };
  
    toggleNav = () => {
      this.setState({ open: !this.state.open });
    };
  
    componentDidMount() {
      window.addEventListener("resize", this.updateWidth);
    }
  
    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWidth);
    }
  
    render() {
      return (
        <nav className="navbarMan">
          <Link className="navbarBrand" to="/">
          </Link>
          <button
            onClick={this.toggleNav}
            className="navbarToggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-chevron-down"></i>
            <span className="navbarTogglerIcon" /> 
          </button>
          <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
            <ul className="navbarNav">
            <li className="navItem">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="navItem">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                  to="/search"
                >
                  Search
                </Link>
              </li>
              <li className="navItem">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    }
  }
  export default Nav;
