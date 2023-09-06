import styled from "styled-components";
import { Link } from "react-router-dom";

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

export const BGWrapper = styled.div`
  color: #ffffff;
  background-color: #080710;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  min-height: 100vh;
`;

export const ResultWrapper = styled.div`
  text-align: center;
`;
export const Form = styled.form`
  min-height: 100px;
  width: 250px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 20px 15px;
  outline: none;
`;

export const Input = styled.input`
  display: block;
  color: #ffffff;
  height: 45px;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  &::placeholder {
    color: #e5e5e5;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #ffffff;
  color: #080710;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #080710;
    color: #ffffff;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-shadow: 3px 5px 2px #474747;
  transition: all 250ms ease-in-out;
  &:hover,
  &:focus {
    color: rgb(245 108 8);
    text-shadow: rgb(251 94 50 / 76%) 3px 4px 3px;
  }
`;
