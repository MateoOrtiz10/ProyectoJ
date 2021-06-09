import React from 'react';
import '../Style/javes.css';
import AppFrame from '../Components/AppFrame/AppFrame';
import Grid from '@material-ui/core/Grid';

const RegisterOut = () => {
    return (
        <AppFrame>
            <h3 className="titulo">Registro de Salidas</h3><br/>            
            <Grid container justify="center" direction="colum">
                <Grid item xs={12}>
                <form className="formulario">
                <label>Nombre:
                    <input type="text" className="form-control" />
                </label><br/>
                <label>Fecha:
                    <input type="date" className="form-control"></input>
                </label><br/>
                <label>Hora de Salida:
                    <input type="time" className="form-control"></input>
                </label><br/>
                <button className="btn btn-primary">Guardar</button>
                <button type="reset" className="btn btn-primary">Borrar</button>
            </form> <br />  
                </Grid>                
            </Grid>                  
        </AppFrame>
    )
}

export default RegisterOut
