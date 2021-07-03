import React from 'react'
import { FormmsAppointment } from './forms'
import './styles.css'

export function AppointmentContainer(){
    return(
        <div className="appointment-container">
            <section className="section-text">
                <h1>Marque sua consulta</h1>
            </section>
            <FormmsAppointment />
        </div>
    )
}