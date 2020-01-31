import React from "react";
import { Form, Label, Input, Button } from "../CSSFormComponents.js";
// import { Link } from 'react-router-dom';

const BookLessonForm = () => {
  const [form, setForm] = React.useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setForm(false);
  }

  if (form) {
    return (
      <Form onSubmit={handleSubmit}>
        <Label>Enter your Fullname here:</Label>
        <Input type="text" placeholder="Ms. Example"></Input>
        <Label>Enter your email:</Label>
        <Input type="text" placeholder="you@example.com"></Input>
        <Label>Do you agree to pay your teacher in cash upon arrival?</Label>
        <Label>Yes</Label>
        <Input type="radio" name="payInCash"></Input>
        <Label>No</Label>
        <Input type="radio" name="payInCash"></Input>
        <Label>
          Please confirm you have reviewed the details of your chosen lesson by
          ticking the box below
        </Label>
        <Input type="checkbox" required></Input>
        <Label>You may enter a message to your chosen teacher here:</Label>
        <Input type="textarea" height="200px" />
        <Button>Get in touch</Button>
      </Form>
    );
  }
  return (
    <React.Fragment>
      <p>Booking received</p>
    </React.Fragment>
  );
};

export default BookLessonForm;
