import React from 'react';
import './css/style.css';
import Jumbotron from '../../Jumbotron';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rightOpen: true,
      leftOpen: true,
      flights: [],
    checkout: []
    }
  }

  handleClick = (flight) => {
    console.log("you got clicked", flight);
    var newCheckout = this.state.checkout
    newCheckout.push(flight)
    this.setState({checkout: newCheckout})
  }

  removeFromList = (flight) => {
    console.log(flight, "deleting");
    var newCheckout = [];
    for (var i =0; i < this.state.checkout.length; i++) {
      if (flight !== this.state.checkout[i]) {
        newCheckout.push(this.state.checkout[i]);
      }
    }
    console.log(newCheckout);
    this.setState({checkout: newCheckout})
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';

    return (
      <div id='layout'>

          <div id='left' className={leftOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${leftOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Left header
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Left content</h3>
                      <p>
                        CONTENT  
                      </p>
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='header'>
                  <div className={`title ${'left-' + leftOpen} ${'right-' + rightOpen}`}>
                  </div>
              </div>
              <div className='content'>
                 {this.state.flights.map((flight)=>{
                   return(
                     <div>
                       <h1>{flight.destination}</h1>
                       <span className="add-btn" role="button" tabIndex="0" onClick={()=>{this.handleClick(flight.destination)}}>+</span>
                       <p>{flight.price}</p>
                      </div>
                   )
                 })}
              </div>
          </div>

          <div id='right' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${rightOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Right header
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Right content</h3><br/>
                      {this.state.checkout.map((flight)=>{
                   return(
                     <div>
                       <h1>{flight}</h1>
                       <span className="delete-btn" role="button" tabIndex="0" onClick={()=>{this.removeFromList(flight)}}>x</span>
                      </div>
                   )
                 })}
                  </div>
              </div>
          </div>

      </div>
    );
  }
}

export default Layout;