import React from 'react';
import desinfeccionPng from '../../../../Assets/desinfeccion.png'
import friendlyEnvironment from '../../../../Assets/friendlyEnvironment.png'
import karateInstructor from '../../../../Assets/karateInstructor.png'
import Feature from '../../../Tools/Feature/Feature';
import './NotInscribed.css'
import { useNavigate } from 'react-router-dom';
function NotInscribed() {
    let nav = useNavigate()
    return ( <>
        <div>   
            <h1>REGISTRATE PARA VER NUESTROS DOJOS!</h1>
            <div className='featuresContainer'>
                <Feature 
                title = {'Desinfección Completa'}
                image = {desinfeccionPng}
                description = 'Contamos con Tapete Sanitizante y Gel Antibacterial. Desinfectamos nuestro material de entrenamiento para que usted o su hijo pueda entrenar sin preocupaciones'
                />
                <Feature 
                title = {'Ambiente Amigable y Seguro'}
                image = {friendlyEnvironment}
                description = 'Los alumnos interactuan y realizan ejercicios con otros alumnos de diversos grados. Siempre promovemos la disciplina y el respeto entre ellos'
                />
                <Feature 
                title = {'Instructores Capacitados'}
                image = {karateInstructor}
                description = 'Trabajamos día con día para mejorar las habilidades de nuestro Staff y así usted pueda recibir el mejor entrenamiento mientras nosotros lo guíamos en su camino a Cinta Negra'
                />
            </div>
            <div>
                <h1 onClick={() => {nav('/register')}} className='gotoRegister'>Solicite su Registro</h1>
            </div>


        </div>    
    </> );
}

export default NotInscribed;