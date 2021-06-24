import React from 'react';
import '../Style/javes.css';
import AppFrame from '../Components/AppFrame/AppFrame';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import {Link} from 'react-router-dom';

const RegistroSal = () => {
    const URL_API='http://localhost/api-demo/insertar_registro_salida.php';
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
            <h3 className="titulo">Registro de Salidas</h3><br/>            
                <Grid item xs={12}>
                <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre:</label><br/>
                <input type="text" className="form-control text-center" name="NombreTrab" {...register("NombreTrab", {required: true})} />
                {errors.NombreTrab && <span className='text-danger'>Se requiere el nombre</span>}
                <br />                
                <label>Fecha:</label><br/>
                <input type="date" className="form-control text-center" name="Fecha" {...register("Fecha", {required: true})}></input>
                {errors.Fecha && <span className="text-danger">Se requiere la fecha</span>}
                <br />
                <label>Hora de Salida (24hrs):</label><br/>
                <input type="time" className="form-control text-center" name="HorarioSalida" {...register("HorarioSalida", {required: true})} ></input>
                {errors.HorarioSalida && <span className="text-danger">Se requiere el horario</span>}
                <br />
                <button type="submit" className="botonenes">Guardar</button>
                <button type="reset" className="botonenes">Borrar</button>
            </form> <br />  
                </Grid>
                <Link to='main'>VOLVER</Link>                   
                </Grid>                  
        </AppFrame>
    )
}

export default RegistroSal;
