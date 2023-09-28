import { Board } from "./Board/Board";
import { Container } from "../../components/Container/Container";
import { SectionStyled, Title } from "./TicTacToe.styled";
export const TicTacToe = () => {
  return (
    <SectionStyled>
      <Container>
        <Title>Welcome, to Tic-Tac-Toe game</Title>
        <Board />
      </Container>
    </SectionStyled>
  );
};
