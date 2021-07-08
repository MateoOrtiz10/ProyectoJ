import React, {useState} from 'react';
import Login from '../Pages/Login';
import AdmJaves from '../Pages/AdmJav';


function AdmPage () {
    const [conectado, setConectado] = useState(false);
    const acceder=(estado)=>{
        setConectado(estado)
    }
    return (
        conectado ? <AdmJaves/> : <Login acceder={acceder}/>
    ); 
}

export default AdmPage