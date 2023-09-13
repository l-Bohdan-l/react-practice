import styled from "styled-components";
import city from "../../../images/city.jpg";

export const Wrapper = styled.div`
  /* padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px; */
  margin: 0 auto;
  width: 80%;
  height: 500px;
  display: flex;
  position: relative;
`;

export const MainWeatherInfoBgImgWrapper = styled.div`
  background-image: ${(props) =>
    props.src ? `url(${props.src})` : `url(${city})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 300px;
  filter: blur(4px);
  border-radius: 50px;
`;

export const MainWeatherInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  width: 300px;
`;

export const Day = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 10px;
`;

export const DayOfWeek = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 10px;
`;

export const DayOfWeekItem = styled.span`
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const CityName = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: capitalize;
`;

export const CityNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
