import React from 'react';
import videoOkayama from "../../../Assets/videoOkayama.mp4"
import './Informacion.css'
function Informacion() {
    let videoUrl = 'https://youtu.be/nxCSL1eFERU'
    return ( <>
    
        <div>
 
    <div className='aboutVideoContainer' >
        <video className='aboutVideo' loop autoPlay muted controls>
            <source type='video/mp4' src={videoOkayama}></source>
        </video>
    </div>

        </div>
</>)}

export default Informacion;