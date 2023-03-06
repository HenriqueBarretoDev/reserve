import React, {useRef, useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {


    const [availableTime, setAvailableTime] = useState(true)
    const [notAvailableTime, setNotAvailableTime] = useState(false)
    const [confirmWithCode, setConfirmWithCode] = useState(false)
    const [time, setTime] = useState()
    const [isOpen, setIsOpen] = useState(false);
    const [newStartTime, setNewStartTime] = useState(8);
    const [newEndTime, setNewEndTime] = useState(20);
    const [startTime, setStartTime] = useState(8);
    const [endTime, setEndTime] = useState();
    const [maxTime, setMaxTime] = useState(20);
    const [maxMinutes, setMaxMinutes] = useState(0);

    return (
        <AuthContext.Provider value={{
            availableTime,
            setAvailableTime,
            confirmWithCode,
            setConfirmWithCode,
            setNotAvailableTime,
            notAvailableTime,
            setTime,
            time,
            isOpen,
            setIsOpen,
            newStartTime,
            setNewStartTime,
            newEndTime,
            setNewEndTime,
            startTime,
            setStartTime,
            endTime,
            setEndTime,
            setMaxTime,
            maxTime,
            maxMinutes,
            setMaxMinutes,
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
