import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { BiCurrentLocation } from "react-icons/bi";
import { BsSunFill, BsCloudSunFill } from "react-icons/bs";
import { AiFillCloud } from "react-icons/ai";

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
  AdditionalInfoSubWrapper,
  AdditionalInfo,
  MainWeatherInfoBgImgDarkOverlay,
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
          <MainWeatherInfoBgImgWrapper src={imgUrl}>
            <MainWeatherInfoBgImgDarkOverlay></MainWeatherInfoBgImgDarkOverlay>
          </MainWeatherInfoBgImgWrapper>
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
              {data.cloud_pct <= 15 && <BsSunFill size={60} />}
              {data.cloud_pct > 15 && data.cloud_pct <= 75 && (
                <BsCloudSunFill size={60} />
              )}
              {data.cloud_pct > 75 && <AiFillCloud size={60} />}
              <Temperature>{data.temp}°C</Temperature>
              {data.cloud_pct <= 15 && <WeatherType>Sunny</WeatherType>}
              {data.cloud_pct > 15 && data.cloud_pct <= 75 && (
                <WeatherType>Partly Cloudy</WeatherType>
              )}
              {data.cloud_pct > 75 && <WeatherType>Cloudy</WeatherType>}
            </div>
          </MainWeatherInfoWrapper>
          <AdditionalInfoWrapper>
            <AdditionalInfoSubWrapper>
              <AdditionalInfo>humidity</AdditionalInfo>
              <AdditionalInfo>{data.humidity} %</AdditionalInfo>
            </AdditionalInfoSubWrapper>
            <AdditionalInfoSubWrapper>
              <AdditionalInfo>wind speed</AdditionalInfo>
              <AdditionalInfo>
                {data.wind_speed} <span>km/h</span>
              </AdditionalInfo>
            </AdditionalInfoSubWrapper>
            <AdditionalInfoSubWrapper>
              <AdditionalInfo>temp</AdditionalInfo>
              <AdditionalInfo>{data.temp} °C</AdditionalInfo>
            </AdditionalInfoSubWrapper>
            <AdditionalInfoSubWrapper>
              <AdditionalInfo>feels like</AdditionalInfo>
              <AdditionalInfo>{data.feels_like} °C</AdditionalInfo>
            </AdditionalInfoSubWrapper>
            <AdditionalInfoSubWrapper>
              <AdditionalInfo>min temp</AdditionalInfo>
              <AdditionalInfo>{data.min_temp} °C</AdditionalInfo>
            </AdditionalInfoSubWrapper>
            <AdditionalInfoSubWrapper>
              <AdditionalInfo>max temp</AdditionalInfo>
              <AdditionalInfo>{data.max_temp} °C</AdditionalInfo>
            </AdditionalInfoSubWrapper>
          </AdditionalInfoWrapper>
        </Wrapper>
      )}
    </>
  );
};
