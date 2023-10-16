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
  const [position, setPosition] = useState(null);
  const [currentTimeout, setCurrentTimeout] = useState(null);

  const safeGameMutate = (modify) => {
    // const update = { ...game };
    // update.reset = game.reset;
    // console.log("safegamemutate", update.reset);
    console.log("modify", modify(game));
    // setGame((prevState) => {
    //   modify(update);
    //   console.log("update", update, "prev", prevState, "modify", modify);
    //   return update;
    // });
  };

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
    game.undo();
    game.undo();
    clearTimeout(currentTimeout);
    setMoveCount((prev) => prev - 1);
    // saveMove(game.)
    const copy = [...movesHistoryArray];
    const index = copy.length - 2;
    const arr = copy.splice(index, 2);
    setMovesHistoryArray(copy);

    console.log("copy", copy, "index", index, "arr", arr);
  };
  // console.log(movesHistoryArray.reverse());

  const resetGame = () => {
    game.reset();
    clearTimeout(currentTimeout);
    setMoveCount(1);
    setMovesHistoryArray([]);
  };

  const [inputValue, setInputValue] = useState("");
  const setFen = (e) => {
    e.preventDefault();
    // const fen = prompt("Enter FEN notation for the desired position");
    console.log("inputValue", inputValue);
    if (inputValue === null) return;
    if (game.load(inputValue)) {
      game.reset();
      game.load(inputValue);
      // setPosition(fen);
      clearTimeout(currentTimeout);
      setMoveCount(1);
      setMovesHistoryArray([]);
      return;
    }
    setInputValue("");
    return;
  };
  const handleinputValueChange = (e) => {
    setInputValue(e.target.inputValue);
  };

  console.log("log before return");
  return (
    <ChessGameSection>
      <Chessboard
        // ref={boardRef}
        position={position ? game.fen(position) : game.fen()}
        onPieceDrop={onDrop}
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        }}
      />

      <form onSubmit={setFen}>
        <input
          type="text"
          name=""
          inputValue={inputValue}
          onChange={handleinputValueChange}
        />
        <button type="submit">Click</button>
      </form>
      <ButtonList>
        <ButtonListItem>
          <Button onClick={resetGame} type="button">
            Play Again
          </Button>
        </ButtonListItem>
        <ButtonListItem>
          <Button onClick={setFen} type="button">
            Set Position
          </Button>
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
  );
};
