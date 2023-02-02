import React, {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {


    const [availableTime, setAvailableTime] = useState(true)
    const [notAvailableTime, setNotAvailableTime] = useState(false)
    const [confirmWithCode, setConfirmWithCode] = useState(false)
    const [time, setTime] = useState()

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
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
