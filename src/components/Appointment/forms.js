import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { message } from 'antd'

import './styles.css'

export function FormmsAppointment(){
    const history = useHistory();

    const [date, setDate] = useState("")
    const [time, setTime] = useState("")

    const [emptyDate, setEmptyDate] = useState(false)
    const [emptyTime, setEmptyTime] = useState(false)

    const [invalidDate, setInvalidDate] = useState(false)
    const [invalidTime, setInvalidTime] = useState(false)

    function checkEmptyDate(){
        if(date===""){
            setEmptyDate(true)
            return;
        }else{ setEmptyDate(false) }
    }
    function checkEmptyTime(){
        if(time===""){
            setEmptyTime(true)
            return;
        }else{ setEmptyTime(false) }
    }

    async function handleAppointment(e){
        e.preventDefault()
        console.log("em 0")
        try{
            let error = false;
            if(date === ""){
                setEmptyDate(true)
                error = true;
            }
            if(time === ""){
                setEmptyTime(true)
                error = true;
            }else if(invalidTime){
                setInvalidTime(true)
                error = true;
            }
            if(error) return;
            history.push("/")
        }catch(err){
            alert("Infelizmente ocorreu um erro com o servidor.")
        }
    }

    return(
        <div className="forms-container">
            <form onSubmit={handleAppointment}>
            <section className="section-input">
                    <span className="comment">Selecione uma data e horário para sua consulta, um médico com disponibilidade irá atendê-lo virtualmente no link de consulta gerado. As consultas acontecem diariamente das 06:00 as 20:00.</span>
                    <span className="title">Selecione uma data: </span>
                    <section>
                        <div>
                            <input type="date" id="date" name="date" value={date}
                                placeholder={date}
                                selected={date}
                                onChange={e => setDate(e.target.value)} 
                            />
                        </div>
                    </section>
                    <span className="title">Selecione um horário: </span>
                    <section>
                        <input type="time" step="1800" id="time" name="time" value={time}
                            value={time}
                            onChange={(e) => setTime(e.target.value)} 
                        />
                    </section>
                </section>
                <button type="submit">Marcar</button>
            </form>
        </div>
    )
}