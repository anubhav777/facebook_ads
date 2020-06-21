import React from 'react';
import Dashboard from './components/home/Dashboard'
import Topheader from './components/design/Topheader'
import Sidenav from './components/design/Sidenav'
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom'
import Newmap from './components/home/Newmap'
import Login from './components/extras/Login';
import Userpage from './components/pages/Userpage'
import Adshome from './components/ads/Adshome'
import Comparepage from './components/pages/Comparepage'
import Signup from './components/extras/Signup'
import Verification from './components/extras/Verification';

function App() {
  return (
      <Router>
          <React.Fragment>
              <Switch>
              <Route exact path="/dashboard" render={(props)=>(
              <React.Fragment>
              <body className="nav-md">
              <div className="container body">
              <div className="main_container">
              <Topheader/>
              <Sidenav/>
              <Dashboard/>
            </div>
            </div>
            </body>
            </React.Fragment>
          )}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' component={Signup}/>
            <Route exact path='/map' component={Newmap}/>
            <Route exact path='/verify' component={Verification}/>
            <Route exact path ='/pages' render={(props)=>(
              <React.Fragment>
              <body className="nav-md">
              <div className="container body">
              <div className="main_container">
              <Topheader/>
              <Sidenav/>
              <Userpage/>
            </div>
            </div>
            </body>
              </React.Fragment>
            )}/>
            <Route exact path='/ads' render={(props)=>(
               <React.Fragment>
               <body className="nav-md">
               <div className="container body">
               <div className="main_container">
               <Topheader/>
               <Sidenav/>
               <Adshome/>
               </div>
               </div></body>
               </React.Fragment>
            )}/>
            <Route exact path='/compare' render={(props)=>(
              <React.Fragment>
                  <body className="nav-md">
               <div className="container body">
               <div className="main_container">
               <Topheader/>
               <Sidenav/>
               <Comparepage/>
               </div>
               </div></body>
              </React.Fragment>

            )}/>

          
              </Switch>
          </React.Fragment>
         
         
              
              
      </Router>
    
  );
}

export default App;
