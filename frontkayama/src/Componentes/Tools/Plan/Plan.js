import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Plan.css'

function Plan(props) {
    let nav = useNavigate()
    let goto = (url) => {
        nav(url)
        window.scrollTo(0, 0)
    }
    return ( <>
    
        <div className='planContainer'>
            <div className='planTitle'>
                {props.title}
            </div>
            <div className='planImage'>
                <img className='planImageItem' src={props.image}/>
            </div>
            <div className='planDescription'>
                {props.description}
            </div>

            <div className='planDivider'></div>

            <div className='planInfo'>
                {props.info}
            </div>
            <button onClick={()=>{goto('/location')}} className='planButton'>¡Inscríbase con Nosotros!</button>
        </div>

      
    
    </> );
}

export default Plan;