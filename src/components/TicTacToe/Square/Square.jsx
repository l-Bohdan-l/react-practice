import { SquareStyled } from "./Square.styled";

export const Square = ({ value, onSquareClick }) => {
  return (
    <SquareStyled onClick={onSquareClick} type="button">
      {value}
    </SquareStyled>
  );
};
