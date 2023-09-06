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
  margin-top: 15px;
  gap: 15px;
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

export const Form = styled.form`
  min-height: 100px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 20px 15px;
  outline: none;
`;

export const Input = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  height: 40px;
  margin: 0;
  padding: 0;
  display: block;
  cursor: pointer;
  width: 100%;
  background-color: orange;

  &::file-selector-button {
    cursor: pointer;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  margin-top: 10px;

  &:after {
    content: attr(data-text);
    font-size: 18px;
    position: absolute;
    text-align: left;
    top: 0;
    left: 0;
    background: #fff;
    padding: 5px 5px;
    display: block;
    width: calc(100% - 10px);
    pointer-events: none;
    z-index: 20;
    height: 40px;
    color: #999;
    border-radius: 5px 10px 10px 5px;
    font-weight: 300;
  }

  &:before {
    content: "Upload";
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    height: 40px;
    background: #e9e9e9;
    color: #080710;
    font-weight: 700;
    z-index: 25;
    font-size: 16px;
    line-height: 40px;
    padding: 0 15px;
    text-transform: uppercase;
    pointer-events: none;
    border-radius: 0 5px 5px 0;
  }

  &:hover {
    &:before {
      background-color: #080710;
      color: #ffffff;
    }
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

export const ResultWrapper = styled.div`
  text-align: center;
`;
