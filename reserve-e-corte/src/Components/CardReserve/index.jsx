import React, {useState, useEffect} from 'react'
import {BoxTime, ButtonSend, InputMenu, MainReservation, Reservations} from "./styles";
import {useAuth} from "../../Hooks/useAuth";
import moment from 'moment';
import {TbMoodHappy} from "react-icons/tb"
import {BsWhatsapp} from "react-icons/bs"
import {AiOutlineUser} from "react-icons/ai"
import {SlClose} from "react-icons/sl";

const CardReserve = ({cardTimer}) => {

    const [checked, setChecked] = useState(false);
    const {availableTime, setAvailableTime, confirmWithCode, setConfirmWithCode} = useAuth(undefined)
    const [teste, setTeste] = useState(true)
    const [valid, setValid] = useState(false);
    const [code, setCode] = useState('');
    const [validationMessage, setValidationMessage] = useState('');
    const [hours, setHours] = useState(0);
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [showSpan, setShowSpan] = useState(false);
    const [reservedTime, setReservedTime] = useState(false);
    const [notReservation, setNotReservation] = useState(true);
    const [customerWithCompletedAppointment, setCustomerWithCompletedAppointment] = useState(false);

    const {time, setTime} = useAuth(10)

    const handleChangeNumberPhone = event => {
        const value = event.target.value;
        const newValue = value
            .replace(/\D/g, "")
            .slice(0, 11)
            .replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
        setPhone(newValue);
    };


    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const validateCode = (code) => {
        return code.length === 6;
    };


    const handleCodeValidation = () => {
        if (validateCode(code)) {
            setValidationMessage('Código válido');
            setReservedTime(true)
            setShowSpan(false)
            setConfirmWithCode(false)
            setNotReservation(false)
            setCustomerWithCompletedAppointment(false)
            setTime(8)
        } else {
            setValidationMessage('Código inválido');
        }
    };

    function validatePhoneNumber(phoneNumber) {
        const regex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
        return regex.test(phoneNumber);
    }

    function startWhatsappValidation() {
        setAvailableTime(false)
        setConfirmWithCode(true)
    }

    function handleChange(event) {
        setChecked(event.target.checked)
        setShowSpan(event.target.checked);
        setAvailableTime(false)
    }

    useEffect(() => {
        const currentTime = moment();
        const totalHours = currentTime.hours();
        setHours(totalHours);

    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (time === 0) {
                setReservedTime(false)
                setCustomerWithCompletedAppointment(true)
                clearTimeout(timer);
            } else {
                setTime(time - 1);
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [time]);

    return (
        <MainReservation>
            <BoxTime>
                <p>{cardTimer}</p>
            </BoxTime>
            <Reservations style={{backgroundColor: '#acf232', display: 'flex', flexDirection: 'column'}}>
                {!showSpan && notReservation && (
                    <div>
                        <p>Horário disponível</p>
                        <input type="checkbox" checked={checked} onChange={handleChange}/>
                        <label>Reservar Horário</label>
                    </div>
                )}

                {!availableTime && !confirmWithCode && showSpan && (
                    <div style={{display: 'flex', flexDirection: 'column', padding: '20px 10px'}}>
                        <span>Informe seu Nome e WhatsApp</span>
                        <span>para reservar seu agendamento.</span>

                        <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                            <AiOutlineUser style={{display: 'flex', padding: '10px 8px 0 0'}}/>
                            <InputMenu>
                                <input required="required" type="text" pattern="[A-Za-z]{3,}" inputMode="latin-name"/>
                                <span>Nome</span>
                                <i/>
                            </InputMenu>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                            <BsWhatsapp style={{display: 'flex', padding: '10px 8px 0 0'}}/>
                            <InputMenu>
                                <input required="required" type="tel" pattern="[0-9]+" inputMode="numeric"
                                       onChange={handleChangeNumberPhone}
                                       value={phone}
                                />
                                <span>Whatsapp</span>
                                <i/>
                            </InputMenu>
                        </div>

                        <ButtonSend>
                            <button onClick={startWhatsappValidation} style={{marginTop: '10px'}}>ENVIAR</button>
                        </ButtonSend>

                    </div>
                )}

                {confirmWithCode && showSpan && (
                    <div>
                        <p>Digite o código recebido no seu WhatsApp <BsWhatsapp/></p>
                        <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <input type="text" value={code} onChange={handleCodeChange}/>
                            <button onClick={handleCodeValidation} style={{marginTop: '10px'}}>Validar</button>
                            <p>{validationMessage}</p>
                        </div>
                    </div>
                )}

                {reservedTime && (
                    <div>
                        <p>Agendamento concluído com sucesso! <TbMoodHappy/></p>
                        <div>
                            <p>Agora é só aguardar tranquilamente.</p>
                            <p>Você receberá uma mensagem um pouco antes para te lembrar.</p>
                            <p>Ate breve... {time}</p>
                        </div>
                    </div>
                )}

            </Reservations>

            {customerWithCompletedAppointment && !notReservation && (
                <Reservations style={{backgroundColor: '#f64549', minWidth: '100%'}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '85px'
                    }}>
                        <p>Horário Reservado</p>
                        <SlClose/>
                    </div>

                </Reservations>
            )}
        </MainReservation>
    );
};
export default CardReserve
