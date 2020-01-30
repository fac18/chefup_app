import React from 'react'
import { Button } from '../CSSFormComponents';
import './loginmodal.css';
import { Input, Label } from "../CSSFormComponents";

const LoginModal = ({ handleClose, show }) => {
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    });

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
      <div className={showHideClassName}>
          <section className="modal-main">
          <div>
            <form className="formFlex">
                <Label>
                <Input className="inputs"
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={login.username}
                    placeholder="Enter your username here"
                ></Input>
                </Label>
                <Label>
                <Input className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    required
                    defaultValue={login.password}
                    placeholder="Enter your password here"
                ></Input>
                </Label>
                <Label>
                <Button  className="inputs color" type="submit" value="Submit" onChange={event => setLogin(event.target.value)}>Submit</Button>
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