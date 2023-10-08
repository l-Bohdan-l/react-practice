import { Container } from "../../components/Container/Container";
import { Section, Title } from "./ChessPage.styled";
import { ChessGame } from "../../components/Chess/ChessGame";

export const ChessPage = () => {
  return (
    <Section>
      <Container>
        <Title>Chess</Title>
        <ChessGame />
      </Container>
    </Section>
  );
};
