import React, {createContext, useState} from 'react';

export const ScheduleContext = createContext();
export const ScheduleProvider = (props) => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [checked, setChecked] = useState(false);
    const [showSpan, setShowSpan] = useState(false);
    const [availableTime, setAvailableTime] = useState(true)

    return (
        <ScheduleContext.Provider value={[
            selectedTime,
            setSelectedTime,
            checked,
            setChecked,
            showSpan,
            setShowSpan,
            availableTime,
            setAvailableTime
        ]}>
            {props.children}
        </ScheduleContext.Provider>
    );
};
