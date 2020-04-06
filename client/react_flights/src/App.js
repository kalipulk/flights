import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Search from "./pages/search";
import Profile from "./pages/profile";
import SideBar from "./components/SideBar/SideBar";
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rightOpen: false,
      leftOpen: false,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  
  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
  
    return (
    <Router>
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
                  <Nav />
                  </div>
              </div>
      </div>
        
        
        <div id='main'>
          <div className='header'>
            <h3 className={`title ${'left-' + leftOpen} ${'right-' + rightOpen}`}>
              SEARCH FUNCTION GOES HERE 
            </h3>
          </div>
          <div className='content'>
            <h3>SEARCH RESULTS DISPLAY HERE</h3><br/>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path ="/search"component={Search} />
              <Route exact path ="/profile"component={Profile} />
            </Switch>
          </div>

          
        </div>

        <div id='right' className={rightOpen} >
          <div className='icon'onClick={this.toggleSidebar} >
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
                {/* {this.state.checkout.map((flight)=>{
                return(
                  <div>
                  <h1>{flight}</h1>
                  <span className="delete-btn" role="button" tabIndex="0" onClick={()=>{this.removeFromList(flight)}}>x</span>
                  </div>
                )
                })} */}
            </div>
          </div>
        
        </div>
      </div>
    </Router>
  );
}
}


export default App;
