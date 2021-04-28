import React from 'react';
import { Route } from 'react-router';
import Header from './Components/Header';
import Menu from './Components/Menu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className='jumbotron'>
        <Header/>
        <Route>
        <Navbar />
        <switch>
          <Route path='/'/>
          </switch>
        </Route>
        
    </div>
  );
}

export default App;
