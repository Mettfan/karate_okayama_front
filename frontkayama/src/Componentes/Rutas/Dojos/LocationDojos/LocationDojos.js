import React from 'react';
import './LocationDojos.css'
import phonePng from '../../../../Assets/whitePhone.png'
import mailPng from '../../../../Assets/mailPng.png'

function LocationDojos() {
   let dojos = [
      {
         name: 'San Andres',
         link: 'https://goo.gl/maps/EojSJgJFwhepPsDc7',
         img: 'https://lh5.googleusercontent.com/p/AF1QipMa8uGsSp1YGWgu433Uav8ZIPMxkQNQ_uBwDYg4=w408-h725-k-no',
         sensei: '',
         staff: [],
         members: [],
         phone: '',
         schedule: {
            'Lunes': '4:50 - 7:50',
            'Martes': '4:50 - 7:50',
            'Miércoles': '4:50 - 7:50',
            'Jueves': '4:50 - 7:50',
            'Viernes': '4:50 - 6:50',
            'Sábado': '4:50 - 7:50',
         }
      },
      {
         name: 'San Antonio',
         link: 'https://goo.gl/maps/Y442ZJvBVvWnHmDEA',
         img: '',
         sensei: '',
         staff: [],
         members: [],
         phone: '',
         schedule: {
            'Lunes': '4:30 - 7:20',
            'Martes': '5:30 - 7:20',
            'Miércoles': '4:30 - 7:20',
            'Jueves': 'Cerrado',
            'Viernes': '4:00 - 7:35',
            'Sábado': '3:50 - 7:20',
         }
      },
      {
         name: 'Mexicaltzingo',
         link: '',
         img: '',
         sensei: '',
         staff: [],
         members: [],
         phone: '',
         schedule: {
            'Lunes': '-',
            'Martes': '-',
            'Miércoles': '-',
            'Jueves': '-',
            'Viernes': '-',
            'Sábado': '-',
         }
      },
      {
         name: 'Zinacantepec',
         link: '',
         img: '',
         sensei: '',
         staff: [],
         members: [],
         phone: '',
         schedule: {
            'Lunes': '-',
            'Martes': '-',
            'Miércoles': '-',
            'Jueves': '-',
            'Viernes': '-',
            'Sábado': '-',
         }
         
      }
   ]
   let socialMedia = (name, imageUrl, gotoUrl, mail, phone) => {
      return (<>
          <a className='socialMediaContainer' href={ !phone ? !mail ? gotoUrl : 'mailto:' : 'tel:'+ gotoUrl } target="_blank" rel="noopener noreferrer" >
  
              <div className='socialMediaName' style={{'color':'black'}}>
  
                  {name || ''}
  
              </div>
              <img className='socialMediaImage' src={ imageUrl }></img>
  
  
          </a>
      </>)
  }
    return ( <>
   <h1 className='pageLocationTitle'>
      ¡Encuentra tu Dojo más cercano y visítanos!
   </h1>
 <div className='dojosPage' >
   {dojos?.map && dojos.map( dojo => {
      return <div className='dojoCard'>
      <h2 className='dojoName'>
         {'Dojo de '+ dojo.name}
      </h2>
      {/* <div >
         <img className='dojoImg' src={dojo.img}></img> 
      </div> */}
      <div className='infoDojos'>

         <div className='dojoLink'>
            <div className='dojoContacts'>
               {/* <img
               className='mapsLogo'
               src='https://seeklogo.com/images/G/google-maps-2014-logo-6108508C7B-seeklogo.com.png' 
               onClick={() => {window.open(dojo.link, "_blank")}}
               ></img> */}
            { dojo.link && socialMedia('Ver en Maps', 'https://seeklogo.com/images/G/google-maps-2014-logo-6108508C7B-seeklogo.com.png', dojo.link )}
            { dojo.phone && socialMedia('Contacto', 'https://cdn-icons-png.flaticon.com/512/124/124034.png?w=360' , dojo.phone, false, true )}
               

            </div>
            <h3>
               Horarios
            </h3>
            <div className='scheduleContainer'>
               {Object?.entries(dojo?.schedule).map( day => {
                  return (<div className='dayScheduleContainer'>
                     <div className='dayNameContainer'>
                        {day[0] + ' '}
                     </div>
                     <div className='hourValueContainer'>
                        {day[1]}
                     </div>

                  </div>)
               } )}
            </div>
            

         </div>

      </div>




    </div>

    
   })


   }
</div>
<h3 className='infoBottom'>
   O mándanos un {socialMedia('Correo', mailPng , 'okayamavalledetoluca@hotmail.com', true )}
</h3>
<h3 className='phraseBottom'>
   'Nunca es tarde para aprender algo nuevo'
</h3>
    
        
    
    </>
      );
}

export default LocationDojos;