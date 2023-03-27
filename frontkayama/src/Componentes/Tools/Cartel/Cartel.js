import React from 'react';
import './Cartel.css'
function Cartel(props) {
    let {image, text, imageOptions, textOptions, containerOptions} = props
    return ( <>
    
        <div style={{...containerOptions}}>
            <img style={{...imageOptions}} src={image}></img>
            <h1 src={text}></h1>
        </div>
    
    </> );
}

export default Cartel;