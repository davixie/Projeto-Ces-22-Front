import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { message } from 'antd'

import './styles.css'
import axios from 'axios';
import '../../api/constants'
import { base_url } from '../../api/constants';

export function FormmsRegister(){
    const history = useHistory();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [senha, setSenha] = useState("")

    const [emptyName, setEmptyName] = useState(false)
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptySenha, setEmptySenha] = useState(false)
    const [emptyTelefone, setEmptyTelefone] = useState(false)

    const [invalidEmail, setInvalidEmail] = useState(false)
    const [invalidTelefone, setInvalidTelefone] = useState(false)

    function checkEmptyName(){
        if(name===""){
            setEmptyName(true)
            return;
        }else{ setEmptyName(false) }
    }

    function checkEmail(){
        console.log("aqui")
        if(email===""){
            setEmptyEmail(true)
            return;
        }else{ setEmptyEmail(false) }
        if(!(email.includes("@") && email.includes(".com"))){
            console.log("aqui dentro")
            setInvalidEmail(true)
        }else{
            setInvalidEmail(false)
        }
    }

    function checkTelefone(){
        if(telefone===""){
            setEmptyTelefone(true)
            return;
        }else{ setEmptyTelefone(false) }
    }

    async function handleRegister(e){
        e.preventDefault()
        try{
            let error = false;
            if(name === ""){
                setEmptyName(true)
                error = true;
            }
            if(email === ""){
                setEmptyEmail(true)
                error = true;
            }else if(invalidEmail){
                setInvalidEmail(true)
                error = true;
            }
            if(senha===""){
                setEmptySenha(true)
                error = true;
            }
            if(telefone===""){
                setEmptyTelefone(true)
                error = true;
            }else if(invalidTelefone){
                setInvalidTelefone(true)
                error = true;
            }
            if(error) return;
            let data = {
                name: name,
                phone: telefone,
                email: email,
                password: senha
            }
            await axios.post(base_url + "/auth/pacient_view_set/", data)
            history.push("/")
        }catch(err){
            alert("Infelizmente ocorreu um erro com o servidor.")
        }
    }

    return(
        <div className="forms-container">
            <form onSubmit={handleRegister}>
                <section className="section-input">
                    <span className="title">Nome: </span>
                    <section>
                        <input
                            placeholder="Nome"
                            value={name}
                            onBlur={checkEmptyName}
                            onChange={e => setName(e.target.value)}    
                        />
                        {emptyName && <span>Esse campo não pode estar em branco</span>}
                    </section>
                    
                </section>
                <section className="section-input">
                    <span className="title">Email: </span>
                    <section>
                        <input
                            placeholder="Email"
                            value={email}
                            onBlur={checkEmail}
                            onChange={e => setEmail(e.target.value)}    
                        />
                        {emptyEmail && <span>Esse campo não pode estar em branco</span>}
                        {(!emptyEmail && invalidEmail) && <span>Insira um email válido</span>}
                    </section>
                    
                </section>
                <section className="section-input">
                    <span className="title">Telefone: </span>
                    <section>
                        <input
                            placeholder="(99)99999-9999"
                            value={telefone}
                            onBlur={checkTelefone}
                            onChange={e => setTelefone(e.target.value)}    
                        />
                        {emptyTelefone && <span>Esse campo não pode estar em branco</span>}
                        {(!emptyTelefone && invalidTelefone) && <span>Insira um telefone válido</span>}
                    </section>
                    
                </section>
                <section className="section-input">
                    <span className="title">Senha: </span>
                    <section>
                        <input
                            type="password"
                            placeholder="senha"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}    
                        />
                        {emptySenha && <span>Esse campo não pode estar em branco</span>}
                    </section>
                    
                </section>
                <button type="submit">CADASTRAR</button>
            </form>
        </div>
    )
}