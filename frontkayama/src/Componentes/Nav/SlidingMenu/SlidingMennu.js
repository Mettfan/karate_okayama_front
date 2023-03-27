import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SlidingMenu.css'
function SlidingMenu(props) {
    let [state, setState] = useState({
        menuIsActive: props.menuIsActive,

    })

    return ( <>
        <div className={'menuContainer' + String((props?.menuIsActive || state?.menuIsActive)) }>
           {state.menuIsActive}
            <NavLink className={'navLinkMenu'} to={'/'}>Inicio</NavLink>
            {/* <NavLink className={'navLinkMenu'} to={'/login'}>Inicia Sesión</NavLink> */}
            {/* <NavLink className={'navLinkMenu'} to={'/register'}>Regístrate</NavLink> */}
            <NavLink className={'navLinkMenu'} to={'/dojos'}>Inscripción</NavLink>
            <NavLink className={'navLinkMenu'} to={'/productos'}>Productos</NavLink>
            <NavLink className={'navLinkMenu'} to={'/información'}>Conócenos</NavLink>


        </div>
    
    
    </> );
}

export default SlidingMenu;