/**
 * @description This is the main file where all the Routers are defined , and Added Lazy loading for The components.
 * @author Ashutosh Sarangi
 */

import './App.css';
import React, {Suspense} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import FallBack from './Components/fallback';
const User = React.lazy(()=> import('./Pages/user'));
const Home = React.lazy(()=> import ('./Pages/home'));
const Header = React.lazy(()=> import ('./Components/header'));




function App(props) {
  return (
    <Suspense fallback={<FallBack />}>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact render={(props)=>{
            return <Home {...props}/>
          }}/>
          <Route
            path='/users'
            render={(props) => {
              return <User {...props} />;
            }}/>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
