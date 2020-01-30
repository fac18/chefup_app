import React from 'react'
import { Button } from '../CSSFormComponents';
import './loginmodal.css';
import { Input, Label } from "../CSSFormComponents";
import { ReactComponent as Logo } from "../../icons/logoTextBlack.svg";


const LoginModal = ({ handleClose, show }) => {
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    });

    const user = {
      username: "student",
      password: "chefUp"
    }

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const loggedIn = (login.username === user.username && login.password === user.password)  ? "p display-block" : "p display-none"

    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
<p className={loggedIn}>Welcome back {login.username}</p>
      <div className={showHideClassName}>
          <section className="modal-main">
          <div>
           
            <h2>Welcome to  <Logo /></h2>
            <form className="formFlex">
                <Label>
                <Input className="inputs"
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={login.username}
                    placeholder="'Username"
                ></Input>
                </Label>
                <Label>
                <Input className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    required
                    defaultValue={login.password}
                    placeholder="Password"
                ></Input>
                </Label>
                <Label>
                <Button  className="inputs color" type="submit" value="Submit" onChange={event => setLogin(event.target.value)}>Log in</Button>
                </Label>
                <div className="btn">
              <Button  className="inputs" onClick={handleClose}>Close</Button>
              </div>
            </form>
        </div>
          </section>
      </div>
      </>
    );
}
  
export default LoginModal