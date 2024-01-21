import { Link } from "react-router-dom";
import styled from "styled-components";

export const BackBtn = styled(Link)`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  transition: all 0.5s linear;
  margin: 0;
  &:hover {
    color: #ffffff;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderStyled = styled.div`
  background-color: bisque;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ImgStyledWrapper = styled.div`
  filter: brightness(0.7) blur(5px);
`;

export const Quote = styled.p`
  position: absolute;
  font-size: 30px;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 6);
  color: antiquewhite;
  width: 100%;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ButtonStyled = styled.button`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: all 250ms ease-in;
  font-size: 14px;
  &:hover {
    color: #ffffff;
    border-radius: 20px;
    border: 1px solid #015051;
    background-color: #015057;
  }
`;
