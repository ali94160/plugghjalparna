import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Nav from './components/Nav.js';
import UserProfile from './components/UserProfile';
import Users from './pages/Users';

function App() {
    

  return (
<Router>
      
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/users" exact component={Users} /> 
          <Route path="/" exact component={Home} /> 
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/MyProfile" exact component={UserProfile} />
          </Switch>
         
       </div>
</Router>
   
    
  );
}

export default App;
