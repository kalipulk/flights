import React from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Search from "./pages/search";
import Profile from "./pages/profile";
import SideBar from "./components/SideBar/SideBar";
import Nav from "./components/Nav";
import Jumbotron from './components/Jumbotron';
import API from './utils/API';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rightOpen: true,
      leftOpen: true,
      login: false,
      userFlights: [],
      backToLogin:null
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }
  redirect=()=>{
    console.log("test");
    this.setState({backToLogin:"/"})
    console.log(this.state.backToLogin);
  }
  loginCheck = ()=>{
    // console.log(this.state.login);
    if(localStorage.getItem("id")!== null && this.state.login === false){
      // console.log(this.state.login)
      this.setState({login:true})
      this.flights(JSON.parse(localStorage.getItem("id")))
      
    }
  }
  logout = ()=>{
    localStorage.clear();
    this.redirect();
    this.setState({login: false});
    
  }
  flights =(id)=>{
    const usersFlightArray = []
    API.getMyFlights(id).then((response)=>{
      for(let i = 0;i <response.data[0].Flights.length;i++){
        
        if(response.data[0].Flights[i].purchased){
          
          API.getMyList(response.data[0].Flights[i].id).then(response =>{
            
            usersFlightArray.push(response.data)
            
            this.setState({userFlights:usersFlightArray})
            // console.log(this.state.userFlights)
            
            
          })
        }
      }
     
    
    })
  }
  deleteFromList = id =>{
    console.log(id);
    API.removeFromList(id).then(response =>{
      console.log("item deleted");
      window.location.reload(false);
    })
  }
  componentDidMount = ()=>{
    this.loginCheck();
    
  }
  componentDidUpdate = ()=>{
    this.loginCheck();
    // this.flights(JSON.parse(localStorage.getItem("id")))
  }
  
  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'open' : 'closed';
    // if (this.state.backToLogin) {
    //   return <Redirect to={this.state.backToLogin} />
    // }
  
    return (
    <Router>
     
      <div id='layout'>
        <div>
          <Nav />
        </div>
        
        <div id='main'>
              <div className='header'>
                  <h3 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
                      Main header
                  </h3>
              </div>
              <div className='content'>
                  <h3>Main content</h3><br/>
                  <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path ="/search"component={Search} />
          <Route exact path ="/profile"component={Profile} />
          <Route exact path ="/sidebar"component={SideBar} />
        </Switch>
              </div>
          </div>
        {this.state.backToLogin? <Redirect to={this.state.backToLogin}/>:console.log("place holder")}
        
        {this.state.login?
        <div id='right' className={rightOpen} >
        <div className='icon'
             onClick={this.toggleSidebar} >
             &equiv;
        </div>
        
        <div className={`sidebar ${rightOpen}`} >
            <div className='header'>
              <h3 className='title'>
                Logged In Header
              </h3>
            </div>
            <div className='content'>
                <h3>Right content</h3><br/>
                {this.state.userFlights.map(flight =>{
                 
                  if(flight[0].purchased === true ){
                    // console.log(flight[0].PackingLists[0].id)
                    return (
                      <div>
                        <h6 key={flight[0].id}>{flight[0].arrivalCity.replace(/_/g," ")} to {flight[0].departureCity.replace(/_/g," ")}</h6>
                          {flight[0].PackingLists.length>0?
                          flight[0].PackingLists.map(item =>{
                            // console.log(item);
                            return (
                              <div>
                              <p key={item.id}>{item.items}</p> <button onClick={()=>this.deleteFromList(item.id)}>remove</button>
                              </div>
                            )
                          }):<p>No Packing Items Added</p>}
                      </div>
                    )

                 
                  }
                })}
                <button onClick ={()=>this.logout()}>LogOut</button> 
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
        :
        <div id='right' className={rightOpen} >
              <div className='icon'
                   onClick={this.toggleSidebar} >
                   &equiv;
              </div>
              
              <div className={`sidebar ${rightOpen}`} >
                  <div className='header'>
                    <h3 className='title'>
                     Logged Out header
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
        }
        
      </div>
        
    </Router>
  );
}
}


export default App;
