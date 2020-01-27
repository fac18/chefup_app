import React from 'react';
import './login.css';

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
                <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={login.username}
                    placeholder="Enter your username here"
                ></input>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    defaultValue={login.password}
                    placeholder="Enter your password here"
                ></input>
                <input type="submit" value="Submit" onChange={event => setLogin(event.target.value)} />
            </form>
        </div>
    )
}

export default Login;
