import React, {useState, useEffect} from 'react'
import {BoxTime, MainReservation, Reservations} from "./styles";
import {useAuth} from "../../Hooks/useAuth";
import moment from 'moment';

const CardReserve = ({cardTimer}) => {

    const [checked, setChecked] = useState(false);

    function handleChange(event) {
        setChecked(event.target.checked)
    }

    const [hours, setHours] = useState(0);

    useEffect(() => {
        const currentTime = moment();
        const totalHours = currentTime.hours();
        setHours(totalHours);
    }, []);


    return (
        <MainReservation>
            <BoxTime>
                {/*<p>{this.props.cardTime}</p>*/}
                <p>{cardTimer}</p>
            </BoxTime>
            <Reservations style={{backgroundColor: '#acf232', display: 'flex', flexDirection: 'column'}}>
                <p>Horário disponível</p>
                <div>
                    <input type="checkbox" checked={checked} onChange={handleChange}/>
                    <label>Reservar Horário</label>
                </div>
            </Reservations>
        </MainReservation>
    )
}
export default CardReserve
