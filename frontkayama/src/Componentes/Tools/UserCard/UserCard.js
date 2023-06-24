import React from 'react';
import './UserCard.css'
import primerKyu from '../../../Assets/primerkyu.png'
import segundoKyu from '../../../Assets/segundokyu.png'
import tercerKyu from '../../../Assets/tercerkyu.png'
import cuartoKyu from '../../../Assets/cuartokyu.png'
import quintoKyu from '../../../Assets/quintokyu.png'
import sextoKyu from '../../../Assets/sextokyu.png'
import septimoKyu from '../../../Assets/septimokyu.png'
import octavoKyu from '../../../Assets/octavokyu.png'
import novenoKyu from '../../../Assets/cintapng.png'
import decimoKyu from '../../../Assets/decimokyu.png'
import cintaNegra from '../../../Assets/cintanegra.png'
import Cinta from '../Cinta/Cinta';
function UserCard({user}) {
    let cintasList = [cintaNegra, primerKyu, segundoKyu, tercerKyu, cuartoKyu, quintoKyu, sextoKyu, septimoKyu, octavoKyu, novenoKyu, decimoKyu]
    return ( <>
        <div className='userCardContainer'>
            <h3>{user?.name}</h3>
            <h4>{user?.privileges}</h4>
            <img className='userCardImage' src={user?.image}></img>
            <h4>{user?.age}</h4>
            {(user?.kyu && user?.dan) ? <Cinta kyu = {user?.kyu || null} dan = {user?.dan || null} image = {cintasList[Number(user?.kyu) ] || cintasList[0]}></Cinta>: 'Sin Nivel'}
        </div>
    
    </> );
}

export default UserCard;