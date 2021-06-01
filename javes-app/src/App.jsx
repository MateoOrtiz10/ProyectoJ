import React from 'react';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
        <div>
        <Header/>  
      <h2>Hola! Bienvenido!</h2>                                                       
      <Router>
        <>
        <Link to ='/'>Go to welcome</Link><br />
        <Link to ='/employed'>Go to Register Employed</Link> <br />
        <Link to ='/Out'>Go to Register Out</Link><br />        
        </>
        <Switch>
          <Route exact path='/'>
            <h2>Welcome!</h2>
          </Route>          
          <Route path='/out'>
            <h2>Out!</h2>
          </Route>
          <Route path='/employed'>
            <h2>Employed!</h2>
          </Route>
          <Route>
            <h2>Not Found</h2>
          </Route>
        </Switch>
      </Router>
      </div>
  )
}

export default App;
