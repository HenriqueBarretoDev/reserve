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
import {useAuth} from "../../Hooks/useAuth";
import moment from "moment";


const Schedules = () => {

    const [hours, setHours] = useState(0);

    useEffect(() => {
        const currentTime = moment();
        const totalHours = currentTime.hours();
        setHours(totalHours);
    }, []);
////

    const totalDeHorasDia = 24
    const [horaAtual, setHoraAtual] = useState(0)
    const [horaDeTrabalho, setHoraDeTrabalho] = useState()

    const calculaHoraEMostraCard = () => {
        if (horaAtual >= 7 && horaAtual <= 19) {
            return setHoraDeTrabalho(true)
        }
    }
    const vaiTerCard = () => {

    }
////

    ///teste2 abaixo
    const [workHours, setWorkHours] = useState([]);

    useEffect(() => {
        const start = 7;
        const end = 20;
        const hours = [];

        for (let i = start; i < end; i++) {
            hours.push(i);
        }

        setWorkHours(hours);
    }, []);

    ///teste 2 acima

    // const [date, setDate] = useState(moment().format("dddd, MMMM Do YYYY"));
    const currentDate = moment().format('DD/MM/YYYY');

// pegar o dia atual
//     const [today, setToday] = useState('');
//     useEffect(() => {
//         const currentDay = moment().locale('pt-br').format('dddd');
//         setToday(currentDay);
//     }, []);

    const getDayName = () => {
        return moment().locale('pt-br').format('dddd');
    };
    const today = getDayName();


    return (
        <ContainerSchedules>
            <header>
                <IconsLeftSchedules>
                    <HamburguerMenu/>
                    <h1>{today}
                        <AiOutlineCaretDown/>
                    </h1>
                </IconsLeftSchedules>

                <IconsRightSchedules>
                    <div>
                        <BsFillCalendar2EventFill/>
                    </div>
                    <div>
                        <IoEllipsisVerticalSharp/>
                    </div>
                </IconsRightSchedules>
            </header>
            <h1>Reserve seu horário</h1>
            <div>
                {workHours.map(hour => (
                    <div key={hour}>
                        {/*<p>{hour}:00</p>*/}
                        <CardReserve cardTimer={hour}/>
                    </div>
                ))}
            </div>
            {/*<CardReserve/>*/}

        </ContainerSchedules>
    );
};
export default Schedules;
