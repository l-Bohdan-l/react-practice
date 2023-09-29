import { Board } from "./Board/Board";
import { Container } from "../../components/Container/Container";
import { BackBtn, SectionStyled, Title } from "./TicTacToe.styled";
export const TicTacToe = () => {
  return (
    <SectionStyled>
      <BackBtn to="/">Go Back</BackBtn>
      <Container>
        <Title>Welcome, to Tic-Tac-Toe game</Title>
        <Board />
      </Container>
    </SectionStyled>
  );
};
