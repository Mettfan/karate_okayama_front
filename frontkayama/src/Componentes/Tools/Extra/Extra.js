import React from 'react';
import './Extra.css'
import { useNavigate } from 'react-router-dom'
function Extra(props) {
    let nav = useNavigate()
    let goto = (url) => {
        nav(url)
        window.scrollTo(0, 0)
    }
    return ( <>

        <div className='extraContainer' onClick={() => {goto(props.redirect)}}>
            
            <img className='extraImage' src={props.image} />
            <div className='extraText'>
                {props.text}
            </div>

        </div>


    </> );
}

export default Extra;