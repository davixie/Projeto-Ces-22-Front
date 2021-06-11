import React from 'react'
import { FormmsRegister } from './forms'
import './styles.css'

export function RegisterContainer(){
    return(
        <div className="register-container">
            <section className="section-text">
                <h1>SEJA NOSSO CLIENTE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit.</p>
            </section>
            <FormmsRegister />
        </div>
    )
}