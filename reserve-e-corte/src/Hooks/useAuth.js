import React, {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString());


    return (
        <AuthContext.Provider value={{
            time,
            setTime,

        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => React.useContext(AuthContext);
