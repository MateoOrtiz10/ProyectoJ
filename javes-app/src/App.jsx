import React from 'react';
import './App.css'; 
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import * as ReactBootStrap from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Departamentos from './Pages/Depertamentos';
import Dif from './Pages/Dif';
import Oapas from './Pages/Oapas';
import Obraspublicas from './Pages/Obraspublicas';
import Sindicatura from './Pages/Sindicatura';
import Tesoreria from './Pages/Tesoreria';
import CarouselContainer from './Components/Slider';
import Menudeabajo from'./Components/Menu_de_Abajo';
function App() {
  return (
    <>
    <div className='jumbotron'>
        <Header/>                     
    </div>
    <Router>
        <Navbar/>
        <Switch>
          <Route path='/departamentos' exact component={Departamentos}/>
          <Route path='/dif' component={Dif}/>
          <Route path='/oapas' component={Oapas}/>
          <Route path='/obraspublicas' component={Obraspublicas}/>
          <Route path='/sindicatura' component={Sindicatura}/>
          <Route path='/tesoreria' component={Tesoreria}/>
        </Switch>
      </Router>
      <CarouselContainer/>
      <Menudeabajo/>
  </>
 
  );
}

export default App;
