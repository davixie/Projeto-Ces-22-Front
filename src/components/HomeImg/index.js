import React from 'react'
import home_img from '../../assets/home_img.jpg'
import './styles.css'

export function HomeImg(){
    return (
        <div className="home_img">
            <img src={home_img} alt="home_img"/>
        </div>
    )
}