import styled from "styled-components";
import { Button, TextField } from '@material-ui/core';

export const Title = styled.h1`
  font-size: 50px;
  color: #004d39;
`;
export const Cont = styled.h2`
  font-size: 30px;
  color: #00cc99;
`;

export const Card = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  min-height: 400px;
  width: 90%;
  margin: 50px auto;
`;

export const SendButton = styled(Button)`
  && {
    background-color: #00cc99;
    padding: 7px 14px;
    margin-left: 5px;
  }
`;

export const MyInput = TextField;