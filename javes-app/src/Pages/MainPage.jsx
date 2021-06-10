import React from 'react';
import AppFrame from '../Components/AppFrame/AppFrame';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const MainPage = () => {
    return (
        <AppFrame>
            <Grid container justify="center" alignItems="center" direction="column">                
                <Link to='/entradas'>Registrar una entrada</Link> 
                <Link to='/salidas'>Registrar una salida</Link>                           
            </Grid>
        </AppFrame>
    )
}

export default MainPage
