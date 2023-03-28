import React from 'react';
import './Feature.css'

function Feature(props) {
    return ( <>

        <div className='featureContainer'>
            <div className='featureTitle'>
                {props.title}
            </div>
            <div className='featureImageContainer'>
                <img className='featureImage' src={props.image}/>
            </div>
            <div className='featureDescription'>
                {props.description}
            </div>

        </div>
        
    </> );
}

export default Feature;