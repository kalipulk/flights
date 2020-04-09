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
                        <div className='content'>
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
                                <i style={style.icon} className="fas fa-suitcase-rolling"></i>
                            </div>
                        <div className={`sidebar ${rightOpen}`} >
                            <div className='header'>
                                <div className='title'>
                                </div>
                            </div>
                            <div className='content'>
                                <div>Purchased Flights</div><br/>
                                {this.props.children}
                            </div>
                        </div> 
                    </div>    
                )
        }
    }  
}

export default Layout;
