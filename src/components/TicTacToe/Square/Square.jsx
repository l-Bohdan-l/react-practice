import { useState } from "react";
import { SquareStyled } from "./Square.styled";

export const Square = ({ value, onSquareClick }) => {
  //   const [value, setValue] = useState(null);

  //   const handleClick = () => {
  //     setValue("X");
  //   };
  return (
    <SquareStyled onClick={onSquareClick} type="button">
      {value}
    </SquareStyled>
  );
};
