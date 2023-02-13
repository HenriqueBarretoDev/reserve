import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router";
import {AdminContainer, AdminWorkingDays, DefineWorkingHours, WhatsAppAdmin} from "./styles";

const Admin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [nome, setNome] = useState("Aryelson");

    useEffect(() => {
        if (!loading && localStorage.getItem("token") !== null) {
            navigate("/admin")
        }
    }, [loading, navigate])

    function goToHome() {
        navigate('/')
    }

    return (
        <AdminContainer>
            <h2>Bem vindo  {nome ? nome : 'Administrador'}</h2>

            <WhatsAppAdmin>
                <h4>WhatsApp para administração cliente/salão</h4>
                <input type="text"/>
            </WhatsAppAdmin>

            <AdminWorkingDays>
                <h4>Dias a trabalhar</h4>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Segunda-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Terça-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Quarta-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Quinta-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Sexta-feira</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Sábado</label>
                </span>
                <span>
                    <input type="checkbox"/>
                    <label htmlFor="">Domingo</label>
                </span>
            </AdminWorkingDays>

            <DefineWorkingHours>
                <h4>Definir jornada de trabalho segunda a sexta</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente:
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </DefineWorkingHours>

            <DefineWorkingHours>
                <h4>Definir jornada de trabalho Sábado</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente:
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </DefineWorkingHours>

            <DefineWorkingHours>
                <h4>Definir jornada de trabalho Domingo</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente:
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19:00</option>
                    </select>
                </p>
            </DefineWorkingHours>

            <div>
                <button onClick={goToHome}>
                    <h4> Voltar para agenda</h4>
                </button>
            </div>
        </AdminContainer>
    )
}
export default Admin
