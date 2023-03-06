import React, {useState, useEffect} from 'react'

import {BackButton, BoxTime, ButtonSend, InputMenu, MainReservation, Reservations} from "./styles";
import {useAuth} from "../../Hooks/useAuth";
import moment from 'moment';
import {SlLock} from "react-icons/sl";
import {BsWhatsapp, BsCheckCircle} from "react-icons/bs"
import {AiOutlineUser, AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai"
import { FcApproval } from "react-icons/fc";
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
    const [name, setName] = useState('');
    const {time, setTime} = useAuth(10)
    const [haircutType, setHaircutType] = useState(undefined)
    const [haircut, setHaircut] = useState(true);
    const [haircutPlus, setHaircutPlus] = useState(false);
    const [beard, setBeard] = useState(false);
    const [eyebrow, setEyebrow] = useState(false);

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
        // return code.length === 6;
        return code == 68324 || 54321 || 15985 || 10203;
    };

    const handleCodeValidation = () => {
        if (validateCode(code)) {
            setValidationMessage('Código válido');
            setReservedTime(true)
            setShowSpan(false)
            setConfirmWithCode(false)
            setNotReservation(false)
            setCustomerWithCompletedAppointment(false)
            setTime(10)
        } else {
            setValidationMessage('Código inválido');
        }
    };

    function validatePhoneNumber(phoneNumber) {
        const regex = /^\d{10,11}$/;
        return regex.test(phoneNumber);
    }

    function startWhatsappValidation() {
        if (name && phone) {
            setAvailableTime(false)
            setConfirmWithCode(true)
        } else {
            return
        }

    }

    function handleChange(event) {
        setShowSpan(true)
        setAvailableTime(true)
        setHaircutType(true)

    }

    function handleChangeHair(event) {
        // setChecked(event.target.checked)
        // setHaircutType(event.target.checked);
        setConfirmWithCode(false)
        setShowSpan(true)
        setAvailableTime(true)
        setHaircutType(false)
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

    const handleSubmitNamePhone = (e) => {
        e.preventDefault();

        const data = {name, phone};
        fetch('https://your-api.com/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });

    };
    console.log('hit', name, phone)

    const [nome, setNome] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [enviado, setEnviado] = useState(false);
    const handleNome = (event) => {
        setNome(event.target.value);
    };

    const handleWhatsapp = (event) => {
        setWhatsapp(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (nome.length >= 3 && !/[^a-zA-Z ]/g.test(nome) && (whatsapp.length >= 10 && whatsapp.length <= 11)) {

        } else {
            alert("Nome deve ter no mínimo 3 caracteres e não conter caracteres especiais ou números. WhatsApp deve ter entre 10 e 11 dígitos.");
        }

    };

    function handleKeyUp(event, nextInput) {
        if (event.target.value.length === 5) {
            nextInput.current.focus();
        }
    }

    const input1 = React.useRef();
    const input2 = React.useRef();
    const input3 = React.useRef();
    const input4 = React.useRef();
    const input5 = React.useRef();


    return (
        <MainReservation>
            <BoxTime>
                <p>{cardTimer}</p>
            </BoxTime>
            <Reservations
                onSubmit={handleSubmitNamePhone}
                style={{backgroundColor: '#acf232', display: 'flex', flexDirection: 'column'}}>
                {!showSpan && notReservation && (

                    <div
                        style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px'}}>
                        <p>Horário Disponível</p>
                        <div style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <input type="checkbox" checked={checked} onChange={handleChange}
                                   style={{
                                       minHeight: '20px',
                                       width: '20px',
                                       position: 'relative',
                                       top: '4px',
                                       right: '2px'
                                   }}/>
                            <label>Reservar Horário</label>
                        </div>
                    </div>
                )}
                {haircutType && availableTime && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'start',
                        flexDirection: 'column',
                    }}>
                        <p>Selecione o procedimento</p>
                        <div>
                            <input type="checkbox" checked={haircut} onChange={() => setHaircut(!haircut)}
                                   style={{
                                       minHeight: '20px',
                                       width: '20px',
                                       position: 'relative',
                                       top: '4px',
                                       right: '2px',
                                       marginTop: '30px'
                                   }}/>
                            <label>Corte</label>
                        </div>

                        <div>
                            <input type="checkbox" checked={haircutPlus} onChange={() => setHaircutPlus(!haircutPlus)}
                                   style={{
                                       minHeight: '20px',
                                       width: '20px',
                                       position: 'relative',
                                       top: '4px',
                                       right: '2px'
                                   }}/>
                            <label>Corte Com graxa</label>
                        </div>

                        <div>
                            <input type="checkbox" checked={beard} onChange={() => setBeard(!beard)}
                                   style={{
                                       minHeight: '20px',
                                       width: '20px',
                                       position: 'relative',
                                       top: '4px',
                                       right: '2px'
                                   }}/>

                            <label>Barba</label>
                        </div>

                        <div>
                            <input type="checkbox" checked={eyebrow} onChange={() => setEyebrow(!eyebrow)}
                                   style={{
                                       minHeight: '20px',
                                       width: '20px',
                                       position: 'relative',
                                       top: '4px',
                                       right: '2px'
                                   }}/>
                            <label>Sobrancelha</label>
                        </div>

                        <ButtonSend onClick={handleChangeHair} style={{marginTop: '30px'}}>
                            <strong>Confirmar</strong>
                            <div>
                                <AiOutlineArrowRight/>
                            </div>
                        </ButtonSend>

                        <BackButton onClick={startWhatsappValidation} style={{margin: '10px 0 20px 0'}}>
                            <div>
                                <AiOutlineArrowLeft/>
                            </div>
                            <strong>Voltar</strong>
                        </BackButton>

                    </div>)}

                {availableTime && !confirmWithCode && showSpan && !haircutType && (
                    <form style={{display: 'flex', flexDirection: 'column', padding: '20px 10px'}}
                          onSubmit={handleSubmit}>
                        <span>Informe seu Nome e WhatsApp</span>
                        <span>para reservar seu agendamento.</span>
                        <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                            <AiOutlineUser style={{display: 'flex', padding: '10px 8px 0 0'}}/>
                            <InputMenu>
                                <input
                                    required="required"
                                    type="text"
                                    pattern="[A-Za-z]{3,}"
                                    inputMode="latin-name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <span>Nome</span>
                                <i/>
                            </InputMenu>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', padding: '20px'}}>
                            <BsWhatsapp style={{display: 'flex', padding: '10px 8px 0 0'}}/>
                            <InputMenu onChange={handleChangeNumberPhone}>
                                <input
                                    required="required"
                                    type="tel"
                                    pattern="[0-9]+"
                                    inputMode="numeric"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone}
                                    maxLength={11}
                                    minLength={10}

                                />
                                <span>Whatsapp</span>
                                <i/>
                            </InputMenu>
                        </div>

                        <ButtonSend onClick={startWhatsappValidation} style={{marginTop: '10px'}}>
                            <strong>Enviar</strong>
                            <div>
                                <AiOutlineArrowRight/>
                            </div>
                        </ButtonSend>
                        <BackButton onClick={startWhatsappValidation} style={{margin: '10px 0 20px 0'}}>
                            <div>
                                <AiOutlineArrowLeft/>
                            </div>
                            <strong>Voltar</strong>
                        </BackButton>
                    </form>
                )}

                {confirmWithCode && showSpan && (
                    <div style={{padding: '0 10px'}}>
                        {/*<p>Digite o código recebido no seu WhatsApp <BsWhatsapp/></p>*/}
                        {/*<div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>*/}
                        {/*    <input type="text" value={code} onChange={handleCodeChange}/>*/}
                        {/*</div>*/}
                        <p>Digite o código recebido no seu WhatsApp <BsWhatsapp/></p>
                        <div style={{display: 'flex', flexDirection: 'column', padding: '10px'}}>
                            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                                <input style={{
                                    border: 'none',
                                    borderBottom: '2px solid black',
                                    width: '20px',
                                    marginRight: '0px',
                                    textAlign: 'center',
                                    height: '40px',
                                    fontSize: '26px'
                                }}
                                       type="text"
                                       maxLength="1"
                                       ref={input1} onKeyUp={(e) => handleKeyUp(e, input2)}
                                />
                                <input style={{
                                    border: 'none',
                                    borderBottom: '2px solid black',
                                    width: '20px',
                                    marginRight: '2px',
                                    textAlign: 'center',
                                    fontSize: '26px'
                                }}
                                       type="text"
                                       maxLength="1"
                                       ref={input2} onKeyUp={(e) => handleKeyUp(e, input3)}
                                />
                                <input style={{
                                    border: 'none',
                                    borderBottom: '2px solid black',
                                    width: '20px',
                                    marginRight: '2px',
                                    textAlign: 'center',
                                    fontSize: '26px'
                                }}
                                       type="text"
                                       maxLength="1"
                                       ref={input3} onKeyUp={(e) => handleKeyUp(e, input4)}
                                />
                                <input style={{
                                    border: 'none',
                                    borderBottom: '2px solid black',
                                    width: '20px',
                                    marginRight: '2px',
                                    textAlign: 'center',
                                    fontSize: '26px'
                                }}
                                       type="text"
                                       maxLength="1"
                                       ref={input4} onKeyUp={(e) => handleKeyUp(e, input5)}
                                />
                                <input style={{
                                    border: 'none',
                                    borderBottom: '2px solid black',
                                    width: '20px',
                                    textAlign: 'center',
                                    fontSize: '26px'
                                }}
                                       type="text"
                                       maxLength="1"
                                       ref={input5}
                                       // value={code}

                                />

                            </div>
                        </div>
                        <ButtonSend onClick={handleCodeValidation} style={{marginTop: '10px'}}>
                            <strong>Validar</strong>
                            <div>
                                <AiOutlineArrowRight/>
                            </div>
                        </ButtonSend>
                        <BackButton onClick={startWhatsappValidation} style={{margin: '10px 0 20px 0'}}>
                            <div>
                                <AiOutlineArrowLeft/>
                            </div>
                            <strong>Voltar</strong>
                        </BackButton>
                        <p>{validationMessage}</p>
                    </div>
                )}

                {reservedTime && (
                    <div style={{padding:'0 10px'}}>
                        <p>Agendamento concluído com sucesso! </p>
                        <FcApproval style={{minHeight: '40px', width: '40px'}}/>
                        <div>
                            <p>Agora é só aguardar.</p>
                            <p>Você receberá uma mensagem um pouco antes para te lembrar.</p>
                            <p>Até breve... {time}</p>
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
                        <SlLock style={{width: '40px', height: '40px'}}/>

                    </div>

                </Reservations>
            )}
        </MainReservation>
    );
};
export default CardReserve
