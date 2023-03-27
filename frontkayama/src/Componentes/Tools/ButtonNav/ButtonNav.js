import React from 'react';
import { NavLink } from 'react-router-dom';
function ButtonNav(props) {
    let { to, text } = props
    const defaultOptions = {
        display: 'flex', 
        background: 'gray',
        color: 'yellow',
        textDecoration: 'none',
        
    }
    let options = props.options || defaultOptions

    return ( <>
    
        <NavLink style={{...options}} to={'/' + to}>{text}</NavLink>
    
    </> );
}

export default ButtonNav;