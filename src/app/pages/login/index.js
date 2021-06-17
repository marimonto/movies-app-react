import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../redux/user/actions";

import Button from "../../components/button";
import Input from "../../components/input";
import './styles.scss';
import logo from '../../../assets/logo.png';

const Login = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const errorMessage = useSelector((state) => state.user.error);
    const dispatch = useDispatch();

    const handleUserInput = (event) => {
        setUserName(event.target.value);
    };

    const handleUserPassword = (event) => {
        setPassword(event.target.value);
    };

    return <Fragment>

        <div className="container">
            <div className="card" >
                <header className="header">
                    <img className="logo" src={logo} alt="Logo" />
                    <h1 className="title" >
                        Ingresar con usuario y contraseña
                    </h1>
                </header>
                <body className="body">
                    <form>
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
                    </form>
                    <Button className="login-button" text="Ingresar" handleClick={e => dispatch(userActions.login(userName, password))}
                    />
                </body>
            </div>
        </div>
    </Fragment>

}

export default Login;