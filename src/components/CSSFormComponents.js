import styled from "styled-components";

const Form = styled.form`
  /* display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 100px auto; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  display: ${props => props.inputDisplay || "grid"};
`;

const Button = styled.button`
  // background-color: var(--primary-app-colour);
  // padding: var(--space-m);
  padding: ${props =>
    props.inputPadding ||
    "var(--space-m)"}; // props feed into Search.js - allows us to override CSSComponents on special occasions
  background-color: ${props => props.inputColor || "var(--primary-app-colour)"};
  font-family: Source Sans Pro;
  font-size: 16px;
  width: auto;
  max-width: 100px;
  justify-self: center;
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
  justify-self:left;
`;

const Label = styled.label`
  font-family: Source Sans Pro;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  justify-self: right;
`;

export { Form, Input, Button, Label };
