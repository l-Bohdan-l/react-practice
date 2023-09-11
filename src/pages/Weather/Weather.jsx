import { WeatherInfo } from "../../components/Weather/WeatherInfo/WeatherInfo";
import { WeatherSearch } from "../../components/Weather/WeatherSearch/WeatherSearch";
import { Title, Wrapper } from "./Weather.styled";
import { Container } from "../../components/Container/Container";
export const WeatherPage = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Weather</Title>
        <WeatherSearch />
        <WeatherInfo />
      </Container>
    </Wrapper>
  );
};
