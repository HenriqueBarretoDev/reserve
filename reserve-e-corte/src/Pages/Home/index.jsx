import React, {useState, useEffect} from 'react'
import { ContainerSchedules, IconsLeftSchedules, IconsRightSchedules, BoxTime} from "./styles";
import {BsFillCalendar2EventFill} from "react-icons/bs";
import {IoEllipsisVerticalSharp} from "react-icons/io5";


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
                    <h1> {day}</h1>
                </IconsLeftSchedules>

                <IconsRightSchedules>
                    <div><BsFillCalendar2EventFill/></div>
                    <div><IoEllipsisVerticalSharp/></div>
                </IconsRightSchedules>
            </header>
            <h1>Reserve seu horário</h1>
            <div>
                horário no canto esquerdo dentro de um border-radios
            </div>
            <BoxTime>
                <p>08:00</p>
                <p>08:30</p>
                <p>09:00</p>
                <p>09:30</p>
                <p>10:00</p>
                <p>10:30</p>
                <p>11:00</p>
                <p>11:30</p>
                <p>12:00</p>
                <p>12:30</p>
                <p>13:00</p>
                <p>13:30</p>
                <p>09:30</p>
                <p>09:30</p>
            </BoxTime>

            {/*<TopDates>*/}
            {/*    <h3>segunda-feira</h3>*/}
            {/*    <h3>terça-feira</h3>*/}
            {/*    <h3>quarta-feira</h3>*/}
            {/*    <h3>quinta-feira</h3>*/}
            {/*    <h3>sexta-feira</h3>*/}
            {/*    <h3>sábado</h3>*/}
            {/*    <h3>domingo</h3>*/}
            {/*</TopDates>*/}
            {/*<BottomDates>*/}
            {/*    <div>*/}
            {/*        manhã*/}
            {/*        <p>08:00</p>*/}
            {/*        <p>08:30</p>*/}
            {/*        <p>09:00</p>*/}
            {/*        <p>09:30</p>*/}
            {/*        <p>10:00</p>*/}
            {/*        <p>10:30</p>*/}
            {/*        <p>11:00</p>*/}
            {/*        <p>11:30</p>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        almoço*/}
            {/*        <p>12:00</p>*/}
            {/*        <p>12:30</p>*/}
            {/*        <p>13:00</p>*/}
            {/*    </div>*/}

            {/*    <div>*/}
            {/*        tarde*/}
            {/*        <p>13:30</p>*/}
            {/*        <p>14:00</p>*/}
            {/*        <p>14:30</p>*/}
            {/*        <p>15:00</p>*/}
            {/*        <p>15:30</p>*/}
            {/*        <p>16:00</p>*/}
            {/*        <p>16:30</p>*/}
            {/*        <p>17:00</p>*/}
            {/*        <p>17:30</p>*/}

            {/*    </div>*/}

            {/*    <div>*/}
            {/*        noite*/}
            {/*        <p>18:00</p>*/}
            {/*        <p>18:30</p>*/}
            {/*        <p>19:00</p>*/}
            {/*        <p>19:30</p>*/}
            {/*        <p>20:00</p>*/}
            {/*    </div>*/}

            {/*</BottomDates>*/}


        </ContainerSchedules>
    )
}
export default Schedules