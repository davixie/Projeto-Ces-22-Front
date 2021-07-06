import React, { useEffect, useState } from 'react'
import { Affix } from 'antd'
import { MenuUnfoldOutlined } from '@ant-design/icons'
import logo from '../../assets/logo.png'
import './styles.css'
import { useHistory } from 'react-router'

export function Header(){
    const history = useHistory()

    const [open, setOpened] = useState(false)
    const [sections, setSections] = useState([])

    function openDropper(e){
        e.preventDefault()
        setOpened(!open)
    }

    useEffect(() => {
        const getUser = localStorage.getItem("token")
        if(getUser != null){
            setSections([
                {
                    "name": "HOME",
                    "route": "/"
                },
                {
                    "name": "CONSULTA",
                    "route": "/appointment"
                }
            ])
        } else{
            setSections([
                {
                    "name": "HOME",
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
            ])
        }
    }, [])

    async function handleLogout(e){
        e.preventDefault()
        localStorage.clear()
        window.location.reload();
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
                                <a onClick={handleLogout}>SAIR</a>
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
                        <a onClick={handleLogout}>SAIR</a>
                    </div>
                    
                </div>
            </Affix>
        )
    }
    
}