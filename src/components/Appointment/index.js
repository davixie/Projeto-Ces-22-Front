import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from 'axios'
import './styles.css'
import { base_url } from '../../api/constants';

export function AppointmentContainer(){
    const history = useHistory();
    // const info=[{id: 1, doctor:"Alexandre",data:"21/04/1999",schedule:"19:00"},{id: 2, doctor:"João",data:"14/17/0934",schedule:"07:00"},{id: 3, doctor:"Alexandre",data:"152/29/2072",schedule:"16:00"}]

    const [list, setList] = useState([])
    const [user, setUser] = useState({})

    async function setListHorarios(){
        // setList(info) //comment this
        let resposta = await axios.get(base_url + "/schedule/schedule_view_set/")
        if(resposta.status == 200 || resposta.status == 201) setList(resposta.data)

        let user = await axios.get(base_url + "/auth/pacient_view_set/pacient_personal_info/", {
            headers:{
                Authorization: "Token " + localStorage.getItem("token")
            }
        })
        console.log("aqui", user)
        if(user.status == 200 || user.status == 201) setUser(user.data)
    }

    useEffect(async () => {
        await setListHorarios()
    }, [])

    async function selectAppointment(horario){
        try{
            let data = {
                schedule_id: horario.id
            }
            await axios.post(base_url + "/schedule/schedule_view_set/make_appointment/", data, {
                headers:{
                    Authorization: "Token " + localStorage.getItem("token")
                }
            })
            console.log(horario)
            alert("Agendamento realizado!")
            history.push("/")
        } catch(err){
            console.log(err)
            alert("Houve um erro no agendamento, tente novamente mais tarde")
        }        
    }

    return(
        <div className="agendamento-container">
            <h1>Olá {user.name}, marque sua consulta aqui</h1>
            <h2>Selecione uma data e horário para sua consulta, um médico com disponibilidade irá atendê-lo virtualmente no link de consulta gerado. As consultas acontecem diariamente das 06:00 as 20:00.</h2>
            <section className="section-choose-appointment">
                <section className="horario-container">
                    <section>
                        <span>Inicio</span>
                        <span>Termino</span>
                        <span>Nome do Doutor</span>
                        <span></span>
                    </section>
                </section>
                {list.map(horario => (
                    <section className="horario-container">
                        <div></div>
                        <section>
                            <span>{horario.initial_time}</span>
                            <span>{horario.final_time}</span>
                            <span>{horario.doctor_name}</span>
                            <button onClick={() => selectAppointment(horario)}>SELECIONAR</button>
                        </section>
                       
                    </section>
                ))}
            </section>

        </div>
    )
}