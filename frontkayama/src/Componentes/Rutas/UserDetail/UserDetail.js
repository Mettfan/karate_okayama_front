import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOneUser } from '../../../features/users/userSlice';
import Cookies from 'universal-cookie';
import CrearClase from '../../Tools/CrearClase/CrearClase';
import { getMyProducts } from '../../../features/products/productSlicetest';
function UserDetail() {
    let cookie = new Cookies()
    let reduxUser = useSelector(state => state.users.user)
    let globalUser =  cookie.get('user')
    // let userProducts = useSelector(status => status?.products?.userProducts )
    let status = useSelector(status => status?.products )
    let nav = useNavigate()
    let dispatch = useDispatch() 
    useEffect(() => {
        if(!globalUser){
            nav('/login')
        }
    }, [])
    // useEffect(()=> {
    //     if(globalUser?.id){
    //         dispatch(getMyProducts({userId: globalUser?.id}))
    //     }
    // }, [])
    function logout(){
        console.log('removed');
        cookie.remove('user')
        window.location.reload()
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
            <div>
                <img  src={globalUser?.image}></img>
                <div className='clasesContainer' >
                    {JSON.stringify(status)}
                    {/* {userProducts?.map(product => {
                        return (<div>
                            {product?.Producto}
                        </div>)
                    })} */}
                </div>
            </div>
            {/* <div>
                <CrearClase></CrearClase>
            </div> */}
            <button onClick={() => {logout()}} className='logoutButton'>Cerrar Sesión</button>

        </div>
    
    </> );
}

export default UserDetail;