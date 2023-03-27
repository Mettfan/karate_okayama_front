import React from 'react';
import { NavLink } from 'react-router-dom';
function ButtonNav(props) {
    let { to, text } = props

    return ( <>
    
        <NavLink to={'/' + to}>{text}</NavLink>
    
    </> );
}

export default ButtonNav;