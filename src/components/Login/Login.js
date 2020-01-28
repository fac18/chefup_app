import React from 'react';
import './login.css';
import { Form, Input, Button, Label } from "../CSSFormComponents.js";

const Login = () => {
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    });

    // let correctLogin = {
    //     username: 'login',
    //     password: 'login'
    // }
    
    // if(login === correctLogin) {
    //     console.log(login);
    // }

    // let changeHandler = 
    //     let name = 

    return (
        <div>
            <form>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={login.username}
                    placeholder="Enter your username here"
                ></Input>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    required
                    defaultValue={login.password}
                    placeholder="Enter your password here"
                ></Input>
                <Input type="submit" value="Submit" onChange={event => setLogin(event.target.value)} />
            </form>
        </div>
    )
}

export default Login;
