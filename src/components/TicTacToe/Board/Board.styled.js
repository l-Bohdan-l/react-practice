import styled from "styled-components";

export const BoardRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const NextMessage = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  text-decoration: underline;
`;

export const WinnerMessage = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  background: #121fcf;
  background: -webkit-linear-gradient(to right, #121fcf 0%, #cf1512 100%);
  background: -moz-linear-gradient(to right, #121fcf 0%, #cf1512 100%);
  background: linear-gradient(to right, #121fcf 0%, #cf1512 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;
