import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PostProvider } from './contexts/PostContextProvider'
import React from 'react';
import './App.css';
import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home';
import Nav from './components/Nav.js';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Forum from './pages/Forum';
import AddPost from './pages/AddPost';
import SweSubForum from './pages/SweSubForum';
function App() {
    

  return (
<PostProvider>
<Router>
      <div className="App">

        <div className="appWrapper">
        <Nav/>
        <Switch>
          <Route path="/users/:id" exact component={Profile} /> 
          <Route path="/users" exact component={Users} />
              <Route path="/forum" exact component={Forum} />
              <Route path="/createPost" exact component={AddPost}/>
          <Route path="/" exact component={Home} /> 
          <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
              <Route path="/forum/svenska" ecact component={SweSubForum}/>
          </Switch>
         </div>
        </div>
        
</Router>
</PostProvider>
    
  );
}

export default App;
