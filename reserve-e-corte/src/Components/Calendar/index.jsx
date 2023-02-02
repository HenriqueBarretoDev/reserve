import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar';
import {CalendarContent, MainCalendar, TimeSelect, ReserveButton, ReservationList, ReservationItem} from './styles';

const MenuCalendar = () => {
    const [date, setDate] = useState(new Date());
    const [currentTime, setCurrentTime] = useState(new Date());
    const [reservations, setReservations] = useState([]);

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

    const addReservation = (time) => {
        const existingReservation = reservations.find(reservation => reservation.time === time && reservation.date.toLocaleDateString() === date.toLocaleDateString());

        if (!existingReservation) {
            setReservations([...reservations, {date, time}]);
        } else {
            alert("Esse horário já está reservado.");
        }
    };

    return (
        <CalendarContent>
            <MainCalendar>
                <Calendar
                    next2Label={null}
                    prev2Label={null}
                    calendarType="US" onChange={setDate} value={date}/>
                <div>{`${date.toLocaleDateString()}`}</div>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    addReservation(event.target.time.value);
                }}>
                    <TimeSelect name="time">
                        {availableTimes.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </TimeSelect>
                    <ReserveButton type="submit">Reservar</ReserveButton>
                </form>
                <ReservationList>
                    {reservations.map((reservation) => (
                        <ReservationItem key={reservation.time}>
                            {`${reservation.date.toLocaleDateString()} ${reservation.time}`}
                        </ReservationItem>
                    ))}
                </ReservationList>
            </MainCalendar>
        </CalendarContent>
    );
};

export default MenuCalendar;
