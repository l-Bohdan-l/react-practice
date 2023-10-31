import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  color: #ffffff;
  background: rgb(0, 36, 35);
  background: linear-gradient(
    38deg,
    rgba(0, 36, 35, 1) 7%,
    rgba(9, 90, 121, 1) 28%,
    rgba(0, 164, 255, 1) 100%
  );
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.7) 8px 6px 5px;
  margin-bottom: 10px;
`;

export const BackBtn = styled(Link)`
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  display: block;
  margin-bottom: 15px;
  transition: all 0.3s linear;
  &:hover {
    color: #000000;
  }
`;
