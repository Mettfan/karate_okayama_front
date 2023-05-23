import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOneUser } from '../../../features/users/userSlice';
import Cookies from 'universal-cookie';
import CrearClase from '../../Tools/CrearClase/CrearClase';
import { getMyProducts } from '../../../features/products/productSlicetest';
import primerKyu from '../../../Assets/primerkyu.png'
import segundoKyu from '../../../Assets/segundokyu.png'
import tercerKyu from '../../../Assets/tercerkyu.png'
import cuartoKyu from '../../../Assets/cuartokyu.png'
import quintoKyu from '../../../Assets/quintokyu.png'
import sextoKyu from '../../../Assets/sextokyu.png'
import septimoKyu from '../../../Assets/septimokyu.png'
import octavoKyu from '../../../Assets/octavokyu.png'
import novenoKyu from '../../../Assets/cintapng.png'
import decimoKyu from '../../../Assets/decimokyu.png'
import cintaNegra from '../../../Assets/cintanegra.png'
import Cinta from '../../Tools/Cinta/Cinta';
import './UserDetail.css'
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
    let cintas = [
        {
            kyu: '10',
            image: decimoKyu
        },
        {
            kyu: '9',
            image: novenoKyu
        },
        {
            kyu: '8',
            image: octavoKyu
        },
        {
            kyu: '7',
            image: septimoKyu
        },
        {
            kyu: '6',
            image: sextoKyu
        },
        {
            kyu: '5',
            image: quintoKyu
        },
        {
            kyu: '4',
            image: cuartoKyu
        },
        {
            kyu: '3',
            image: tercerKyu
        },
        {
            kyu: '2',
            image: segundoKyu
        },
        {
            kyu: '1',
            image: primerKyu
        },
    ]
    let userGrade = cintas?.find(cinta => cinta?.kyu == globalUser?.kyu)
    return ( <>
    
        <div className='userDetailContainer'>
        <div className='gradesContainer'>
            <div className='dataContainer'>
                <span>
                    <h1>{globalUser?.name}</h1>
                </span>
                <span>
                    <h5>{globalUser?.privileges}</h5>
                </span>
            </div>
            <Cinta kyu = {userGrade?.kyu} image={userGrade?.image}  ></Cinta>
           
        </div>
            <div>
                <img className='userDetailImage'  src={globalUser?.image}></img>

            </div>
            {/* <div>
                <CrearClase></CrearClase>
            </div> */}
            <button onClick={() => {logout()}} className='logoutButton'>Cerrar Sesión</button>

        </div>
    
    </> );
}

export default UserDetail;