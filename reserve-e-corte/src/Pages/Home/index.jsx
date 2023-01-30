import React, {useState, useEffect} from 'react'
import {
    ContainerSchedules,
    IconsLeftSchedules,
    IconsRightSchedules,
    BoxTime,
    Reservations,
    MainReservation
} from "./styles";
import {BsFillCalendar2EventFill} from "react-icons/bs";
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import {AiOutlineCaretDown} from "react-icons/ai";


const Schedules = () => {

    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    const [day, setDay] = useState(new Date().toLocaleString("pt-BR", {weekday: "long"}));

    function updateCurrentDay() {
        setCurrentDay(new Date().getDay());
    }

    useEffect(() => {
        updateCurrentDay();
    }, []);

    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    const today = new Date();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function renderCalendar() {
        // render calendar
    }

    function renderAvailableTimes() {
        // render available times
    }

    function handleDateSelection(newDate) {
        setDate(newDate);
    }

    function handleTimeSelection(newTime) {
        setSelectedTime(newTime);
    }

    return (
        <ContainerSchedules>
            <header>
                <IconsLeftSchedules>
                    {/* <div><Hamburger/></div> */}
                    <h1>{day} <AiOutlineCaretDown /></h1>
                </IconsLeftSchedules>

                <IconsRightSchedules>
                    <div><BsFillCalendar2EventFill/></div>
                    <div><IoEllipsisVerticalSharp/></div>
                </IconsRightSchedules>
            </header>
            <h1>Reserve seu horário</h1>

            <MainReservation>
                <BoxTime>
                    <p>08:00</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#acf232'}}>
                    <p>Horário disponível</p>
                </Reservations>
            </MainReservation>

            <MainReservation>
                <BoxTime>
                    <p>08:30</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#acf232'}}>
                    <p>Horário disponível</p>
                </Reservations>
            </MainReservation>

            <MainReservation>
                <BoxTime>
                    <p>09:00</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#e21c34'}}>
                    <p>Horário Ocupado</p>
                </Reservations>
            </MainReservation>

            <MainReservation>
                <BoxTime>
                    <p>09:30</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#e21c34'}}>
                    <p>Horário Ocupado</p>
                </Reservations>
            </MainReservation>

            <MainReservation>
                <BoxTime>
                    <p>10:00</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#acf232'}}>
                    <p>Horário disponível</p>
                </Reservations>
            </MainReservation>

            <MainReservation>
                <BoxTime>
                    <p>10:30</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#acf232'}}>
                    <p>Horário disponível</p>
                </Reservations>
            </MainReservation>

            <MainReservation>
                <BoxTime>
                    <p>10:30</p>
                </BoxTime>
                <Reservations style={{backgroundColor: '#e21c34'}}>
                    <p>Horário Ocupado</p>
                </Reservations>
            </MainReservation>

        </ContainerSchedules>
    )
}
export default Schedules
