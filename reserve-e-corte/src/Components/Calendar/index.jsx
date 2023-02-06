import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import {
    CalendarContent,
    MainCalendar,
    TimeSelect,
    ReserveButton,
    ReservationList,
    ReservationItem,
    MessageCalendar
} from './styles';

const MenuCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
    // const [reservations, setReservations] = useState([]);
    const [today, setToday] = useState(new Date());
    const [message, setMessage] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const startTime = 8;
    const endTime = 18;
    const interval = 25;
    const availableTimes = [];

    for (let i = startTime; i <= endTime; i++) {
        for (let j = 0; j < 60; j += interval) {
            availableTimes.push(`${i}:${j < 10 ? `0${j}` : j}`);
        }
    }

    // const addReservation = (time) => {
    //     const currentDate = new Date();
    //     const selectedDate = new Date(date);
    //     const selectedTime = time.split(':');
    //     selectedDate.setHours(selectedTime[0], selectedTime[1]);
    //
    //     if (selectedDate < currentDate) {
    //         setMessage("Esse horário já passou.");
    //         return;
    //     }
    //
    //     const existingReservation = reservations.find(reservation => reservation.time === time && reservation.date.toLocaleDateString() === date.toLocaleDateString());
    //
    //     if (!existingReservation) {
    //         setReservations([...reservations, {date, time}]);
    //         setMessage("Reserva feita com sucesso.");
    //     } else {
    //         setMessage("Esse horário já está reservado.");
    //     }
    // };

    return (
        <CalendarContent>
            <MainCalendar>
                <Calendar tileClassName={({
                                              date,
                                              view
                                          }) => date.toLocaleDateString() === today.toLocaleDateString() ? "today" : ""}
                          minDate={new Date()}
                          next2Label={null}
                          prev2Label={null}
                          calendarType="US"
                          onChange={setDate}
                          value={date}
                />
                {/*<form onSubmit={(event) => {*/}
                {/*    event.preventDefault();*/}
                {/*    addReservation(event.target.time.value);*/}
                {/*}}>*/}
                {/*    <TimeSelect>*/}
                {/*        {availableTimes.map((time) => (*/}
                {/*            <option key={time} value={time}>*/}
                {/*                {time}*/}
                {/*            </option>*/}
                {/*        ))}*/}
                {/*    </TimeSelect>*/}
                {/*    <ReserveButton type="submit">Reservar</ReserveButton>*/}
                {/*</form>*/}
                {/*{message !== '' && <MessageCalendar>{message}</MessageCalendar>}*/}
                {/*<ReservationList>*/}
                {/*    {reservations.map((reservation) => (*/}
                {/*        <ReservationItem key={reservation.time}>*/}
                {/*            {`${reservation.date.toLocaleDateString()} ${reservation.time}`}*/}
                {/*        </ReservationItem>*/}
                {/*    ))}*/}
                {/*</ReservationList>*/}
            </MainCalendar>
        </CalendarContent>
    );
};

export default MenuCalendar;
