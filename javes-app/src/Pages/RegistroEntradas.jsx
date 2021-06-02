import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/javes.css';


const RegisteEmployed = () => {
    return (
        <div>
            <h3 className="titulo">Registro de Entradas</h3> <br/>   
            <form>
                <label>Nombre:
                    <input type="text" className="form-control" />
                </label><br/>
                <label>Fecha:
                    <input type="date" className="form-control"></input>
                </label><br/>
                <label>Hora de Entrada:
                    <input type="time" className="form-control"></input>
                </label><br/>
                <button type="submit" className="btn btn-primary">Guardar</button>                
                <button type="reset" className="btn btn-primary">Borrar</button>
            </form> <br />        
            <Link to='./' className="link btn btn-dark">Regresar a Inicio</Link>           
        </div>         
        
                 
    )
}

export default RegisteEmployed
