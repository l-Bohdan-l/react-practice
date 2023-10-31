import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useEffect, useRef, useState } from "react";
import {
  BackBtn,
  Button,
  ButtonList,
  ButtonListItem,
  ChessGameSection,
  GameWrapper,
  MoveHistory,
} from "./ChessGame.styled";
import { ToastContainer, toast } from "react-toastify";

export const ChessGame = () => {
  const boardRef = useRef(null);
  const [board, setBoard] = useState(boardRef);
  const [game, setGame] = useState(new Chess());
  const [moveCount, setMoveCount] = useState(1);
  const [userColor, setUserColor] = useState("white");
  const [movesHistoryArray, setMovesHistoryArray] = useState([]);
  const [position, setPosition] = useState(null);
  const [currentTimeout, setCurrentTimeout] = useState(null);

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        toast.success("Checkmate!");
        return;
      }
      if (game.isDraw()) {
        toast.success("It's a Draw!");
        return;
      }
      toast.success("Game over!");
      return;
    }
    const move =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    game.move(move);
    saveMove(move, moveCount);
    setMoveCount(moveCount + 1);
  };

  const saveMove = (move, count) => {
    const formattedMove = `${count} - ${move}`;
    setMovesHistoryArray((prevState) => [...prevState, formattedMove]);
  };

  const onDrop = (sourceSquare, targetSquare, piece) => {
    try {
      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: piece[1].toLowerCase() ?? "q",
      });

      if (move === null) return "snapback";

      const newTimeout = setTimeout(makeRandomMove, 200);
      setCurrentTimeout(newTimeout);
      saveMove(move.san, moveCount);
      setMoveCount(moveCount + 1);
    } catch (error) {
      toast.error("invalid move");
      console.log(error);
    }
  };

  const undoMove = () => {
    game.undo();
    game.undo();
    clearTimeout(currentTimeout);
    setMoveCount((prev) => prev - 1);

    const copy = [...movesHistoryArray];
    const index = copy.length - 2;
    const arr = copy.splice(index, 2);
    setMovesHistoryArray(copy);
  };

  const resetGame = () => {
    game.reset();
    clearTimeout(currentTimeout);
    setMoveCount(1);
    setMovesHistoryArray([]);
  };

  const setOrientation = () => {
    switch (userColor) {
      case "white":
        setUserColor("black");
        break;
      case "black":
        setUserColor("white");
        break;
      default:
        break;
    }
    makeRandomMove();
  };

  return (
    <GameWrapper>
      <BackBtn to="/">Go Home</BackBtn>
      <ChessGameSection>
        <Chessboard
          position={position ? game.fen(position) : game.fen()}
          onPieceDrop={onDrop}
          customBoardStyle={{
            borderRadius: "4px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
          boardOrientation={userColor}
        />
        <ButtonList>
          <ButtonListItem>
            <Button onClick={resetGame} type="button">
              Play Again
            </Button>
          </ButtonListItem>
          <ButtonListItem>
            <Button onClick={setOrientation} type="button">
              Flip Board
            </Button>
          </ButtonListItem>
          <ButtonListItem>
            <Button onClick={undoMove} type="button">
              Undo
            </Button>
          </ButtonListItem>
        </ButtonList>
        <MoveHistory id="moveHistory">
          {movesHistoryArray && (
            <ul>
              {movesHistoryArray
                .map((move) => {
                  return (
                    <li key={move}>
                      <p>{move}</p>
                    </li>
                  );
                })
                .reverse()}
            </ul>
          )}
        </MoveHistory>
        <ToastContainer />
      </ChessGameSection>
    </GameWrapper>
  );
};
