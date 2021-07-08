import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../Style/javes.css';
import { useForm } from 'react-hook-form';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import {Link} from 'react-router-dom';

const RegistroTrabajador = () => {
    const URL_API='http://localhost/api-demo/insertar_registro_trabajador.php';
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
        <Grid container justify="center" className="adm">
             <h3 className="titulo">Registros de Trabajadores</h3><br/>   
             <Grid item xs={12}>
                <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <label>ID de Trabajador:</label><br/>
                <input type="text" className="form-control text-center" name="idTrabajador" {...register("idTrabajador", {required: true})} />
                {errors.idTrabajador && <span className='text-danger'>Se requiere el ID</span>}
                <br />   
                <label>Nombre del Trabajador:</label><br />
                <input type="text" className="form-control text-center" name="NombreTrab" {...register("NombreTrab", {required: true})}></input>
                {errors.NombreTrab && <span className="text-danger">Se requiere el nombre</span>}
                <br />            
                <label>Apellidos del Trabajador</label><br/>
                <input type="text" className="form-control text-center" name="ApellidosTrab" {...register("ApellidosTrab", {required: true})} ></input>
                {errors.ApellidosTrab && <span className="text-danger">Se requiren los apellidos</span>}
                <br />
                <label>Número de Teléfono del Trabajador</label><br/>
                <input type="text" className="form-control text-center" name="TelefonoTrab" {...register("TelefonoTrab", {required: true})} ></input>
                {errors.TelefonoTrab && <span className="text-danger">Se requiere el teléfono</span>}
                <br /> 
                <button type="submit" className="botonenes">Guardar</button>
                <button type="reset" className="botonenes">Borrar</button>
                <Link to='/AdmJav' className="btn btn-dark">REGRESAR</Link>
            </form> <br />              
                </Grid>                
        </Grid>
    )
}

export default RegistroTrabajador
