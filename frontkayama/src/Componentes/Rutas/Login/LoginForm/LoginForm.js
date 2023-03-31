import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchOneUser } from '../../../../features/users/userSlice';
import Cookies from 'universal-cookie'
import './LoginForm.css'
function LoginForm() {
    let dispatch = useDispatch()
    let nav = useNavigate()
    let globalState = useSelector(state => state)
    let cookie = new Cookies()
    let user = useSelector(state => state.users.user)  || cookie.get('user')
    useEffect(() => {
        if(user?.name){
            nav('/')
        }
    }, [user])
    let [state, setState ] = useState({
        userInput: '',
        userPass: ''
    })
    // useEffect(() =>{
    //     if(globalState.users.user["privileges"]){
    //         cookie.set('user', globalState.users.user)
    //         nav('/user/' + globalState.users?.user?.id)
    //     }
    // },[globalState.users])
    function handleOnChange(e){
        setState({...state, [e.target.name]: e.target.value})
    }
    function handleOnSubmit(e){
        e?.preventDefault && e?.preventDefault()
        console.log(state);
        dispatch(fetchOneUser({filter: 'email', value: state.userInput, password: state.userPass}))
    }
    return ( <>
    
        <div>
            <form className='loginForm' onSubmit={(e) => handleOnSubmit(e)}>
                <div className='inputGroup'> 
                    <label>Usuario</label>
                    <input name='userInput' type={'text'} placeholder={'Escriba el Usuario...'} onChange={(e) => handleOnChange(e)}></input>
                </div>
                <div className='inputGroup'> 
                    <label>Contraseña</label>
                    <input name='userPass' type={'password'} placeholder={'Escriba su Contraseña'} onChange={(e) => handleOnChange(e)}></input>
                </div>
                <input name='submitButton' className='submitButton' type={'submit'} placeholder={'Ingresar'}  ></input>
            </form>
            {JSON.stringify(globalState)}

        </div>
    
    </> );
}

export default LoginForm;