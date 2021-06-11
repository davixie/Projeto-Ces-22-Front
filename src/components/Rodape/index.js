import React from 'react'
import { Link } from 'react-scroll'
import './styles.css'

export function Rodape(){

    return(
        <div className="rodape-container">
            <div className="rodape-information">
                <section>
                    <h3>Informações</h3>
                    <h4>
                        <Link
                            activeClass="active"
                            to="/"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                        >Quem Somos?</Link>
                    </h4>
                    
                    <h4>Planos</h4>
                    <h4>Cadastramento</h4>
                </section>
                <section>
                    <h3>Agendar</h3>
                    <h4>Covid</h4>
                    <h4>Dúvidas</h4>
                </section>
                <section>
                    <h3>Contato</h3>
                    <h4>Email: contato@gmail.com</h4>
                    <h4>Telefone: (12) 99999-9999</h4>
                    <h4>Endereço: Rua H8B, São José dos Campos (SP)</h4>
                </section>
            </div>
            <div className="rodape-end">
                <h3>Saude Ponto</h3>
                <section>
                    <a href="https://www.instagram.com/erickcoe/?hl=pt-br" target="blank">
                        <img src="https://static.wixstatic.com/media/da7ef6dd1302486c9a67baebe4b364bc.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01/da7ef6dd1302486c9a67baebe4b364bc.webp" alt="insta"/>
                    </a>
                    <a href="https://www.instagram.com/erickcoe/?hl=pt-br" target="blank">
                        <img src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01/23fd2a2be53141ed810f4d3dcdcd01fa.webp" alt="face"/>
                    </a>
                    <a href="https://www.instagram.com/erickcoe/?hl=pt-br" target="blank">
                        <img src="https://static.wixstatic.com/media/7528824071724d12a3e6c31eee0b40d4.png/v1/fill/w_22,h_22,al_c,q_85,usm_0.66_1.00_0.01/7528824071724d12a3e6c31eee0b40d4.webp" alt="linkedin"/>
                    </a>
                </section>
            </div>
        </div>
    )
}