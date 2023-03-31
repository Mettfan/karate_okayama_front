import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOneUser } from '../../../features/users/userSlice';
import Cookies from 'universal-cookie';
function UserDetail() {
    let cookie = new Cookies()
    let reduxUser = useSelector(state => state.users.user)
    let globalUser = reduxUser || cookie.get('user')
    let nav = useNavigate()
    let dispatch = useDispatch() 
    function logout(){
        console.log('removed');
        cookie.set('user', null)
        // dispatch(fetchOneUser({}))
        // nav('/')
        
        
    }
    return ( <>
    
        <div className='userDetailContainer'>
            {JSON.stringify(cookie.get('user'))}
            {JSON.stringify(reduxUser)}
            <span>
                <h1>{globalUser?.name}</h1>
            </span>
            <span>
                <h5>{globalUser?.privileges}</h5>
            </span>
            <img  src={globalUser?.image}></img>

            <button onClick={() => {logout()}} className='logoutButton'>Cerrar Sesión</button>

        </div>
    
    </> );
}

export default UserDetail;