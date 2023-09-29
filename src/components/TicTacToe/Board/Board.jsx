import { useState } from "react";
import { Square } from "../Square/Square";
import {
  BoardRowWrapper,
  BoardWrapper,
  MainWrapper,
  NextMessage,
  WinnerMessage,
  WinnerMessageWrapper,
  FireWorksWrapper,
} from "./Board.styled";
import { useEffect } from "react";

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winnerMessage, setWinnerMessage] = useState(null);
  const [nextMessage, setNextMessage] = useState("X - it's your turn");

  const handleClick = (i) => {
    xIsNext
      ? setNextMessage("O - it's your turn")
      : setNextMessage("X - it's your turn");
    const nextSquares = squares.slice();
    if (squares[i]) {
      return;
    }

    // if (calculateWinner(squares)) {
    //   setWinnerMessage(`Congrats, ${squares[i]}, You are a winner`);
    //   return;
    // }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  useEffect(() => {
    console.log(calculateWinner(squares));
    const winner = calculateWinner(squares);
    if (winner) {
      setWinnerMessage(`Congrats, ${winner}, You are a winner`);
    }
  }, [squares]);

  return (
    <MainWrapper>
      <NextMessage>{nextMessage}</NextMessage>
      <BoardWrapper>
        <BoardRowWrapper>
          <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
          <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
          <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
        </BoardRowWrapper>
        <BoardRowWrapper>
          <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
          <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
          <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
        </BoardRowWrapper>
        <BoardRowWrapper>
          <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
          <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
          <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
        </BoardRowWrapper>
      </BoardWrapper>
      {winnerMessage && (
        <>
          <WinnerMessage>{winnerMessage}</WinnerMessage>
          <FireWorksWrapper position="third"></FireWorksWrapper>
          <FireWorksWrapper position="first"></FireWorksWrapper>
          <FireWorksWrapper position="second"></FireWorksWrapper>
        </>
      )}
    </MainWrapper>
  );
};
