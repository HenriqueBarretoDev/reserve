import React, {useEffect, useState} from 'react';
import {LoginPage, LoginForm} from "./styles"

const LoginAdmin = ()=> {
    const [loading, setLoading] = useState(false);



    const login = () => {
        setLoading(true);
        setTimeout(() => {
            localStorage.setItem("token", "token");
            setLoading(false);
        }, 2000);
    };

    return(
        <LoginPage>
            <LoginForm>
            <label>Usuário</label>
                <input type="text"/>
                <label>Senha</label>
                <input type="password" />
                <div className="enter">
                    {loading && <div className="loader"></div>}
                    <button onClick={login}>Entrar</button>
                </div>
            </LoginForm>
            </LoginPage>



            )

}
export default LoginAdmin