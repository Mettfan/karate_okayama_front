import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { fetchAllUsers, fetchOneUser } from '../../../features/users/userSlice';
import UserCard from '../../Tools/UserCard/UserCard';
import './Personal.css'
function Personal() {
    let cookies = new Cookies()
    let user = cookies.get('user')
    let dispatch = useDispatch()
    let allUsers = useSelector(status => status.users.users)
    useEffect(() => {
        if(user?.privileges === 'admin'){
            dispatch(fetchAllUsers())
        }
    }, [])
    return ( <>
        <div className='userCardsContainer'>
            {allUsers?.map(personal => {
                return (<UserCard user={personal} ></UserCard>)
            })}
        </div>
    
    
    </> );
}

export default Personal;