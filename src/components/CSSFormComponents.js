import styled from "styled-components";

const Form = styled.form`
  display: grid;
`;

const Button = styled.button`
  background-color: var(--primary-app-colour);
  padding: var(--space-m);
  font-family: Source Sans Pro;
  font-size: 16px;
  max-width: 100px;
`;

const Input = styled.input`
  border-color: var(--grey);
  border-width: thin;
  width: 80vw;
  max-width: 400px;
  font-family: Source Sans Pro;
  font-size: 16px;
  /* padding: var(--space-xs); */
  height: var(--space-l);
  /* margin: var(--space-s); */
  background-color: var(--white);
  text-align: left;
`;

const Label = styled.label`
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export { Form, Input, Button, Label };
