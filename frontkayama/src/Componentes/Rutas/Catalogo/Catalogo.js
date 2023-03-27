import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';
function Catalogo() {
    const loginButtonOptions = {
        position: 'fixed',
        background: 'black',
        color: 'yellow',
        textDecoration: 'none',
        padding: '10px',
        borderTop: "3px solid white",
        left: '0px',
        bottom: '0px'
        

    }
    const registerButtonOptions = {
        position: 'fixed',
        background: 'black',
        color: 'yellow',
        textDecoration: 'none',
        padding: '10px',
        borderTop: "3px solid white",
        right: '0px',
        bottom: '0px'
        

    }
    return ( <>
    <div>
        <ButtonNav options={{...loginButtonOptions}} to= {'login'} text={'Iniciar Sesión'}></ButtonNav>
        <ButtonNav options={{...registerButtonOptions}} to= {'register'} text={'Inscríbete'}></ButtonNav>
    </div>
    
    </> );
}

export default Catalogo;