import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';
import LoginForm from './LoginForm/LoginForm';
import './Login.css'
function Login() {
    return ( <>
    
        <div className='loginContainer'>
            {/* <ButtonNav to= {'register'} text={'Inscríbete'}></ButtonNav> */}
            <h1 className='loginTitle'>Inicia Sesión</h1>
            <LoginForm></LoginForm>
            
        </div>
    
    </> );
}

export default Login