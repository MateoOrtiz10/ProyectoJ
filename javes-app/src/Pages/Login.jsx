import React, {useRef, useState} from "react";
import "../Style/javes.css";
import {FaLaptop, FaLock} from 'react-icons/fa';
import {GrMailOption} from 'react-icons/gr';


const URL_LOGIN="http://localhost/api-demo/login.php";


const enviarData = async (url, data)=>{
  
  const resp = await  fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type' : 'application/json'}
    })
    // console.log(resp);
    const json = await resp.json();
    // console.log(json);

    return json;
}


export default function Login(props) {    
  const [espera, setEspera]= useState(false);
  const [error, setError]=useState(null);

    const refUsuario = useRef(null);
    const refClave = useRef(null);

    const handleLogin= async()=>{
      setEspera(true);
        const data={
            "usuario": refUsuario.current.value,
            "clave": refClave.current.value
        };       
        console.log(data);
        const respuestaJson = await enviarData(URL_LOGIN, data);
        console.log("Respuesta desde el evento", respuestaJson);

        props.acceder(respuestaJson.conectado)
        setError(respuestaJson.error)
        setEspera(false);
    }


  return (    
    <div className="adm">
      <div className="row">
        <div className="col-sm-4 offset-4 mt-5">
          <div className="card pt-5">
            <div className="card-header text-center"> 
            <h3><FaLaptop className="icono"/> Administración</h3>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                 <GrMailOption/>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  ref={refUsuario}
                />
              </div>

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                  <FaLock/>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Clave"
                  aria-label="clave"
                  aria-describedby="basic-addon1"
                  ref={refClave}
                />
              </div>
              {
                  error && 
                  <div className="alert alert-danger text-center"> 
                  {error}
                  </div>
                }                                        
              <button className="btn btn-dark btn-lg btn-block" 
              onClick={handleLogin} 
              disabled={espera} >
                Acceder</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
