import React, {useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Net from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null)
    const [vanta,setVanta]= useState(0)

    console.log("Primera Renderizacion: ", myRefDiv.current)


    useEffect(() => {
        console.log("Segunda Renderizacion: ", myRefDiv.current)
        if(vanta === 0){
            setVanta(
                Net({
                    THREE,
                    el: myRefDiv.current
                })
            )
            console.log("Vanta es diferente de 0")

        }
        return () =>{
            if(vanta){
                vanta.destroy()
                console.log("Recursos Liberados")
            }
        }
    },[vanta])

    return (
        <div className="full" ref={myRefDiv}>
            {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
