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

        const style= {
            icon:  {
                fontWeight: '500',
                fontSize: '.9em',
                paddingRight: '10px' 
            }
        }

        switch (this.props.layout) {
            case "left" : 
                return(
                <div id='left' className={leftOpen} >
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
                    <div id='right' className={rightOpen} >
                            <div className='icon' onClick={this.toggleSidebar}> 
                            <i style={style.icon} class="fas fa-user-circle fa-lg customIcon"></i>
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
