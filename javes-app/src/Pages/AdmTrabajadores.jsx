import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import '../Style/javes.css';
import Table from '../Components/Table/Table';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

var trabajadores;

const AdmTrabajadores = () => {
    //Estados y Metodos del from validate
    const { register, handleSubmit, formState: { errors } } = useForm();

    //Evento que se lanza cuando se da clic al boton
    const onSubmit = data => {
        data.idTrabajador=trabajador.idTrabajador;
        console.log(data);
        enviarDatosEditados(data);
    };
    console.log(errors);

    //Estado de datos listos
    const [isReady, setIsReady]= useState(false);

    //Estado que almacena los datos del trabajador actual 
    const [trabajador, setTrabajador]= useState(null);

    //Estado del modal
    const [show, setShow] = useState(false);

    //Metodos del modal
    const handleClose = () => setShow(false);
    const abrirModal = () => setShow(true);

    //ciclo de vida cuando el componente esta recien cargado 
    useEffect(()=>{
        obtenerRegistros()
    }, []);

    const obtenerRegistros=()=>{                       
        fetch("http://localhost/api-demo/obtener_trabajadores.php")
        .then(resp=> resp.json())
        .then(json=>{
        trabajadores=json;
        setIsReady(true);        
            // console.log(json);
        })
    }

    const handleEditar=(e)=>{
        let id= e.currentTarget.id;
        console.log(id);
        // console.log(buscarId(trabajadores, id));
        setTrabajador(buscarId(trabajadores, id));
        abrirModal();
    }

    const enviarDatosEditados=(data)=>{
        handleClose();      
        setIsReady(false);
        fetch("http://localhost/api-demo/actualizar_trabajador.php",{
            'method': 'POST',
            'headers': {'Content-Type' : 'application/json'},
            'body': JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(json =>{
            console.log(json);

            //Condicional para evaluar si el servidor actualizo los datos
            if(json.isOk){
                console.log(json.msj);
                alertify.alert("Edición de usuarios", json.msj);
                obtenerRegistros();
            }else{
                console.log(json.msj);
                obtenerRegistros();
            }
        })
    }

    const buscarId=(array , id)=>{
        let tmpUsuario =null;
        for(let index=0; index < array.length; index ++){
            if(array[index].idTrabajador === id){
                tmpUsuario=array[index]
            }
        }
        return tmpUsuario;
    }

    const mdlEdit = (         
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edición de Trabajador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { trabajador && 
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre:</label><br/>
        <input className="form-control" type="text" name="NombreTrab" defaultValue={trabajador.NombreTrab} {...register("NombreTrab", {})} />
        <br />
        <label>Apellidos</label><br/>
        <input className="form-control" type="text" name="ApellidosTrab" defaultValue={trabajador.ApellidosTrab} {...register("ApellidosTrab", {})} />
        <br />
        <label>Teléfono:</label><br/>
        <input className="form-control" type="text" name="TelefonoTrab" defaultValue={trabajador.TelefonoTrab} {...register("TelefonoTrab", {})} />
        <br />
        <button type="submit" className="btn btn-dark">Actualizar</button>
        </form>
        }
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>    
    )

    return (
        <Grid container justify="center" className="adm"> 
         <h3 className="titulo">Edición de Trabajadores</h3><br/>         
        <Grid item xs={12}>
        {
            isReady ? <Table array={trabajadores} handleEditar={handleEditar} />
            : 
            <div className="alert alert-info">Cargando datos...</div>
        }  
        {mdlEdit} 
        </Grid>      
        <Link to='/AdmJav' className=" btn btn-primary text-center">REGRESAR</Link>                           
        </Grid>
    )
}

export default AdmTrabajadores
