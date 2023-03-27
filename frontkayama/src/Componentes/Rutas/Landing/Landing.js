import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';
function Landing() {
    return ( <>
    <div>
        <ButtonNav to = {'dojos'} text={'Sucursales'}></ButtonNav>
        <ButtonNav to = {'productos'} text={'Catálogo'}></ButtonNav>
    </div>
    </> );
}

export default Landing;