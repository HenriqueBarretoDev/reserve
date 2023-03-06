import React, {useState, useEffect} from 'react'
import {ButtonContainer} from "./styles";
import {AiOutlineArrowRight} from "react-icons/ai";
import {useAuth} from "../../Hooks/useAuth";


const ButtonCodeValidation = () => {

    const {
        setAvailableTime,
        setConfirmWithCode,
        setValidationMessage,
        reservedTime,
        setReservedTime,
        showSpan,
        setShowSpan,
        notReservation,
        setNotReservation,
        customerWithCompletedAppointment,
        setCustomerWithCompletedAppointment,
        setTime,
        code,
        setCode

    } = useAuth(undefined)

    const validateCode = (code) => {
        return code.length === 6;
    };

    const handleCodeValidation = (e) => {
        e.preventDefault()
        if (validateCode(code)) {
            setValidationMessage('Código válido');
            setReservedTime(true)
            setShowSpan(false)
            setConfirmWithCode(false)
            setNotReservation(false)
            setCustomerWithCompletedAppointment(false)
            setTime(8)
            // console.log('hit')
        } else {
            setValidationMessage('Código inválido!');
        }
    };

    return (
        <ButtonContainer onClick={handleCodeValidation}>Validar
            <div>
                <AiOutlineArrowRight/>
            </div>
        </ButtonContainer>
    )
}
export default ButtonCodeValidation
