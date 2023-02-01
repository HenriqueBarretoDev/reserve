import React, {useState, useEffect} from 'react'
import {BoxTime, MainReservation, Reservations} from "./styles";
import {useAuth} from "../../Hooks/useAuth";
import moment from 'moment';
import {TbMoodHappy} from "react-icons/tb"
import {GiHairStrands} from "react-icons/gi"
import {BsWhatsapp} from "react-icons/bs"

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

    const handleChangeNumberPhone = event => {
        let phoneNumber = event.target.value;

        // Remove tudo o que não for número
        phoneNumber = phoneNumber.replace(/\D/g, '');

        if (phoneNumber.length >= 10) {
            // Adiciona parênteses ao redor dos dois primeiros dígitos
            phoneNumber = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)}-${phoneNumber.substring(6, 11)}`;
            setError('');
        } else {
            setError('Número de telefone inválido');
        }

        setPhone(phoneNumber);
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
        } else {
            setValidationMessage('Código inválido');
        }
    };


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

    return (
        <MainReservation>
            <BoxTime>
                <p>{cardTimer}</p>
            </BoxTime>
            <Reservations style={{backgroundColor: '#acf232', display: 'flex', flexDirection: 'column'}}>
                {!showSpan && notReservation && (
                    <>
                        <p>Horário disponível</p>
                        <div>
                            <input type="checkbox" checked={checked} onChange={handleChange}/>
                            <label>Reservar Horário</label>
                        </div>
                    </>
                )}

                {!availableTime && !confirmWithCode && showSpan && (
                    <>
                        <span>Informe seu WhatsApp</span>
                        <span>para validar seu agendamento</span>

                        <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <input type="tel" value={phone} onChange={handleChangeNumberPhone}/>
                            <button onClick={startWhatsappValidation} style={{marginTop: '10px'}}>enviar</button>
                        </div>
                    </>
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
                            <p>Ate breve...</p>
                        </div>
                    </div>
                )}
                {customerWithCompletedAppointment && (
                    <>
                        <p>Horário Reservado</p>
                        <div>
                            {/*<input type="checkbox" checked={checked} onChange={handleChange}/>*/}
                            <label>Reservar Horário</label>
                            <GiHairStrands/>
                        </div>
                    </>
                )}
            </Reservations>
        </MainReservation>
    );
};
export default CardReserve
