import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/javes.css';
const WelcomePage = () => {
    return (
        <div>
            <h3 className="titulo">!Bienvenido al Inicio!</h3><br />
            <h4 className="text-center opcion">Eliga la opcion deseada...</h4><br/>
            <Link to ='/entradas'className="link btn btn-dark">Registro de Entradas</Link> <br />
            <Link to ='/salidas' className="link btn btn-dark">Registro de Salidas</Link><br />                
        </div>
    )
}

export default WelcomePage
