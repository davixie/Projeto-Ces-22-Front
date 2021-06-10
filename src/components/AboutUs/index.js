import React from 'react'
import aboutus from '../../assets/aboutus.jpg'
import './styles.css'

export function AboutUs(){

    return(
        <div className="aboutus-container">
            <h1>QUEM SOMOS?</h1>
            <section>
                <img src={aboutus} alt="aboutus"/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
            
        </div>
    )
}