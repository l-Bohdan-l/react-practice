import { GiHumanTarget } from "react-icons/gi";
import {
  BackBtn,
  InputWrapper,
  HeaderStyled,
  ButtonStyled,
} from "./ChuckNorris.styled.js";

export const ChuckNorrisHeader = ({ getQuote }) => {
  return (
    <HeaderStyled>
      <BackBtn to="/">Go Home</BackBtn>
      <InputWrapper>
        <ButtonStyled type="button" onClick={getQuote}>
          <GiHumanTarget />
          Get Quote
        </ButtonStyled>
      </InputWrapper>
    </HeaderStyled>
  );
};
