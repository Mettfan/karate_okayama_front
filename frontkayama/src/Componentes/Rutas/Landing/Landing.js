import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';

function Landing() {
    const sucursalesButtonOptions = {
        position: 'fixed',
        background: 'black',
        color: 'yellow',
        textDecoration: 'none',
        padding: '10px',
        borderTop: "3px solid white",
        left: '0px',
        bottom: '0px'
        

    }
    const catalogButtonOptions = {
        position: 'fixed',
        background: 'black',
        color: 'yellow',
        textDecoration: 'none',
        padding: '10px',
        right: '0px',
        bottom: '0px'

    }
    return ( <>
    <div>
        <ButtonNav options = {{...sucursalesButtonOptions}} to = {'dojos'} text={'Sucursales'}></ButtonNav>
        <ButtonNav options = {{...catalogButtonOptions}} to = {'productos'} text={'Catálogo'}></ButtonNav>
    </div>
    </> );
}

export default Landing