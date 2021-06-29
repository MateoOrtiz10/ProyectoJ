import React from 'react';
import AppFrame from '../Components/AppFrame/AppFrame';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import '../Style/javes.css';

const MainPage = () => {
    return (
        <AppFrame>
            <Grid container justify="center" alignItems="center" direction="column">                
                <Link className="boton"  to='/entradas'>Registrar una entrada</Link> 
                <Link className="boton" to='/salidas'>Registrar una salida</Link>                         
            </Grid>
        </AppFrame>
    )
}

export default MainPage
