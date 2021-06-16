import { Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../redux/user/actions";

import Button from "../../components/button";
import Input from "../../components/input";

const Login = () => {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleUserInput = (event) => {
        setUserName(event.target.value);
    };

    const handleUserPassword = (event) => {
        setPassword(event.target.value);
    };




    return <Flex height="100hv" alignItems="center" justifyContent="center">
        <Flex direction="column" background="gray.100" p={12} rounded={6}>
            <Heading>
                Bienvenido
            </Heading>
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
                    title="Password"
                    value={password}
                    handleChange={handleUserPassword}
                />
                <Button text="Ingresar" handleClick={e => dispatch(userActions.login(userName, password))}
                />
            </form>
        </Flex>
    </Flex>
}

export default Login;