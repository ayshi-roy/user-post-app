import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Component/NoMatch/NoMatch';
import UserDetails from './Component/UserDetails/UserDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
           <Home/> 
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/User/:userId'>
          <UserDetails/>
        </Route>
        <Route path='/User/:userId'>
          <UserDetails/>
        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>
      </Switch>       
    </Router>
  );
}

export default App;
