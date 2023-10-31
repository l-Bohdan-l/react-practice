import { WeatherInfo } from "../../components/Weather/WeatherInfo/WeatherInfo";
import { WeatherSearch } from "../../components/Weather/WeatherSearch/WeatherSearch";
import { BackBtn, Title, Wrapper } from "./Weather.styled";
import { Container } from "../../components/Container/Container";
export const WeatherPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Weather</Title>
        <BackBtn to="/">Go Home</BackBtn>
        <WeatherSearch />
        <WeatherInfo />
      </Container>
    </Wrapper>
  );
};
