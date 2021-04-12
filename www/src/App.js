import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Nav from './components/Nav.js';
function App() {
    

  return (
<Router>
      
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} /> 
          </Switch>
         
       </div>
</Router>
   
    
  );
}

export default App;
