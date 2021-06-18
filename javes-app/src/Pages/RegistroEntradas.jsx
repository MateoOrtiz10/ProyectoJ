import React from 'react';
import '../Style/javes.css';
import AppFrame from '../Components/AppFrame/AppFrame';
import Grid from '@material-ui/core/Grid';


const RegisteEmployed = () => {
    return (
        <AppFrame>
            <Grid container justify="center" direction="colum"> 
            <h3 className="titulo">Registro de Entradas</h3> <br/>   
            <Grid item xs={12}>
            <form className="formulario" >
                <label>Nombre:</label><br />
                <input type="text" className="form-control text-center" /><br />
                <label>Fecha:</label><br />
                <input type="date" className="form-control text-center"></input><br />
                <label>Hora de Entrada:</label><br />
                <input type="time" className="form-control text-center"></input><br />
                <button type="submit" className="botonenes">Guardar</button>                
                <button type="reset" className="botonenes">Borrar</button>
            </form> <br />        
            </Grid>                                        
            </Grid>            
        </AppFrame>         
        
                 
    )
}

export default RegisteEmployed
