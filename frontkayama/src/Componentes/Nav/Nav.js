import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import okayamaLogo from '../../Assets/OkayamaLogo.png'
import UserThumb from '../Tools/UserThumb/UserThumb';
import './Nav.css'
import SlidingMenu from './SlidingMenu/SlidingMennu';
function Nav() {
    let nav = useNavigate()
    let cookie = new Cookies()
    let userGlobal = useSelector((state) => state.users )
    let globalUser = cookie.get('user') 
    // useEffect(()  N     N  NMJKJI


    
    let menuOptions = {
        zIndex: -3
    }
    let links = ['productos']
    let [state, setState] = useState({
        menuIsActive: false,

    })
    function switchMenu(){
        setState({...state, menuIsActive: !state.menuIsActive})
        console.log(state);
    }
    let userThumbOptions = {
        container: {
            height: "50px",
            borderRadius: "60px"


        },
        image: {
            height: "50px",
            borderRadius: "60px"
        },
        text: {
            color: 'white'
        }
    }
    function userThumbClick(){
        nav('/user/' + globalUser?.id)
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
                {globalUser && <UserThumb options = {{...userThumbOptions}} user = {globalUser} callback = {userThumbClick}></UserThumb>}
                {!globalUser && <NavLink className={'navLink'} to={'/login'}> Login </NavLink>}
                {/* {!globalUser && <NavLink className={'navLink'} to={'/register'}> Registro </NavLink>} */}

            </div>
            <SlidingMenu options={{...menuOptions}} menuIsActive = {state.menuIsActive} links = {[...links]}></SlidingMenu>
        </div>    

    </>);
}

export default Nav;