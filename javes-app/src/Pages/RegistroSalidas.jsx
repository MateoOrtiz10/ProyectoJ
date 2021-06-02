import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/javes.css';

const RegisterOut = () => {
    return (
        <div>
            <h3 className="titulo">Registro de Salidas</h3><br/>
            <form>
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
            <Link to='./' className="link btn btn-dark">Regresar a Inicio</Link>     
        </div>
    )
}

export default RegisterOut
