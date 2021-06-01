import React from 'react';
import Header from './Components/Header/Header';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
        <div>
        <Header/>        
      <Router>
        <>
        <Link to ='/'>Inicio</Link><br />
        <Link to ='/entradas'>Registro de entradas</Link> <br />
        <Link to ='/salidas'>Registro de Salidas</Link><br />        
        </>
        <Switch>
          <Route exact path='/'>
            <h2>Bienvenido a Inicio!</h2>
          </Route>    
          <Route path='/entradas'>
            <h2>Registro de Entradas de Horario</h2>
          </Route>      
          <Route path='/salidas'>
            <h2>Registro de Salidas de Horario</h2>
          </Route>   
          <Route path='/AdmJav'>
            <h2>Administración de App</h2>
          </Route>      
          <Route>
            <h2>Error 404 Not Found</h2>
          </Route>          
        </Switch>
      </Router>
      </div>
  )
}

export default App;
