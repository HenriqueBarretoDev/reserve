import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router";
import {AdminContainer, AdminWorkingDays, DefineWorkingHours, WhatsAppAdmin} from "./styles";
import Calendar from 'react-calendar';

const Admin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState("Aryelson");

    useEffect(() => {
        if (!loading && localStorage.getItem("token") !== null) {
            navigate("/admin")
        }
    }, [loading, navigate])

    function goToHome() {
        navigate('/')
    }
    //daqui
    // const [startTime, setStartTime] = useState(new Date(2022, 0, 1, 8, 0));
    // const [endTime, setEndTime] = useState(new Date(2022, 0, 1, 19, 0));
    // const [appointmentDuration, setAppointmentDuration] = useState(30);
    // const [appointments, setAppointments] = useState([]);
    //
    // const onStartTimeChange = (event) => {
    //     setStartTime(new Date(2022, 0, 1, event.target.value.split(':')[0], event.target.value.split(':')[1]));
    //     updateAppointments();
    // };
    //
    // const onEndTimeChange = (event) => {
    //     setEndTime(new Date(2022, 0, 1, event.target.value.split(':')[0], event.target.value.split(':')[1]));
    //     updateAppointments();
    // };
    //
    // const onAppointmentDurationChange = (event) => {
    //     setAppointmentDuration(event.target.value);
    //     updateAppointments();
    // };
    //
    // const updateAppointments = () => {
    //     let currentTime = startTime;
    //     const newAppointments = [];
    //     while (currentTime < endTime) {
    //         newAppointments.push(currentTime);
    //         currentTime = new Date(
    //             currentTime.getTime() + appointmentDuration * 60 * 1000
    //         );
    //     }
    //     setAppointments(newAppointments);
    // };
    // const AppointmentCard = ({ time }) => (
    //     <div>
    //         <p>Horário do atendimento: {time.toLocaleTimeString()}</p>
    //     </div>
    // );
// até aqui 2
    const [startTime, setStartTime] = useState(new Date(2022, 0, 1, 8, 0));
    const [endTime, setEndTime] = useState(new Date(2022, 0, 1, 19, 0));
    const [appointmentDuration, setAppointmentDuration] = useState(30);
    const [appointmentType, setAppointmentType] = useState('default');
    const [appointments, setAppointments] = useState([]);

    const appointmentDurations = {
        default: 30,
        haircut: 45,
        hair_styling: 60,
        beard_trimming: 30
    };

    const onStartTimeChange = (event) => {
        setStartTime(new Date(2022, 0, 1, event.target.value.split(':')[0], event.target.value.split(':')[1]));
        updateAppointments();
    };

    const onEndTimeChange = (event) => {
        setEndTime(new Date(2022, 0, 1, event.target.value.split(':')[0], event.target.value.split(':')[1]));
        updateAppointments();
    };

    const onAppointmentTypeChange = (event) => {
        setAppointmentType(event.target.value);
        setAppointmentDuration(appointmentDurations[event.target.value]);
        updateAppointments();
    };

    const updateAppointments = () => {
        let currentTime = startTime;
        const newAppointments = [];
        while (currentTime < endTime) {
            newAppointments.push(currentTime);
            currentTime = new Date(
                currentTime.getTime() + appointmentDuration * 60 * 1000
            );
        }
        setAppointments(newAppointments);
    };

    const AppointmentCard = ({ time }) => (

        <div>
            <p>Horário do atendimento: {time.toLocaleTimeString()}</p>
        </div>
    );

// até aqui

    return (
        <AdminContainer>
            <h2>Bem vindo  {nome ? nome : 'Administrador'}</h2>

            <WhatsAppAdmin>
                <h4>WhatsApp para administração cliente/salão</h4>
                <input type="text"/>
            </WhatsAppAdmin>

            <AdminWorkingDays>
                <h4>Dias a trabalhar</h4>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Segunda-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Terça-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Quarta-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Quinta-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Sexta-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Sábado</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Domingo</label>
                </span>
            </AdminWorkingDays>

            <DefineWorkingHours>
                <h4>Definir jornada de trabalho segunda a sexta</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente:
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </DefineWorkingHours>

            <DefineWorkingHours>
                <h4>Definir jornada de trabalho Sábado</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente:
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </DefineWorkingHours>

            <DefineWorkingHours>
                <h4>Definir jornada de trabalho Domingo</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente:
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19:00</option>
                    </select>
                </p>
            </DefineWorkingHours>

            <div>
                <button onClick={goToHome}>
                    <h4> Voltar para agenda</h4>
                </button>
            </div>

            {/*daqui*/}

            {/*<div>*/}
            {/*    <Calendar />*/}
            {/*    <div>*/}
            {/*        <label>*/}
            {/*            Início do horário de trabalho:*/}
            {/*            <input*/}
            {/*                type="time"*/}
            {/*                value={startTime.toLocaleTimeString().slice(0, 5)}*/}
            {/*                onChange={onStartTimeChange}*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <br />*/}
            {/*        <label>*/}
            {/*            Fim do horário de trabalho:*/}
            {/*            <input*/}
            {/*                type="time"*/}
            {/*                value={endTime.toLocaleTimeString().slice(0, 5)}*/}
            {/*                onChange={onEndTimeChange}*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*        <br />*/}
            {/*        <label>*/}
            {/*            Duração do atendimento (em minutos):*/}
            {/*            <input*/}
            {/*                type="number"*/}
            {/*                value={appointmentDuration}*/}
            {/*                onChange={onAppointmentDurationChange}*/}
            {/*            />*/}
            {/*        </label>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        {appointments.map((appointment, index) => (*/}
            {/*            <AppointmentCard key={index} time={appointment} />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}



            <div>
                <Calendar />
                <div>
                    <label>
                        Início do horário de trabalho:
                        <input
                            type="time"
                            value={startTime.toLocaleTimeString().slice(0, 5)}
                            onChange={onStartTimeChange}
                        />
                    </label>
                    <br />
                    <label>
                        Fim do horário de trabalho:
                        <input
                            type="time"
                            value={endTime.toLocaleTimeString().slice(0, 5)}
                            onChange={onEndTimeChange}
                        />
                    </label>
                    <br />
                    <label>
                        Tipo de atendimento:
                        <select value={appointmentType} onChange={onAppointmentTypeChange}>
                            <option value="default">Padrão (30 minutos)</option>
                            <option value="haircut">Corte (45 minutos)</option>
                            <option value="hair_styling">Estilo de cabelo (60 minutos)</option>
                            <option value="beard_trimming">Barba (30 minutos)</option>
                        </select>
                    </label>
                    <br />
                </div>
                <div>
                    {appointments.map((appointment, index) => (
                        <AppointmentCard time={appointment} key={index} />
                    ))}
                </div>
            </div>
            {/*ate aqui*/}
        </AdminContainer>
    )
}
export default Admin
