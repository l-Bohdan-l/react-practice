import { useDispatch, useSelector } from "react-redux";

import { useGetWeatherForCityQuery } from "../../../redux/weatherSlice.js";
import { weatherCityName } from "../../../redux/selectors/selectors.js";

export const WeatherInfo = () => {
  const cityName = useSelector(weatherCityName);
  const dispatch = useDispatch();
  console.log(cityName);
  const { data, error, isLoading } = useGetWeatherForCityQuery();
  return (
    <>
      <div>
        <div>
          <div>
            <h3>Friday</h3>
            <p>11/09/23</p>
            <p>Kropivnitsky</p>
            <p>25 degr</p>
            <p>Sunny</p>
          </div>
          <div>
            <p>precipitation</p>
            <p>humidity</p>
            <p>wind speed</p>
            <p>temp</p>
            <p>feels like</p>
            <p>min temp</p>
            <p>max temp</p>
            <p>sunset</p>
            <p>sunrise</p>
          </div>
        </div>
      </div>
    </>
  );
};
