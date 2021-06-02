import React from 'react';
import {Link} from 'react-router-dom';
import '../Style/javes.css';
const NotFoundPage = () => {
    return (
        <div>
            <h2 className="titulo">Error 404 Not Found</h2>
            <Link to='./'>Regresar a Inicio</Link>
        </div>
    )
}

export default NotFoundPage
