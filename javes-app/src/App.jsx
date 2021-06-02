import React from 'react';
import Header from './Components/Header/Header';
import RegistroEntradas from './Pages/RegistroEntradas';
import RegistroSalidas from './Pages/RegistroSalidas';
import Bienvenido from './Pages/Bienvenido';
import Admin from './Pages/AdmJav';
import NotFound from './Pages/NotFoundPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from '@material-ui/core/Grid';
import './Style/javes.css';
const App = () => {
  return (
        <Grid container justify="center" direction="row" className="container-fluid">
      <Header/>            
          <Router>       
            <Switch>
              <Route exact path='/'>
                <Bienvenido/>
              </Route>    
              <Route path='/entradas'>
                <RegistroEntradas/>
              </Route>      
              <Route path='/salidas'>
                <RegistroSalidas/>
              </Route>   
                <Route path='/AdmJav'>
                <Admin/>
              </Route>      
              <Route>
                <NotFound/>
              </Route>          
           </Switch>
          </Router>                 
      </Grid> 
  )
}

export default App;
