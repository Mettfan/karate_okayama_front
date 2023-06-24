import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SlidingMenu.css'
import { useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
function SlidingMenu(props) {
    let [state, setState] = useState({
        menuIsActive: props.menuIsActive,

    })
    let cookie = new Cookies()
    let user = cookie.get('user')

    return ( <>
        <div className={'menuContainer' + String((props?.menuIsActive || state?.menuIsActive)) }>
           {state.menuIsActive}
            <NavLink className={'navLinkMenu'} to={'/'}>Inicio</NavLink>
            {/* <NavLink className={'navLinkMenu'} to={'/login'}>Inicia Sesión</NavLink> */}
            {/* <NavLink className={'navLinkMenu'} to={'/register'}>Regístrate</NavLink> */}
            <NavLink className={'navLinkMenu'} to={'/dojos'}>Inscripción</NavLink>
            <NavLink className={'navLinkMenu'} to={'/productos'}>Productos</NavLink>
            <NavLink className={'navLinkMenu'} to={'/información'}>Conócenos</NavLink>
            {user?.privileges === 'admin' && <NavLink className={'navLinkMenu'} to={'/personal'}>Personal</NavLink>}


        </div>
        {/* {JSON.stringify(user)} */}
    
    
    </> );
}

export default SlidingMenu;