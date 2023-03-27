import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';
function Catalogo() {
    return ( <>
    <div>
        <ButtonNav to= {'login'} text={'Iniciar Sesión'}></ButtonNav>
        <ButtonNav to= {'register'} text={'Inscríbete'}></ButtonNav>
    </div>
    
    </> );
}

export default Catalogo;