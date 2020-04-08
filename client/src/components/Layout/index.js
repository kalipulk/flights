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
        console.log(event.currentTarget.parentNode.id);
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
            case "right" :
                return (
                    <div id='right' className={this.state.rightOpen} >
                            <div className='icon' onClick={this.toggleSidebar}> 
                                &equiv;
                            </div>
                        <div className={`sidebar ${rightOpen}`} >
                            <div className='header'>
                                <h3 className='title'>
                                Logged In Header
                                </h3>
                            </div>
                            <div className='content'>
                                <h3>Purchased Flights</h3><br/>
                                {this.props.children}
                            </div>
                        </div> 
                    </div>    
                )
        }
    }  
}

export default Layout;
