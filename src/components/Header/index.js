import React, { useState } from 'react'
import { Affix } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.png'
import './styles.css'

export function Header(){

    const [open, setOpened] = useState(false)

    const sections = [
        {
            "name": "HOME",
            "route": "/"
        },
        {
            "name": "PLANOS",
            "route": "/"
        },
        {
            "name": "CADASTRAR",
            "route": "/register"
        },
        {
            "name": "ENTRAR",
            "route": "/login"
        }
    ]

    function openDropper(e){
        e.preventDefault()
        setOpened(!open)
    }

    if(window.innerWidth < 800){
        return(
            <Affix>
                <div className="header-container-mobile">
                    <a href="/">
                        <img src={logo} alt="logo"/>
                    </a>
                    <div>
                        <a onClick = {e => openDropper(e)}>
                            <MenuUnfoldOutlined style={{color: '#031035', fontSize: '25px'}}/>
                        </a>
                        {open &&
                            <div className="dropper-container">
                                {sections.map(section => (
                                    <a href={section.route}>{section.name}</a>
                                ))}
                            </div>
                        }
                    </div>
                    
                </div>
            </Affix>
        )
    } else {
        return(
            <Affix>
                <div className="header">
                    <div className="header-container">
                        <section className="section-title">
                            <a href="/">
                                <img src={logo} alt="logo"/>
                            </a>
                        </section>
                        
                        {sections.map(section => (
                            <a href={section.route}>{section.name}</a>
                        ))}
                    </div>
                    
                </div>
            </Affix>
        )
    }
    
}