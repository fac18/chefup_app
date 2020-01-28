import React from "react";
import { Form, Label } from "../CSSFormComponents.js";
// import { Link } from 'react-router-dom';


const BookLessonForm = () => {
  const [form, setForm] = React.useState(true);
  
    function handleSubmit(e) {
      e.preventDefault();
      setForm(false)
  }

  if(form) {
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          Enter your Fullname here:
        <input type="text" placeholder="Ms. Example"></input>
        </Label>
        <Label>
          Enter your email:
        <input type="text" placeholder="you@example.com"></input>
        </Label>      
        <p>Do you agree to pay your teacher in cash upon arrival?</p>
        <Label>Yes<input type="radio" name="payInCash"></input></Label>
        <Label>No<input type="radio" name="payInCash"></input></Label>
        <p>Please confirm you have reviewed the details of your chosen lesson</p>
        <Label>Yes<input type="checkbox" required></input></Label>
        <Label>
          You may enter a message to your chosen teacher here:
        <input type="submit" />
        </Label>      
      </Form>
    );
  }
  return (
    <React.Fragment>
      <p>Booking received</p>
    </React.Fragment>
  )
  };

export default BookLessonForm;
