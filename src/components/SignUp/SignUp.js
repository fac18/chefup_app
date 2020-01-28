import React, {useReducer} from 'react';
import './signup.css';

const initialState = {
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password1: '',
    password2: '',
    location: ''
}

function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

const Signup = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // if(state) {
    //     console.log(state);
    // }

    const onChange = e => {
        dispatch({ field: e.target.name, value: e.target.value })
    }

    const { username, firstName, lastName, email, password1, password2, location } = state;

    return (
      <form className="signup-form">
        <div>
          <Label>Username<Input type="text" name="userName" placeholder="enter your username" defaultValue={username} required onChange={onChange}/></Label>
        </div>
        <div>
          <Label>First Name<Input type="text" name="firstName" defaultValue={firstName} required onChange={onChange}/></Label>
        </div>
        <div>
          <Label>Last Name<Input type="text" name="lastName" defaultValue={lastName} required onChange={onChange}/></Label>
        </div>
        <div>
          <Label>Email Address<Input type="email" name="email" defaultValue={email} required onChange={onChange}/></Label>
        </div>
        <div>
          <Label>Password<Input type="password" name="password1" defaultValue={password1} onChange={onChange}/></Label>
        </div>
        <div>
          <Label>Re-enter Password<Input type="password" name="password2" defaultValue={password2} onChange={onChange}/></Label>
        </div>
        <div>
          <Label>Location<Input type="text" name="location" defaultValue={location} onChange={onChange}/></Label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
  export default Signup;