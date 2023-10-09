import { Chess } from "chess.js";
// import * as chess from "@";
import "chessboard-element";

import { useEffect, useState } from "react";
import {
  Button,
  ButtonList,
  ChessGameSection,
  MoveHistory,
} from "./ChessGame.styled";
import { toast } from "react-toastify";

export const ChessGame = () => {
  const [board, setBoard] = useState(null);
  const [game, setGame] = useState(new Chess());
  const [moveCount, setMoveCount] = useState(1);
  const [userColor, setUserColor] = useState("white");
  const [movesHistoryArray, setMovesHistoryArray] = useState([]);
  const [position, setPosition] = useState("start");

  // useEffect(() => {
  //   setGame(new Chess());
  // }, []);

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.isGameOver()) {
      toast.success("Checkmate!");
      return;
    }
    const move =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    game.move(move);
    // board.position(game.fen());
    saveMove(move, moveCount);
    setMoveCount(moveCount + 1);
  };

  const saveMove = (move, count) => {
    const formattedMove =
      count % 2 === 1 ? `${Math.ceil(count / 2)} , ${move}` : `${move} -`;
    setMovesHistoryArray((prevState) => [...prevState, formattedMove]);
  };

  const onDragStart = (source, piece) => {
    // return !game.isGameOver() && piece.search(userColor) === 0;
  };

  const onDrop = (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: "q",
    });
    if (move === null) return "snapback";
    // window.setTimeout(makeRandomMove, 250);
    saveMove(move.san, moveCount);
    setMoveCount(moveCount + 1);
  };

  const onSnapEnd = () => {
    // board.position(game.fen());
  };

  const boardConfig = {
    showNotation: true,
    draggable: true,
    position,
    onDragStart,
    onDrop,
    onSnapEnd,
    moveSpeed: "fast",
    snapBackSpeed: 500,
    snapSpeed: 100,
  };

  return (
    <ChessGameSection>
      <chess-board ></chess-board>
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
      <MoveHistory id="moveHistory">
        {movesHistoryArray &&
          movesHistoryArray.map((move) => {
            return <p>{move}</p>;
          })}
      </MoveHistory>
    </ChessGameSection>
  );
};
