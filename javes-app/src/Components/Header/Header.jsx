import React from 'react';
import '../../Style/javes.css';
import logo from '../../Img/Logo.jpg';

function Header() {
    return (
       <div className="header">           
            <img src={logo} alt="Javes" className="logotipo" />              
            <h1 className='empresa'>JAVES</h1>       
        </div>       
    )
}

export default Header;
