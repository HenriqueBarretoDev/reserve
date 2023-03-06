import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router";
import {AdminContainer, AdminWorkingDays, DefineWorkingHours, WhatsAppAdmin} from "./styles";
import Calendar from 'react-calendar';
import {useAuth} from "../../Hooks/useAuth";

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
    const {
        newStartTime,
        setNewStartTime,
        newEndTime,
        setNewEndTime,
        maxTime,
        setMaxTime,
    } = useAuth()

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

    const AppointmentCard = ({time}) => (

        <div>
            <p>Horário do atendimento: {time.toLocaleTimeString()}</p>
        </div>
    );

    function handleStartTimeChange(value) {
        setStartTime(value);
    }

    function handleEndTimeChange(value) {
        setMaxTime(value);
    }

// daqui

    const [inicioHorario, setInicioHorario] = useState('08:00'); // horário de início do expediente
    const [fimHorario, setFimHorario] = useState('20:00'); // horário de término do expediente
    const [horariosAtendimento, setHorariosAtendimento] = useState([
        { nome: 'Corte de cabelo', tempo: 20 },
        { nome: 'Barba', tempo: 15 },
        { nome: 'Corte de sobrancelha', tempo: 10 },
        { nome: 'Corte com graxa', tempo: 40 }
    ]); // lista de horários de atendimento disponíveis com seus respectivos tempos
    const [descanso, setDescanso] = useState(false); // define se há ou não um horário de descanso

    // função para calcular o horário de término do último agendamento do dia
    function calcularFimDia() {
        let tempoTotalAtendimento = 0;
        horariosAtendimento.forEach(horario => {
            tempoTotalAtendimento += horario.tempo;
        });
        if (descanso) {
            tempoTotalAtendimento += 60; // se houver descanso, adiciona 60 minutos ao tempo total de atendimento
        }
        const [horas, minutos] = fimHorario.split(':');
        const fimDia = new Date();
        fimDia.setHours(horas);
        fimDia.setMinutes(minutos);
        fimDia.setSeconds(0);
        fimDia.setMilliseconds(0);
        fimDia.setTime(fimDia.getTime() - tempoTotalAtendimento * 60 * 1000);
        return `${fimDia.getHours()}:${fimDia.getMinutes().toString().padStart(2, '0')}`;
    }
    return (
        <AdminContainer>
            <h2>Bem vindo {nome ? nome : 'Administrador'}</h2>
            <div>
                <button onClick={goToHome} style={{backgroundColor: '#f87125'}}>
                    <h4> Exibir Agenda dia Atual</h4>
                </button>
            </div>
            <WhatsAppAdmin>
                <h4>WhatsApp para administração cliente/salão</h4>
                <input type="text"/>
            </WhatsAppAdmin>
            <div>
                <button onClick={goToHome} style={{backgroundColor: '#acf232'}}>
                    <h4> Voltar para Home</h4>
                </button>
            </div>
            <AdminWorkingDays>
                <h4>Definir Dias a trabalhar</h4>
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
                <div>
                    <label>Inicio do expediente:</label>
                    <input
                        type="number"
                        value={newStartTime}
                        onChange={(e) => setNewStartTime(e.target.value)}
                        placeholder={8}
                    />
                    <button onClick={() => handleStartTimeChange(newStartTime)}>
                        Atualizar Jornada de Inicio de trabalho
                    </button>
                    <br/>
                    <label>final do expediente</label>
                    <input
                        type="number"
                        value={maxTime}
                        onChange={(e) => setMaxTime(e.target.value)}
                        placeholder={'test'}
                    />
                    <button onClick={() => handleEndTimeChange(newEndTime)}>
                        Atualizar Final da Jornada de trabalho
                    </button>

                </div>
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
                <Calendar/>
                <div>


                    {/*<label>*/}
                    {/*    Início do horário de trabalho:*/}
                    {/*    <input*/}
                    {/*        type="time"*/}
                    {/*        value={startTime.toLocaleTimeString().slice(0, 5)}*/}
                    {/*        onChange={onStartTimeChange}*/}
                    {/*    />*/}
                    {/*</label>*/}
                    {/*<br/>*/}
                    {/*<label>*/}
                    {/*    Fim do horário de trabalho:*/}
                    {/*    <input*/}
                    {/*        type="time"*/}
                    {/*        value={endTime.toLocaleTimeString().slice(0, 5)}*/}
                    {/*        onChange={onEndTimeChange}*/}
                    {/*    />*/}
                    {/*</label>*/}

                    <label>
                        Tipo de atendimento:
                        <select value={appointmentType} onChange={onAppointmentTypeChange}>
                            <option value="default">Corte (30 minutos)</option>
                            <option value="haircut">Corte com graxa (45 minutos)</option>
                            <option value="hair_styling">Pezinho (60 minutos)</option>
                            <option value="beard_trimming">Barba (30 minutos)</option>
                            <option value="beard_trimming">Sobrancelha (30 minutos)</option>
                        </select>
                    </label>
                    <br/>
                </div>
                <div>
                    {appointments.map((appointment, index) => (
                        <AppointmentCard time={appointment} key={index}/>
                    ))}
                </div>
            </div>
            {/*ate aqui*/}
            daqui
            <div>
                <label htmlFor="inicioHorario">Horário de início do expediente:</label>
                <input id="inicioHorario" type="time" value={inicioHorario} onChange={e => setInicioHorario(e.target.value)} />
                <br />
                <label htmlFor="fimHorario">Horário de término do expediente:</label>
                <input id="fimHorario" type="time" value={fimHorario} onChange={e => setFimHorario(e.target.value)} />
                <br />
                <label htmlFor="horariosAtendimento">Horários de atendimento:</label>
                <ul id="horariosAtendimento">
                    {horariosAtendimento.map(horario => (
                        <li key={horario.nome}>
                            {horario.nome}: {horario.tempo} minutos
                        </li>
                    ))}
                </ul>
                <br />
                <label htmlFor="descanso">Há um horário de descanso?</label>
                <input id="descanso" type="checkbox" checked={descanso} onChange={e => setDescanso(e.target.checked)} />
                <br />
                <p>Horário de término do último agendamento do dia: {calcularFimDia()}</p>
            </div>
        </AdminContainer>
    )
}
export default Admin
