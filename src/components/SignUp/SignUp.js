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
          <label>Username</label>
          <input type="text" name="userName" placeholder="enter your username" defaultValue={username} required onChange={onChange}/>
        </div>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" defaultValue={firstName} required onChange={onChange}/>
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" name="lastName" defaultValue={lastName} required onChange={onChange}/>
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" defaultValue={email} required onChange={onChange}/>
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password1" defaultValue={password1} onChange={onChange}/>
        </div>
        <div>
          <label>Re-enter Password</label>
          <input type="password" name="password2" defaultValue={password2} onChange={onChange}/>
        </div>
        <div>
          <label>Location</label>
          <input type="text" name="location" defaultValue={location} onChange={onChange}/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
  export default Signup;