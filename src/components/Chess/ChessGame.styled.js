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
`;

export const Button = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 5px;
  cursor: pointer;
  width: 100px;
  height: 40px;
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
