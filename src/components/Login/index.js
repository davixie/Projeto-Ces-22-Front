import { UserOutlined, LoginOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { login } from '../../api/auth'
import './styles.css'

export function LoginComponent(){
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [informationError, setInformationError] = useState(false)

    async function handleLogin(e){
        e.preventDefault()
        try{
            if(email != "" && senha != ""){
                let request = {
                    username: email,
                    password: senha
                }
                let response = await login(request)
                if(response.status != 200) return
                localStorage.setItem("loggedIn", "true")
                localStorage.setItem("token", response.data.token)
                history.push("/")
                window.location.reload();
                
            } else{setInformationError(true)}
        }catch(err){
            setInformationError(true)
            alert("Não foi possível realizar o login, tente novamente mais tarde.")
        }
    }

    return(
        <div className="login-container">
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
                <section>
                    <UserOutlined style={{fontSize: '25px', color: '#ffffff'}}/>
                    <input
                        placeholder="Email"
                        value={email}
                        // onBlur={}
                        onChange={e => setEmail(e.target.value)}
                    />
                </section>

                <section>
                    <LoginOutlined style={{fontSize: '25px', color: '#ffffff'}}/>
                    <input
                        placeholder="Senha"
                        value={senha}
                        type="password"
                        // onBlur={}
                        onChange={e => setSenha(e.target.value)}
                    />
                </section>

                {informationError ? <span>Email e senha incorretos</span> : <span></span>}

                <button type="submit">ENTRAR</button>
            </form>
        </div>
    )
}