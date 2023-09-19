import styled from "styled-components";
import city from "../../../images/city.jpg";

export const Wrapper = styled.div`
  /* padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px; */
  margin: 0 auto;
  width: 700px;
  height: 400px;
  display: flex;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50px;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const MainWeatherInfoBgImgWrapper = styled.div`
  background-image: ${(props) =>
    props.src ? `url(${props.src})` : `url(${city})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 300px;
  filter: blur(2px);
  border-radius: 50px;
  height: 420px;
  position: absolute;
  top: -10px;
  left: -5px;
`;

export const MainWeatherInfoBgImgDarkOverlay = styled.div`
  background-color: #00000033;
  position: absolute;
  z-index: 100000;
  height: 420px;
  width: 300px;
  border-radius: 50px;
`;

export const MainWeatherInfoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px 20px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
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

export const Temperature = styled.p`
  font-size: 55px;
  font-weight: 900;
  text-align: left;
`;

export const WeatherType = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  text-transform: capitalize;
`;

export const AdditionalInfoWrapper = styled.div`
  width: 400px;
  padding: 20px;
`;

export const AdditionalInfoSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
`;

export const AdditionalInfo = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  text-transform: capitalize;

  & > span {
    text-transform: lowercase;
  }
`;
