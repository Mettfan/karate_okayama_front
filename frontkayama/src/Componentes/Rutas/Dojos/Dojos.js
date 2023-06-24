import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';
import LocationDojos from './LocationDojos/LocationDojos';
import Cookies from 'universal-cookie';
import NotInscribed from './NotInscribed/NotInscribed';
function Dojos() {
    let cookie = new Cookies()
    let user = cookie.get('user')
    let isAdmin = user?.privileges === 'admin'
    let isUser = user?.privileges === 'user'
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
        {JSON.stringify(user?.privileges )}
        {(isAdmin || isUser) ? <LocationDojos></LocationDojos> : <NotInscribed></NotInscribed> }
        {/* <ButtonNav options={{...loginButtonOptions}} to= {'login'} text={'Iniciar Sesión'}></ButtonNav>
        <ButtonNav options={{...registerButtonOptions}} to= {'register'} text={'Inscríbete'}></ButtonNav> */}
    </div>
    
    </> );
}

export default Dojos;