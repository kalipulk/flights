import React from 'react';
import Nav from "./components/Nav";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Search from "./pages/search";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path ="/search"component={Search} />
          <Route exact path ="/profile"component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
