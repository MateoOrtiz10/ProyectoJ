import React from 'react';
import * as FaIcons from "react-icons/fa";
import {link} from 'react-router-dom'
const Menu = () => {
    return (
        <>
            <div className="navbar">
                <link to="#" className='menu-bars'>
                     <FaIcons.FaBars/>
                </link>
            </div>
        </>
    );
}

export default Menu;
