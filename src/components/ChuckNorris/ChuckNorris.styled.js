import { Link } from "react-router-dom";
import styled from "styled-components";

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
