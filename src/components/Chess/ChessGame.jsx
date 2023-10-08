import { Chess } from "chess.js";
import { useEffect, useState } from "react";
import {
  Button,
  ButtonList,
  ChessGameSection,
  MoveHistory,
} from "./ChessGame.styled";

export const ChessGame = () => {
  const [board, setBoard] = useState(null);
  const [game, setGame] = useState(null);
  useEffect(() => {
    setGame(new Chess());
  }, []);

  return (
    <ChessGameSection>
      <div id="board"></div>
      <ButtonList>
        <li>
          <Button type="button">Play Again</Button>
        </li>
        <li>
          <Button type="button">Set Position</Button>
        </li>
        <li>
          <Button type="button">Flip Board</Button>
        </li>
      </ButtonList>
      <MoveHistory id="moveHistory"></MoveHistory>
    </ChessGameSection>
  );
};
