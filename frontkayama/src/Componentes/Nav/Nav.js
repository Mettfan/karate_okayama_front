import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import okayamaLogo from '../../Assets/OkayamaLogo.png'
import './Nav.css'
import SlidingMenu from './SlidingMenu/SlidingMennu';
function Nav() {
    let menuOptions = {
        display: 'flex'
    }
    let links = ['productos']
    let [state, setState] = useState({
        menuIsActive: false,

    })
    function switchMenu(){
        setState({...state, menuIsActive: !state.menuIsActive})
        console.log(state);
    }
    return (<>
        <div className='navContainer'>
            {/* Estos son los links que se muestran para cambiar de direccion en el Nav */}
            <div className='navLinks'>
                <NavLink className={'navLink'} to={'/'}> Inicio </NavLink>
                <NavLink className={'navLink'} to={'/dojos'}> Dojos </NavLink>
                <NavLink className={'navLink'} to={'/productos'}> Productos </NavLink>

            </div>
            <img onClick={() => switchMenu()} src={okayamaLogo} className={'navLogo'}></img>

            {/* Estos son los links para el registro y logeo */}
            <div className='navLogs'>
                <NavLink className={'navLink'} to={'/login'}> Login </NavLink>
                <NavLink className={'navLink'} to={'/register'}> Registro </NavLink>

            </div>
            <SlidingMenu menuIsActive = {state.menuIsActive} options = {{...menuOptions}} links = {[...links]}></SlidingMenu>
        </div>    
    </>);
}

export default Nav;