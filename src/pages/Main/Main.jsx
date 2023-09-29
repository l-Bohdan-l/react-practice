import { LinkStyled, List, ListItem, Section, Title } from "./Main.styled";
import { Container } from "../../components/Container/Container";
export default function Main() {
  return (
    <Section>
      <Container>
        <Title>Choose project</Title>
        <List>
          <ListItem>
            <LinkStyled to="/currency-converter">Currency Converter</LinkStyled>
          </ListItem>
          <ListItem>
            <LinkStyled to="/ip">IP Lookup system</LinkStyled>
          </ListItem>
          <ListItem>
            <LinkStyled to="/image-to-text"> Image to text convert</LinkStyled>
          </ListItem>
          <ListItem>
            <LinkStyled to="/weather">Weather</LinkStyled>
          </ListItem>
          <ListItem>
            <LinkStyled to="/tic-tac-toe">Tic Tac Toe</LinkStyled>
          </ListItem>
          <ListItem>
            <LinkStyled to="/chess">Chess</LinkStyled>
          </ListItem>
        </List>
      </Container>
    </Section>
  );
}
