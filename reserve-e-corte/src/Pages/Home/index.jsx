import React, {useState, useEffect} from 'react';
import {
    ContainerSchedules,
    IconsLeftSchedules,
    IconsRightSchedules,

} from './styles';

import {BsFillCalendar2EventFill} from 'react-icons/bs';
import {IoEllipsisVerticalSharp} from 'react-icons/io5';
import {AiOutlineCaretDown} from 'react-icons/ai';
import HamburguerMenu from '../../Components/Hamburguer';
import CardReserve from "../../Components/CardReserve";
import MenuCalendar from "../../Components/Calendar";

const Schedules = () => {

    const [day, setDay] = useState(new Date().toLocaleString("pt-BR", {weekday: "long"}));
    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    const today = new Date();

    const [showCalendar, setShowCalendar] = useState(false);

    function updateCurrentDay() {
        setCurrentDay(new Date().getDay());
    }

    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const [selectedTime, setSelectedTime] = useState(null);

    const startTime = 8;
    const endTime = 18;
    const interval = 25;
    const availableTimes = [];

    for (let i = startTime; i <= endTime; i++) {
        for (let j = 0; j < 60; j += interval) {
            availableTimes.push(`${i}:${j < 10 ? "0" + j : j}`);
        }
    }

    const handleSelectTime = (time) => {
        setSelectedTime(time);
    };

    function switchCalendar() {
        if (showCalendar === false) {
            onclick(setShowCalendar(true))
        } else {
            onclick(setShowCalendar(false))
        }
    }

    return (
        <ContainerSchedules>
            <header>
                <IconsLeftSchedules>
                    <HamburguerMenu/>


                    <h1>{day}
                        <AiOutlineCaretDown/>
                    </h1>
                </IconsLeftSchedules>

                <IconsRightSchedules>
                    <div>
                        <BsFillCalendar2EventFill onClick={switchCalendar}/>
                    </div>
                    <div>
                        <IoEllipsisVerticalSharp/>
                    </div>
                </IconsRightSchedules>
            </header>
            <div>{showCalendar &&
                <MenuCalendar/>}</div>
            <h1>Reserve seu horário</h1>

            <div>
                <p>
                    Data atual: {currentDate.toLocaleDateString()}{" "}
                    {currentTime.toLocaleTimeString()}
                </p>
                <div>
                    {availableTimes.map((time) => (
                        <div key={time}>
                            <CardReserve
                                cardTimer={time}
                                isSelected={selectedTime === time}
                                onClick={() => handleSelectTime(time)}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </ContainerSchedules>
    );
};
export default Schedules;
