import React from 'react';
import '../Style/javes.css';
import AppFrame from '../Components/AppFrame/AppFrame';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import {Link} from 'react-router-dom';

const RegistroEnt = () => {
    const URL_API='http://localhost/api-demo/insertar_registro_entrada.php';
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch(URL_API, {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)          
        })
        .then( resp=> resp.json () )
        .then(json=>{
            reset();
            console.log("Respuesta:", json);
            alertify.alert("Información de Envío", json.msj);                        
        })
    };
    console.log(errors);

    return (       
        <AppFrame>
            <Grid container justify="center"> 
            <h3 className="titulo">Registro de Entradas</h3> <br/>   
            <Grid item xs={12}>
            <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <label>ID de Trabajador</label><br />                
                <input type="text" className="form-control text-center" name="idTrabH" {...register("idTrabH", {required: true})} />
                {errors.idTrabH && <span className='text-danger'>Se requiere el ID</span>}
                <br />                
                {/* <label>Fecha:</label><br />
                <input type="date" className="form-control text-center" name="FechaEnt" {...register("FechaEnt", {required: true})}></input>
                {errors.FechaEnt && <span className="text-danger">Se requiere la fecha</span>}
                <br /> */}
                {/* <label>Hora de Entrada (24hrs):</label><br />
                <input type="time" className="form-control text-center" name="HorarioEntrada" {...register("HorarioEntrada", {required: true})} ></input>
                {errors.HorarioEntrada && <span className="text-danger">Se requiere el horario</span>}
                <br /> */}
                <button type="submit" className="botonenes">Guardar</button>                
                <button type="reset" className="botonenes">Borrar</button>
            </form> <br />                   
            </Grid>
            <Link to='/'>SALIR</Link>                                         
            </Grid>            
        </AppFrame>         
        
                 
    )
}

export default RegistroEnt;

