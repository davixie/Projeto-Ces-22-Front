import React from 'react';
import { HomeImg } from '../../components/HomeImg'
import { AboutUs } from '../../components/AboutUs'
import { Casting } from '../../components/Casting'
import { Rodape } from '../../components/Rodape'

export default function HomePage(){
    return (
        <div>
            <HomeImg />
            <div id="aboutus">
                <AboutUs />
            </div>
            <div id="casting">
                <Casting />
            </div>
        </div>
    )
}