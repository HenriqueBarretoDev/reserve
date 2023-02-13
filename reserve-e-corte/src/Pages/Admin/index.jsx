import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router";
import CardReserve from "../../Components/CardReserve";

const Admin = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!loading && localStorage.getItem("token") !== null) {
            navigate("/admin")
        }
    }, [loading, navigate])


    return (
        <div>
            <h2>Bem vindo Administrador</h2>

            <div>
                <h4>Dias a trabalhar</h4>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">seg</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">ter</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">qua</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">qui</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">sex</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">sab</label>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label htmlFor="">dom</label>
                </div>
            </div>

            <div>
                <h4>Definir jornada de trabalho segunda a sexta</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </div>

            <div>
                <h4>Definir jornada de trabalho Sábado</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </div>

            <div>
                <h4>Definir jornada de trabalho Domingo</h4>
                <p>Inicio do expediente:
                    <select name="" id="">
                        <option value="1">08:00</option>
                        <option value="2">08:30</option>
                        <option value="3">09:00</option>
                        <option value="4">09:30</option>
                    </select>
                </p>
                <p>final do expediente
                    <select name="" id="">
                        <option value="1">12:00</option>
                        <option value="2">18:00</option>
                        <option value="3">18:30</option>
                        <option value="4">19;00</option>
                    </select>
                </p>
            </div>
        </div>
    )
}
export default Admin
