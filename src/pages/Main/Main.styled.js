import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #070606;
  color: #fff;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
  text-shadow: 3px 5px 2px #474747;
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  text-shadow: 3px 5px 2px #474747;
  transition: all 250ms ease-in-out;
  text-align: center;
`;

export const ListItem = styled.li`
  border: 1px solid #ffffff;
  width: 150px;
  height: 150px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 10px;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  &:nth-child(2n + 1) {
    border-radius: 10px 50px;
  }
  &:hover ${LinkStyled} {
    color: rgb(245 108 8);
    text-shadow: rgb(251 94 50 / 76%) 3px 4px 3px;
  }
  &:hover {
    border: 1px solid rgb(245 108 8);
  }
`;
