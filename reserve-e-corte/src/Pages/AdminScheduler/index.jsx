import React, {useState} from 'react';

const AdminScheduler = () => {
    const [startWorkTime, setStartWorkTime] = useState('08:00');
    const [endWorkTime, setEndWorkTime] = useState('19:00');
    const [appointmentInterval, setAppointmentInterval] = useState(30);
    const [appointments, setAppointments] = useState([]);

    const startWorkTimeDate = new Date();
    startWorkTimeDate.setHours(...startWorkTime.split(':'));
    startWorkTimeDate.setMinutes(0);

    const endWorkTimeDate = new Date();
    endWorkTimeDate.setHours(...endWorkTime.split(':'));
    endWorkTimeDate.setMinutes(0);

    const availableReservationTimes = [];
    for (
        let reservationTime = startWorkTimeDate;
        reservationTime <= endWorkTimeDate;
        reservationTime.setMinutes(reservationTime.getMinutes() + appointmentInterval)
    ) {
        availableReservationTimes.push(reservationTime.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}));
    }

    const addAppointment = (client, reservationTime) => {
        const appointment = {
            client,
            startTime: startWorkTimeDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
            reservationTime,
            endTime: endWorkTimeDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        };
        setAppointments([...appointments, appointment]);
    };

    const removeAppointment = (index) => {
        setAppointments(appointments.filter((appointment, i) => i !== index));
    };

    return (
        <div>
            <h2>Agendamento de Horários</h2>
            <label>
                Horário de Início:
                <input
                    type="time"
                    value={startWorkTime}
                    onChange={(event) => setStartWorkTime(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Horário de Término:
                <input
                    type="time"
                    value={endWorkTime}
                    onChange={(event) => setEndWorkTime(event.target.value)}
                />
            </label>
            <br/>
            <label>
                Intervalo de Atendimento (em minutos):
                <input
                    type="number"
                    value={appointmentInterval}
                    onChange={(event) => setAppointmentInterval(event.target.value)}
                />
            </label>
            <br/>
            {appointments.map((appointment) => (
                <li key={appointment.id}>
                    {appointment.startTime.toLocaleTimeString()} -{" "}
                    {appointment.endTime.toLocaleTimeString()}
                </li>
            ))}
        </div>
    );
};

export default AdminScheduler;
