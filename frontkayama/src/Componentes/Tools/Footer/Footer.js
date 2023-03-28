import React from 'react';
import './Footer.css'
import fbLogo from '../../../Assets/fbLogo.png'
import instaLogo from '../../../Assets/instaLogo.png'
import mailPng from '../../../Assets/mailPng.png'
import phonePng from '../../../Assets/whitePhone.png'
function Footer() {
    let socialMedia = (name, imageUrl, gotoUrl, mail, phone) => {
        return (<>
            <a className='socialMediaContainer' href={ !phone ? !mail ? gotoUrl : 'mailto:' : 'tel:'+ gotoUrl } target="_blank"  >
    
                <div className='socialMediaName'>
    
                    {name || ''}
    
                </div>
                <img className='socialMediaImage' src={ imageUrl }></img>
    
    
            </a>
        </>)
    }
    //Component that renders on every social media
    return ( <>

        <div className='footerContainer'>
            <div className = {'socialMediasContainer'}>
                {fbLogo && socialMedia('Facebook', fbLogo , 'https://www.facebook.com/people/Okayama-Valle-de-Toluca/100028422446883/' )}
                {instaLogo && socialMedia('Instagram', instaLogo , 'https://www.instagram.com/okayama_karatedo/?igshid=YmMyMTA2M2Y%3D' )}
                {mailPng && socialMedia('Correo', mailPng , 'okayamavalledetoluca@hotmail.com', true )}
                {phonePng && socialMedia('Contacto', phonePng , '7221076933', false, true )}

            </div>
            <div className='credits'>
                Desarrollado por: Cesar Yannick Fullstack Dev
            </div>
        </div>

    </>  );
}

export default Footer;
