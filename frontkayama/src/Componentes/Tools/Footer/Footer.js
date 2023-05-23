import React from 'react';
import './Footer.css'
import fbLogo from '../../../Assets/fbLogo.png'
import instaLogo from '../../../Assets/instaLogo.png'
import mailPng from '../../../Assets/mailPng.png'
import phonePng from '../../../Assets/whitePhone.png'
import Github from '../../../Assets/Github.png'
import Linkedin from '../../../Assets/Linkedin.png'
import FAQ from '../../../Assets/FAQ.png'
import Cookies from 'universal-cookie';
function Footer() {
    let cookie = new Cookies()
    let user = cookie.get('user')
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
                <div>{socialMedia('FAQ', FAQ, '/FAQ')}</div>
                {user?.privileges === 'admin' && fbLogo && socialMedia('Facebook', fbLogo , 'https://www.facebook.com/people/Okayama-Valle-de-Toluca/100028422446883/' )}
                {user?.privileges === 'admin' && instaLogo && socialMedia('Instagram', instaLogo , 'https://www.instagram.com/okayama_karatedo/?igshid=YmMyMTA2M2Y%3D' )}
                {user?.privileges === 'admin' && mailPng && socialMedia('Correo', mailPng , 'okayamavalledetoluca@hotmail.com', true )}
                {user?.privileges === 'admin' && phonePng && socialMedia('Contacto', phonePng , '7221076933', false, true )}

            </div>
            <div className='credits'>
                <div className='mediaDev'>
                    <h6>Desarrollador</h6>
                    <div>{socialMedia('Github', Github, 'https://github.com/Mettfan')}</div>
                    <div>{socialMedia('LinkedIn', Linkedin, 'https://www.linkedin.com/in/cesar-yannick-fullstack-developer/')}</div>
                </div>
            </div>
        </div>

    </>  );
}

export default Footer;
