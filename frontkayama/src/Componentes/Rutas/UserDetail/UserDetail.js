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
            image: decimoKyu,
            color: 'white'
        },
        {
            kyu: '9',
            image: novenoKyu,
            color: 'white'
        },
        {
            kyu: '8',
            image: octavoKyu,
            color: 'purple',
            secondaryColor: 'white'
        },
        {
            kyu: '7',
            image: septimoKyu,
            color: 'purple'
        },
        {
            kyu: '6',
            image: sextoKyu,
            color: 'purple',
            secondaryColor: 'yellow'
        },
        {
            kyu: '5',
            image: quintoKyu,
            color: 'yellow'
        },
        {
            kyu: '4',
            image: cuartoKyu,
            color: 'orange'
        },
        {
            kyu: '3',
            image: tercerKyu,
            color: 'green'
        },
        {
            kyu: '2',
            image: segundoKyu,
            color: 'blue'
        },
        {
            kyu: '1',
            image: primerKyu,
            color: 'brown'
        },
        {
            dan: '1',
            image: cintaNegra,
            color: 'black'

        }
    ]
    let userGrade = cintas?.find(cinta => cinta?.kyu == globalUser?.kyu)
    function kyuColorSelector(grade){
        let foundBelt = cintas?.find( cinta => cinta?.kyu === grade )
        return foundBelt?.color
    } 
    function kyuSecondaryColorSelector(grade){
        let foundBelt = cintas?.find( cinta => cinta?.kyu === grade )
        return foundBelt?.secondaryColor ?? foundBelt?.color
    } 
    return ( <>
    
        <div className='userDetailContainer'>
        <div className='gradesContainerUserPage'>
            <div style={{
                backgroundColor: kyuColorSelector(String(globalUser?.kyu)),
                width: "100%",
                height: "100%",
                opacity: 0.5,
                borderBottom: 'solid black 3px'
                
            }}>-
            </div>
                <div className='dataContainer'>
                    <span className='userNamePage'>
                        <h1 >{globalUser?.name}</h1>
                    </span>
                    <span>
                        <h5>{globalUser?.privileges}</h5>
                    </span>
                </div>
                {userGrade.kyu ? <Cinta kyu = {userGrade?.kyu} image={userGrade?.image}  ></Cinta> : 'Validando sus datos...'}
            <div style={{
                backgroundColor: kyuSecondaryColorSelector(String(globalUser?.kyu)),
                width: "100%",
                height: "100%",
                opacity: 0.5,
                borderTop: 'solid black 3px'
                
                }}>-
            </div>

           
        </div>
        <div className='imageUserPageContainer'>
            <div style={{
                backgroundColor: kyuSecondaryColorSelector(String(globalUser?.kyu))
            }}>
                <div style={{
                    backgroundColor: kyuColorSelector(String(globalUser?.kyu)),
                    width: '100%',
                    height: '100%',
                }}>-
                </div>
                <div>
                    <img className='userDetailImage'  src={globalUser?.image}></img>

                </div>
                {/* <div>
                    <CrearClase></CrearClase>
                </div> */}
                <div style={{
                    backgroundColor: kyuColorSelector(String(globalUser?.kyu)),
                    width: '100%',
                    height: '100%',
                }}>-
                </div>

            </div>
                <button onClick={() => {logout()}} className='logoutButton'>
                    <div className='logoutText'>
                        Cerrar Sesión
                    </div>
                </button>

        </div>

        </div>
    
    </> );
}

export default UserDetail;