import React, {useRef, useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {


    const [availableTime, setAvailableTime] = useState(true)
    const [notAvailableTime, setNotAvailableTime] = useState(false)
    const [confirmWithCode, setConfirmWithCode] = useState(false)
    const [time, setTime] = useState()
    const [isOpen, setIsOpen] = useState(false);


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
            setIsOpen
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
