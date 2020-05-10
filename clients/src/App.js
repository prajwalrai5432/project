import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Brand from './components/layout/Brand';
import Car from './components/layout/Car';
import Showroom from './components/layout/Showroom';
import './App.css';

function App() {
  return (
    // <div className='App'>
    //   <Navbar />
    //   <Landing />
    // </div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/Home' component={Landing} />
        <Route exact path='/Brand/:BrandName' component={Brand} />
        <Route exact path='/Car/:CarId' component={Car} />
        <Route exact path='/Showrooms/:Brand' component={Showroom} />
      </Switch>
    </Router>
  );
}

export default App;
