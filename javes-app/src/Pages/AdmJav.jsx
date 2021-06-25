import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import '../Style/javes.css';

const AdmJav = () => {
    return (            
         <Grid container className="adm" alignItems="center" direction="column" >                            
         <Grid item xs={3}>
            <h3 className="titulo">Administracion</h3>
         </Grid>
           <Link className="boton"  to='/Trabajadores'>Registrar un trabajador</Link>   
           {/* <Link className="boton"  to='#'>Realizar una consulta</Link> */}
           <br />
           <Link to='/'>SALIR</Link>            
        </Grid>        
    )
}

export default AdmJav
