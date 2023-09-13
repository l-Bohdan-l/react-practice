import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { BiCurrentLocation } from "react-icons/bi";

import { weatherCityName } from "../../../redux/selectors/selectors.js";
import { useGetWeatherForCityQuery } from "../../../redux/weatherSlice.js";
import {
  AdditionalInfoWrapper,
  CityName,
  CityNameWrapper,
  Day,
  DayOfWeek,
  DayOfWeekItem,
  MainWeatherInfoBgImgWrapper,
  MainWeatherInfoWrapper,
  Temperature,
  WeatherType,
  Wrapper,
} from "./WeatherInfo.styled.js";
import { useGetCityImgQuery } from "../../../redux/cityImgSlice.js";

export const WeatherInfo = () => {
  const [imgUrl, setImgUrl] = useState("");
  const cityName = useSelector(weatherCityName);
  const { data, error, isLoading } = useGetWeatherForCityQuery(cityName);
  const {
    data: img,
    error: imgError,
    isLoading: imgIsLoading,
  } = useGetCityImgQuery(cityName);

  useEffect(() => {
    if (img) {
      setImgUrl(img.hits[0].webformatURL);
    }
  }, [img]);

  console.log("name", cityName);
  console.log("data", data, "error", error, "loading", isLoading);

  const currentDate = new Date();

  const dayOptions = new Intl.DateTimeFormat("en", {
    weekday: "long",
  });
  const day = dayOptions.format(currentDate);

  const yearOptions = new Intl.DateTimeFormat("en", {
    year: "numeric",
  });
  const year = yearOptions.format(currentDate);

  const dateOptions = new Intl.DateTimeFormat("en", {
    day: "numeric",
  });
  const date = dateOptions.format(currentDate);

  const monthOptions = new Intl.DateTimeFormat("en", {
    month: "long",
  });
  const month = monthOptions.format(currentDate);

  return (
    <>
      {data && img && (
        <Wrapper>
          <MainWeatherInfoBgImgWrapper
            src={imgUrl}
          ></MainWeatherInfoBgImgWrapper>
          <MainWeatherInfoWrapper>
            <div>
              <Day>{day}</Day>
              <DayOfWeek>
                <DayOfWeekItem>{date}</DayOfWeekItem>
                <DayOfWeekItem>{month}</DayOfWeekItem>
                <DayOfWeekItem>{year}</DayOfWeekItem>
              </DayOfWeek>
              <CityNameWrapper>
                <BiCurrentLocation />
                <CityName>{cityName}</CityName>
              </CityNameWrapper>
            </div>
            <div>
              <Temperature>{data.temp}°C</Temperature>
              <WeatherType>Sunny</WeatherType>
            </div>
          </MainWeatherInfoWrapper>
          <AdditionalInfoWrapper>
            <p>humidity</p>
            <p>{data.humidity}</p>
            <p>wind speed</p>
            <p>{data.wind_speed}</p>
            <p>temp</p>
            <p>{data.temp}</p>
            <p>feels like</p>
            <p>{data.feels_like}</p>
            <p>min temp</p>
            <p>{data.min_temp}</p>
            <p>max temp</p>
            <p>{data.max_temp}</p>
          </AdditionalInfoWrapper>
        </Wrapper>
      )}
    </>
  );
};
