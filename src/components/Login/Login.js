import React from 'react';
import './login.css';
import Header from '../Header/Header';

const Login = () => {
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    });
    
    if(login) {
        console.log(login);
    }

    return (
        <div>
            <form>
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    value={login.username}
                    placeholder="Enter your username here"
                ></input>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    value={login.password}
                    placeholder="Enter your password here"
                ></input>
                <input value="submit" onChange={event => setLogin(event.target.value)} />
            </form>
        </div>
    )
}

export default Login;
