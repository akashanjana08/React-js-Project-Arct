import React, { Component } from 'react';
import './App.css';
import { BrowserRouter  as Router, Route, Switch } from "react-router-dom";
import LoginScreen from './containers/screens/login/Login';
import HomeScreen from './containers/screens/Home';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LoginScreen} />
          <Route path='/home' component={HomeScreen} />
        </Switch>
      </Router>
    );
  }
}

export default App;
