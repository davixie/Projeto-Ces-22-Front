import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { message } from 'antd'
import {DatePicker} from 'react-date-picker'
import {TimePicker} from 'react-time-picker'

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

    function checkDate(){ 
        console.log("aqui")
        if(date===""){
            setEmptyDate(true)
            return;
        }else{ setEmptyDate(false) }
        setInvalidDate(false)
    }
    function checkTime(){
        console.log("aqui")
        if(time===""){
            setEmptyTime(true)
            return;
        }else{ setEmptyTime(false) }
        setInvalidTime(false)
    }


    async function handleAppointment(e){
        e.preventDefault()
        console.log("em 0")
        try{
            let error = false;
            if(date === ""){
                setEmptyDate(true)
                error = true;
            }else if(invalidDate){
                setInvalidDate(true)
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
                    <span className="title">Selecione uma data: </span>
                    <section>
                        <input //DatePicker
                            value={date}
                            onChange={e => setDate(e.target.value)} 
                        />
                    </section>
                    <span className="title">Selecione um horário: </span>
                    <section>
                        <input //TimePicker
                            value={time}
                            onChange={e => setTime(e.target.value)} 
                        />
                    </section>
                </section>
                <button type="submit">Marcar</button>
            </form>
        </div>
    )
}