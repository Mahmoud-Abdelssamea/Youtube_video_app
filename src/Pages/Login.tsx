import React from "react";
import styled from "styled-components";
import { Mybutton } from "../Components/Mybutton";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 15rem;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 20%;
  padding: 0.7rem;
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  *:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

// input element
const Input = styled.input`
  width: 90%;
  /* min-width: 250px; */
  border: 1px solid ${({ theme }) => theme.textSoft};
  background-color: transparent;
  padding: 0.3rem;
  outline: none;
  border-radius: 5px;
  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.textSoft};
    border-right: 2px solid ${({ theme }) => theme.textSoft};
  }
`;
export const Login = () => {
  return (
    <Container>
      <h1 style={{ fontSize: "1.2rem" }}>Login</h1>
      <p style={{ fontSize: "0.9rem" }}>to continue to Mahmoud Youtube</p>
      <Input type="text" name="username" placeholder="username" id="" />
      <Input type="password" name="password" placeholder="password" id="" />
      <Mybutton text={"Sign in"} />
      <p>or</p>
      <Input type="text" name="username" placeholder="username" />
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Mybutton text={"Sign up "} />
    </Container>
  );
};
