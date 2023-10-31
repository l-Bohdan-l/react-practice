import { Link } from "react-router-dom";
import styled from "styled-components";

export const ChessGameSection = styled.div`
  background-color: #ffffffb0;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000000;
  width: 400px;
  margin: 0 auto;
`;

export const ButtonList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ButtonListItem = styled.li`
  cursor: pointer;
  /* flex-basis: calc((100%-30px) / 4); */
  flex-basis: calc((100% - 30px) / 4);
`;

export const Button = styled.button`
  padding: 5px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  height: 45px;
  transition: all 0.3s ease;
  font-size: 14px;

  &:hover {
    color: #000000;
    background-color: #ffffff;
  }
`;

export const MoveHistory = styled.div`
  padding: 10px;
  height: 100px;
  overflow-y: scroll;
  border: 1px solid #7b6969b8;
  border-radius: 5px;
  background-color: #c5b8b887;
`;

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackBtn = styled(Link)`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  display: block;
  margin-bottom: 15px;
  transition: all 0.5s linear;
  &:hover {
    color: #ffffff;
  }
`;
