import React, {useState, useEffect, useRef} from 'react';
import {
    ContainerSchedules,
    IconsLeftSchedules,
    IconsRightSchedules,

} from './styles';

import {BsFillCalendar2EventFill} from 'react-icons/bs';
import {AiOutlineCaretDown} from 'react-icons/ai';
import CardReserve from "../../Components/CardReserve";
import MenuCalendar from "../../Components/Calendar";
import {useNavigate} from "react-router";
import LoginAdmin from "../../Components/LoginAdmin";
import iconHall from '../../Assets/Icons/iconHall.png'
import Dropdown from "../../Components/DropDown";
import {format} from 'date-fns';
import {useAuth} from "../../Hooks/useAuth";

const Home = () => {

    const [day, setDay] = useState(new Date().toLocaleString("pt-BR", {weekday: "long"}));
    const [currentDay, setCurrentDay] = useState(new Date().getDay());
    const today = new Date();
    const [loading, setLoading] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false)
    const [currentTime, setCurrentTime] = useState(new Date());
    const [currentDate, setCurrentDate] = useState(new Date());
    const [menuVisible, setMenuVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    function updateCurrentDay() {
        setCurrentDay(new Date().getDay());
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [dropdownRef]);

    const [selectedTime, setSelectedTime] = useState(null);

    const {
        startTime,
        setStartTime,
        endTime,
        setEndTime,
        newStartTime,
        setNewStartTime,
        newEndTime,
        setNewEndTime,
        maxTime,
        maxMinutes,
        setMaxMinutes,
    } = useAuth()

    const interval = 25;
    const availableTimes = [];

    for (let i = newStartTime; i <= newEndTime; i++) {
        for (let j = 0; j < 60; j += interval) {
            const nextTime = j + interval >= 60 ? [i + 1, 0] : [i, j + interval];
            if (i < maxTime || (i === maxTime && j < maxMinutes)) {
                if (
                    nextTime[0] < maxTime ||
                    (nextTime[0] === maxTime && nextTime[1] <= maxMinutes)
                ) {
                    const diff = nextTime[1] - j;
                    if (diff >= interval || diff < 0) {
                        availableTimes.push(`${i}:${j < 10 ? "0" + j : j}`);
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }

    const handleSelectTime = (time) => {
        setSelectedTime(time);
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    const login = () => {
        setLoading(true);
        setTimeout(() => {
            localStorage.setItem("token", "token");
            setLoading(false);
        }, 2000);
    };

    function switchCalendar() {
        if (showCalendar === false) {
            onclick(setShowCalendar(true))
        } else {
            onclick(setShowCalendar(false))
        }
    }

    function switchAdmin() {
        if (showAdmin === false) {
            onclick(setShowAdmin(true))
        } else {
            onclick(setShowAdmin(false))
        }
    }

    function getCurrentDate() {
        const dataAtual = new Date();
        const dia = format(dataAtual, 'dd');
        const mes = format(dataAtual, 'MM');
        return `${dia}/${mes}`;
    }


    return (
        <ContainerSchedules>
            <header>
                <IconsLeftSchedules>
                    <h1>
                        <p>{getCurrentDate()}  </p>
                        <p> - </p>
                        <span> {day}</span>
                        <AiOutlineCaretDown/>
                    </h1>
                </IconsLeftSchedules>

                <IconsRightSchedules>
                    <div style={{width: '30px', cursor: 'pointer'}}>
                        <BsFillCalendar2EventFill onClick={switchCalendar}/>
                    </div>
                    <div>
                        <Dropdown/>
                    </div>
                </IconsRightSchedules>

            </header>

            <div>{showAdmin && <LoginAdmin/>}</div>
            <div>
                {showCalendar && <MenuCalendar/>}
            </div>
            <h1>Salão do Juca <img style={{position: 'relative', top: '8px'}} src={iconHall} alt=""/></h1>

            <div>
                <p style={{paddingLeft: '20px'}}>
                    <strong>
                        Reserve seu horário
                    </strong>
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
            <h1>Próximo dia >></h1>
        </ContainerSchedules>
    );
};
export default Home;
