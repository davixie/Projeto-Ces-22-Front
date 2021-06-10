import React from 'react'
import './styles.css'
import profissional1 from '../../assets/profissional1.jpg'
import profissional2 from '../../assets/profissional2.jpg'
import profissional3 from '../../assets/profissional3.jpg'

export function Casting(){
    return(
        <div className="casting-container">
            <h1>O TIME DE PROFISSIONAIS</h1>
            <div className="professionals-container">
                <section>
                    <img src={profissional1} alt="profissional1" />
                    <p><b>Profissional 1:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>
                <section>
                    <img src={profissional2} alt="profissional2" />
                    <p><b>Profissional 2:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>
                <section>
                    <img src={profissional3} alt="profissional3" />
                    <p><b>Profissional 3:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </section>
            </div>
            
        </div>
    )
}