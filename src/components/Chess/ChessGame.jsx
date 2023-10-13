import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import { useEffect, useRef, useState } from "react";
import {
  Button,
  ButtonList,
  ButtonListItem,
  ChessGameSection,
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
  const [position, setPosition] = useState("start");
  const [currentTimeout, setCurrentTimeout] = useState(null);

  const safeGameMutate = (modify) => {
    setGame((game) => {
      const update = { ...game };
      modify(update);
      return update;
    });
  };

  const makeRandomMove = () => {
    const possibleMoves = game.moves();
    if (game.isGameOver()) {
      toast.success("Game over!");
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
    const formattedMove = `${count} - ${move}`;
    // count % 2 === 1 ? `${Math.ceil(count / 2)}. ${move}` : `${move} -`;
    setMovesHistoryArray((prevState) => [...prevState, formattedMove]);
  };

  // const onDragStart = (e) => {
  //   console.log("first");
  //   const { piece } = e.detail;
  //   return !game.game_over() && piece.search(userColor) === 0;
  // };

  const onDrop = (sourceSquare, targetSquare, piece) => {
    // setMovesHistoryArray(game.history());

    try {
      // const gameCopy = new Chess(game.fen());

      const move = game.move({
        from: sourceSquare,
        to: targetSquare,
        // promotion: "q",
        promotion: piece[1].toLowerCase() ?? "q",
      });

      if (move === null) return "snapback";

      // window.setTimeout(makeRandomMove, 250);
      const newTimeout = setTimeout(makeRandomMove, 200);
      setCurrentTimeout(newTimeout);
      saveMove(move.san, moveCount);
      setMoveCount(moveCount + 1);
      // setGame(gameCopy);
    } catch (error) {
      toast.error("invalid move");
      console.log(error);
    }
  };

  // const onSnapEnd = () => {
  //   board.position(game.fen());
  // };
  const undoMove = () => {
    console.log("click", game.undo());

    game.undo();
    clearTimeout(currentTimeout);
  };

  console.log("game,", game.fen());

  return (
    <ChessGameSection>
      <Chessboard
        ref={boardRef}
        position={game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        }}
      />
      <ButtonList>
        <ButtonListItem>
          <Button
            onClick={() => {
              safeGameMutate((game) => {
                game.reset();
              });
              clearTimeout(currentTimeout);
            }}
            type="button"
          >
            Play Again
          </Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button type="button">Set Position</Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button type="button">Flip Board</Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button onClick={undoMove} type="button">
            Undo
          </Button>
        </ButtonListItem>
      </ButtonList>
      <MoveHistory id="moveHistory">
        {movesHistoryArray &&
          movesHistoryArray.map((move) => {
            return <p>{move}</p>;
          })}
      </MoveHistory>
      <ToastContainer />
    </ChessGameSection>
  );
};
