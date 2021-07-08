import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai';
import '../../Style/javes.css';


export default function Table(props){
    return(
        <>    
        <table className="table table-bordered table-dark">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Teléfono</th>
            <th scope="col" className="text-center">Editar</th>
            </tr>
        </thead>
        <tbody>
              {
                  props.array.map((item, i)=>(
                      <tr key={i}>
                          <th scope="row">{i+1}</th>            
                          <td>{item.NombreTrab}</td>
                          <td>{item.ApellidosTrab}</td>
                          <td>{item.TelefonoTrab}</td>
                          <td role="button" 
                          id={item.idTrabajador}
                          className="text-center editar"
                          onClick={props.handleEditar}>                          
                                <AiOutlineEdit/>                            
                            </td>                        
                      </tr>
                  ))
              }      
        </tbody>
        </table>

        </>
    )
}

