import React, { Component } from "react";
import Nav from "../Nav";

// import "./style.css";

class Layout extends Component {
    state = {
        rightOpen: true,
        leftOpen: false
      };

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
        console.log(key);
    }  
    
    render () {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';

        switch (this.props.layout) {
            case "left" : 
                return(
                    <div id='left' className={this.state.leftOpen} >
                <div className='icon'onClick={this.toggleSidebar}>
                  &equiv;
                </div>
                <div className={`sidebar ${leftOpen}`} >
                  <div className='content'> PLACEHOLDER
                    <div className='header'>
                      <div>
                        <Nav />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
                )
        }
    }  
}

export default Layout;
