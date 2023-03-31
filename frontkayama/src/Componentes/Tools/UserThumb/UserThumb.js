import React from 'react';
import './UserThumb.css'
function UserThumb(props) {
    let {user, options, callback} = props
    
    return ( <>
    
        <div onClick={() => {callback()}} style={{...options.container}}>
            <img style = {{...options.image}}  src={user?.image || '' } alt='userimage'></img>
            <div style = {{...options.text}} className='userName'>{user?.name || ':('}</div>

        </div>
    
    </> );
}

export default UserThumb;