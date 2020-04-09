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
        <div className="navbarMain">
          <Link className="navbarBrand" to="/"></Link>
          <div className={`${this.state.open ? "" : ""}navbar-collapse`} id="navbarNav">
            <div className="navbarNav">
              <div className="navItem">
                  <Link onClick={this.toggleNav} className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"} to="/signup">
                    <div className="nav-icon">SIGN UP <i class="fas fa-user-plus fa-sm"></i></div>
                  </Link>
                </div>
              <div className="navItem">
                <Link onClick={this.toggleNav} className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"} to="/search">
                  <div className="nav-icon">SEARCH <i class="fas fa-search-location fa-sm" ></i></div>
                </Link>
              </div>
              <div className="navItem">
                <Link onClick={this.toggleNav} className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"} to="/profile" >
                  <div className="nav-icon">PROFILE <i class="fas fa-id-card fa-sm" ></i></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  export default Nav;
