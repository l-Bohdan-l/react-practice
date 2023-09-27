import { LinkStyled, List, Section, Title } from "./Main.styled";

export default function Main() {
  return (
    <Section>
      <Title>Choose project</Title>
      <List>
        <LinkStyled to="/currency-converter">Currency Converter</LinkStyled>
        <LinkStyled to="/ip">IP Lookup system</LinkStyled>
        <LinkStyled to="/image-to-text"> Image to text convert</LinkStyled>
        <LinkStyled to="/weather">Weather</LinkStyled>
        <LinkStyled to="/tic-tac-toe">Tic Tac Toe</LinkStyled>
      </List>
    </Section>
  );
}
