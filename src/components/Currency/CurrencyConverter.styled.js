import { Link } from "react-router-dom";
import styled from "styled-components";
import { Field, Form } from "formik";
import { TextField, Select } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to right top,
    #310051,
    #4d156d,
    #6a2a8b,
    #8940a9,
    #a956c8,
    #b058d4,
    #b759e0,
    #be5bec,
    #ab48e8,
    #9534e3,
    #7d1fe0,
    #5f00dc
  );
  min-height: 100vh;
  height: 100%;
`;

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 5px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  /* display: block; */
  border: 0px;
  font-weight: 400;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    rgb(77, 21, 109) 0%,
    rgb(0, 0, 0) 51%,
    rgb(105, 84, 80) 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.7) 8px 6px 5px;
  margin-bottom: 7px;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(0 0 0 / 44%);
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 14px -7px #f09819;
  padding: 10px;
  /* width: 300px;
  max-width: 500px; */
  height: 370px;
`;

export const AmountLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

export const AmountInput = styled(TextField)`
  & .MuiInputBase-root {
    color: #fff;
    width: 230px;
  }
`;

export const ConvertLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SelectWrapper = styled.div`
  margin-top: 5px;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 10px;
  /* max-height: 250px;
  overflow: scroll; */
`;

export const Image = styled.img`
  width: 20px;
`;

export const SelectStyled = styled(TextField)`
  & .MuiInputBase-root {
    color: #fff;
    width: 230px;
  }
  & label {
    color: #fff;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 5px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  /* display: block; */
  border: 0px;
  font-weight: 400;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    rgb(77, 21, 109) 0%,
    rgb(0, 0, 0) 51%,
    rgb(105, 84, 80) 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ResultIdle = styled.p`
  font-size: 17px;
  color: #fff;
  text-align: center;
  font-weight: 400;
  /* box-shadow: rgba(0, 0, 0, 0.7) 8px 6px 5px; */
`;

export const Result = styled.p`
  font-size: 20px;
  color: #fff;
  text-align: center;
  font-weight: 700;
  /* box-shadow: rgba(0, 0, 0, 0.7) 8px 6px 5px; */
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  background-color: rgb(0 0 0 / 44%);
  color: #fff;
  box-shadow: 0px 0px 14px -7px #f09819;
  margin-bottom: 10px;
`;
