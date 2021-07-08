import React from "react";
import RegistroEntradas from "./Pages/RegistroEntradas";
import RegistroSalidas from "./Pages/RegistroSalidas";
import Bienvenido from "./Pages/Bienvenido";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFoundPage";
import MainPage from "./Pages/MainPage";
import Trabajadores from "./Pages/RegistroTrabajador";
import AdmTrabaj from "./Pages/AdmTrabajadores";
import AdmPageP from './Pages/AdmPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@material-ui/core/Grid";
import AdmJav from "./Pages/AdmJav";

const App = () => {
  return (
    <Grid container justify="center" direction="row">
      <Router>
        <Switch>
          <Route exact path="/">
            <Bienvenido />
          </Route>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/entradas">
            <RegistroEntradas />
          </Route>
          <Route path="/salidas">
            <RegistroSalidas />
          </Route>
          <Route path="/LoginAdm">
            <Login />
          </Route>
          <Route path="/Trabajadores">
            <Trabajadores />
          </Route>
          <Route path="/ConsultasT">
            <AdmTrabaj />
          </Route>
          <Route path='/Admin'>
            <AdmJav/>
          </Route>
          <Route path='/AdmPage'>
            <AdmPageP/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Grid>
  );
};

export default App;
