import React from 'react';
import ButtonNav from '../../Tools/ButtonNav/ButtonNav';
import Carousel from '../../Tools/Carousel/Carousel';
import karateCover from '../../../Assets/coverKarate.jpg'
import karateBaby from '../../../Assets/karateBaby.png'
import karateKid from '../../../Assets/karateKid.png'
import karateTeen from '../../../Assets/karateTeen.png'
import karateAdult from '../../../Assets/karateAdult.png'
import Cartel from '../../Tools/Cartel/Cartel';
import Plan from '../../Tools/Plan/Plan';
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
import './Landing.css'
import Cinta from '../../Tools/Cinta/Cinta';
function Landing() {
    const sucursalesButtonOptions = {
        position: 'fixed',
        background: 'black',
        color: 'yellow',
        textDecoration: 'none',
        padding: '10px',
        borderTop: "3px solid white",
        left: '0px',
        bottom: '0px'
        

    }
    const catalogButtonOptions = {
        position: 'fixed',
        background: 'black',
        color: 'yellow',
        textDecoration: 'none',
        padding: '10px',
        right: '0px',
        bottom: '0px'

    }
    const carouselOptions = {
        backgroundColor: 'red',
        position: 'absolute',

    }
    const  cartelOptions = {
        container: {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            zIndex: -3,
            backgroundColor: 'whitesmoke',
            width: "100%",
            height: 'auto',
            objectFit: 'cover',
        },
        image: {
            display: 'flex',
            zIndex: -3,
            position: 'relative',
            justifyContent: 'center', 
            widht: '100%',
            borderBottomRightRadius: 50,
            borderBottomLeftRadius: 50
            // height: 'auto'
        }
    }
    return ( <>
    <div className='landingContainer'>
        
        {/* El siguiente componente es el Cartel que se muestra */}
        <Cartel containerOptions = {{...cartelOptions.container}} imageOptions = {{...cartelOptions.image}} image = {karateCover} text= {'Conócenos'}></Cartel>

        {/* El la siguiente estructura se componente de distintos modulos, cada uno con su respectiva informacion */}
        <div className='plansContainer'>

         <Plan 
                title = {'Pre-Karate'}
                image = {karateBaby}
                description = {'Si su hijo/a tiene 5 años o menos ¡Este es el grupo perfecto!. Una buena manera de iniciar a su hijo/a en el mundo del Karate-Do'}
                info = {'Permita que nuestros Instructores altamente capacitados mejoren las habilidades Físicas y Cognitivas de su hijo/a con un entrenamiento especializado en pequeños Karatecas que van iniciando su camino en este Arte Marcial'}
            />
            <Plan 
                title = {'Niños/as'}
                image = {karateKid}
                description = {'Especializado en pequeños de desde los 6 años hasta los 12 años'}
                info = {'No pierda la oportunidad de inscribir a su niño/a en nuestro grupo donde hay una mayor interacción con otros alumnos de diversos grados. Una actividad extraescolar que le permitirá desarrollar su disciplina y buenos hábitos de manera constante'}
            />
            <Plan 
                title = {'Jóvenes'}
                image = {karateTeen}
                description = {'No esperes más para integrarte a nuestro grupo de Karatecas, si tienes entre 13 y 20 años ¡Puedes llegar a ser un gran Cinta Negra!'}
                info = {'Intégrese con nosotros y note un mejor desempeño en su condición física y mental. Se adaptará rápidamente a nuestros entrenamientos de la mano de nuestros Instructores altamente capacitados. ¡Si muestra un buen desempeño y carácter puede ser candidato a integrarse a nuestro equipo de Instructores!'}
            />
            <Plan 
                title = {'Adultos'}
                image = {karateAdult}
                description = {'¡Para personas que apuntan a lo alto! Para personas por encima de los 20 años'}
                info = {'Sabemos la importancia de la disciplina en la vida diaria, por eso mismo estamos comprometidos a mostrarle el camino para ser una mejor persona a través de la filosofía y los entrenamientos de alto rendimiento que tenemos preparados para usted'}
            />
        </div>

        {/* A continuacion se muestra un listado de Cintas */}
        <div className='gradesContainer'>
            <Cinta kyu = '10' image={decimoKyu}  ></Cinta>
            <Cinta kyu = '9' image={novenoKyu}  ></Cinta>
            <Cinta kyu = '8' image={octavoKyu}  ></Cinta>
            <Cinta kyu = '7' image={septimoKyu}  ></Cinta>
            <Cinta kyu = '6' image={sextoKyu}  ></Cinta>
            <Cinta kyu = '5' image={quintoKyu}  ></Cinta>
            <Cinta kyu = '4' image={cuartoKyu}  ></Cinta>
            <Cinta kyu = '3' image={tercerKyu}  ></Cinta>
            <Cinta kyu = '2' image={segundoKyu}  ></Cinta>
            <Cinta kyu = '1' image={primerKyu}  ></Cinta>
            <Cinta dan = '1' image={cintaNegra}  ></Cinta>
        </div>

        <ButtonNav options = {{...sucursalesButtonOptions}} to = {'dojos'} text={'Sucursales'}></ButtonNav>
        <ButtonNav options = {{...catalogButtonOptions}} to = {'productos'} text={'Catálogo'}></ButtonNav>
    </div>
    </> );
}

export default Landing