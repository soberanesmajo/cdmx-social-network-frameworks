import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Navigation from '../components/navigation/Navigation';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import Home from '../components/home/Home';
import Profile from '../components/profile/Profile';
import Error from '../components/error/Error';

const App = () =>
      // <Router path = {process.env.PUBLIC_URL}>
      <Router path={process.env.PUBLIC_URL + '/'}>
        <div>

        <Switch>
          <Route
            path = '/'
            component = {Login} exact
          />

          <Route
            path = '/signup'
            component = {Signup}
          />

          <Route
            path = '/home'
            component = {Home}
          />

          <Route
            path = '/profile'
            component = {Profile}
          />

          <Route
            
            component = {Error}
          />

        
        </Switch>        
        </div>
      </Router>

export default App;