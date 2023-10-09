import { Chess } from "chess.js";
// import * as chess from "@";
import "chessboard-element";
import Draggable from "react-draggable";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonList,
  ChessGameSection,
  MoveHistory,
} from "./ChessGame.styled";
import { toast } from "react-toastify";

export const ChessGame = () => {
  const boardRef = useRef(null);
  const [board, setBoard] = useState(boardRef);
  const [game, setGame] = useState(new Chess());
  const [moveCount, setMoveCount] = useState(1);
  const [userColor, setUserColor] = useState("white");
  const [movesHistoryArray, setMovesHistoryArray] = useState([]);
  const [position, setPosition] = useState("start");

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.isGameOver()) {
      toast.success("Checkmate!");
      return;
    }
    const move =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    game.move(move);
    board.position(game.fen());
    saveMove(move, moveCount);
    setMoveCount(moveCount + 1);
  };

  const saveMove = (move, count) => {
    const formattedMove =
      count % 2 === 1 ? `${Math.ceil(count / 2)} , ${move}` : `${move} -`;
    setMovesHistoryArray((prevState) => [...prevState, formattedMove]);
  };

  const onDragStart = (e) => {
    console.log("first");
    const { piece } = e.detail;
    return !game.game_over() && piece.search(userColor) === 0;
  };

  const onDrop = (source, target) => {
    const move = game.move({
      from: source,
      to: target,
      promotion: "q",
    });
    if (move === null) return "snapback";
    window.setTimeout(makeRandomMove, 250);
    saveMove(move.san, moveCount);
    setMoveCount(moveCount + 1);
  };

  const onSnapEnd = () => {
    board.position(game.fen());
  };

  const boardConfig = {
    onDragStart,
    onDrop,
    onSnapEnd,
  };

  console.log(board);

  return (
    <ChessGameSection>
      <chess-board
        ref={boardRef}
        draggable-pieces
        drop-off-board="snapback"
        position={position}
        showNotation
        moveSpeed="fast"
        snapBackSpeed="500"
        snapSpeed="100"
      ></chess-board>
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
