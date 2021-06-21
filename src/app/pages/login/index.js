import {  useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/user/actions";
import { useHistory } from "react-router-dom";

import Button from "../../components/button";
import Input from "../../components/input";
import './styles.scss';
import logo from '../../../assets/logo.png';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const errorMessage = useSelector((state) => state.user.error);
    const dispatch = useDispatch();
    const userId = JSON.parse(localStorage.getItem('userId'));
    const history = useHistory();

    useEffect(() => { 
        if (userId) {
            history.push("/gift-cards");
        }
    }, []);

    const handleUserInput = (event) => {
        setUserName(event.target.value);
    };

    const handleUserPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(userActions.login(userName, password))
    }

    return <div className="container">
            <section className="card" >
                <header className="header">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1 className="title" >
                        Ingresar con usuario y contraseña
                    </h1>
                </header>
                <main className="body">
                    <form onSubmit={handleSubmit}>
                        <Input
                            name="user"
                            type="text"
                            title="Usuario"
                            value={userName}
                            handleChange={handleUserInput}
                        />

                        <Input
                            name="password"
                            type="password"
                            title="Contraseña"
                            value={password}
                            handleChange={handleUserPassword}
                        />
                        {errorMessage && <span className="error-message">{errorMessage}</span>}
                        <Button className="login-button" type="submit" text="Ingresar">Submit</Button>
                    </form>
                </main>
            </section>
        </div>

}

export default Login;