import React from 'react'
import { Container } from '@material-ui/core';

const Form = () => {
    return (
        <Container className="formulario" maxWidth="sm">
            <form>
                <label className='text-danger'>
                    Nombre: 
                    <input type="text" name="nombre"></input>
                </label>
            </form>
        </Container>
    )
}

export default Form
