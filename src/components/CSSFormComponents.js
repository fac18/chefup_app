import styled from "styled-components";

const Form = styled.form`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: nowrap;
`;

const Button = styled.button`
  background-color: var(--primary-app-colour);
  padding-left: var(--space-m);
  padding-right: var(--space-m);
`;

const Input = styled.input`
  border-color: var(--grey);
  border-width: thin;
  width: 40vmax;
  font-family: Source Sans Pro;
  font-size: 16px;
  padding: var(--space-xs);
  height: 5vh;
  margin: var(--space-s);
  background-color: var(--white);
`;

export { Form, Input, Button };
