import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pt-br";
import CardReserve from "../CardReserve";

function TimeSlotSelector() {
    const [selectedHours, setSelectedHours] = useState({
        startTime: moment("08:00", "HH:mm"),
        endTime: moment("20:00", "HH:mm"),
        interval: 30,
    });

    const [services, setServices] = useState({
        corte: 30,
        corteComGraxa: 45,
        barba: 20,
        sobrancelha: 15,
    });

    function handleSelectService(service) {
        const serviceTime = services[service];
        setSelectedHours((prevState) => ({
            ...prevState,
            interval: serviceTime,
        }));
    }

    function renderCards() {
        const { startTime, endTime, interval } = selectedHours;

        const cards = [];

        let currentTime = moment(startTime);

        while (currentTime.isBefore(endTime)) {
            const cardStartTime = moment(currentTime);
            const cardEndTime = moment(currentTime).add(interval, "minutes");

            const card = (
                <CardReserve
                    startTime={cardStartTime}
                    endTime={cardEndTime}
                    onSelectService={handleSelectService}
                />
            );

            cards.push(card);

            currentTime = moment(currentTime).add(interval, "minutes");
        }

        return cards;
    }

    return (
        <div>
            <h1>Agenda</h1>
            <div>
                <label htmlFor="horaInicio">Horário de início:</label>
                <input
                    type="time"
                    id="horaInicio"
                    name="horaInicio"
                    defaultValue={selectedHours.startTime.format("HH:mm")}
                    onChange={(event) =>
                        setSelectedHours((prevState) => ({
                            ...prevState,
                            startTime: moment(event.target.value, "HH:mm"),
                        }))
                    }
                />
            </div>
            <div>
                <label htmlFor="horaFim">Horário de fim:</label>
                <input
                    type="time"
                    id="horaFim"
                    name="horaFim"
                    defaultValue={selectedHours.endTime.format("HH:mm")}
                    onChange={(event) =>
                        setSelectedHours((prevState) => ({
                            ...prevState,
                            endTime: moment(event.target.value, "HH:mm"),
                        }))
                    }
                />
            </div>
            <div>
                <label htmlFor="service">Selecione o serviço:</label>
                <select
                    id="service"
                    name="service"
                    onChange={(event) => handleSelectService(event.target.value)}
                >
                    <option value="">Selecione um serviço</option>
                    <option value="corte">Corte de cabelo</option>
                    <option value="corteComGraxa">Corte de cabelo com graxa</option>
                    <option value="barba">Barba</option>
                    <option value="sobrancelha">Sobrancelha</option>
                </select>
            </div>
            <div>{renderCards()}</div>
        </div>
    );
}

export default TimeSlotSelector;

