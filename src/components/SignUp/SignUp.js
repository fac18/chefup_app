import React, { useReducer } from "react";
import { Form, Input, Button, Label } from "../CSSFormComponents.js";
import "./signup.css";

const initialState = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password1: "",
  password2: "",
  location: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // if(state) {
  //     console.log(state);
  // }

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const {
    username,
    firstName,
    lastName,
    email,
    password1,
    password2,
    location
  } = state;

  return (
    <Form className="signup-form">
      <Label for="userName">Username</Label>
      <Input
        type="text"
        id="userName"
        name="userName"
        placeholder="enter your username"
        defaultValue={username}
        required
        onChange={onChange}
      />

      <Label for="firstName">First Name</Label>
      <Input
        type="text"
        id="firstName"
        name="firstName"
        defaultValue={firstName}
        required
        onChange={onChange}
      />

      <Label for="lastName">Last Name</Label>
      <Input
        type="text"
        name="lastName"
        id="lastName"
        defaultValue={lastName}
        required
        onChange={onChange}
      />

      <Label for="email">Email Address</Label>
      <Input
        type="email"
        name="email"
        id="email"
        defaultValue={email}
        required
        onChange={onChange}
      />

      <Label for="password1">Password</Label>
      <Input
        type="password"
        name="password1"
        id="password1"
        defaultValue={password1}
        onChange={onChange}
      />

      <Label for="password2">Re-enter Password</Label>
      <Input
        type="password"
        id="password2"
        name="password2"
        defaultValue={password2}
        onChange={onChange}
      />

      <Label for="location">Location</Label>
      <Input
        id="location"
        type="text"
        name="location"
        defaultValue={location}
        onChange={onChange}
      />

      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
export default Signup;
