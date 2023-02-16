import React from 'react'

const AppointmentCard = ({ time }) => {

    const formatTime = time => {
        return time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    return (
        <div>
            <h3>{formatTime(time)}</h3>
            <p>Disponível</p>
        </div>

    )
}
export default AppointmentCard
