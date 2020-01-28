import React from 'react';
import './login.css';
import { Input, Label } from "../CSSFormComponents";

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
                <Label>
                <Input
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={login.username}
                    placeholder="Enter your username here"
                ></Input>
                </Label>
                <Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    required
                    defaultValue={login.password}
                    placeholder="Enter your password here"
                ></Input>
                </Label>
                <Label>
                <Input type="submit" value="Submit" onChange={event => setLogin(event.target.value)} />
                </Label>
            </form>
        </div>
    )
}

export default Login;
