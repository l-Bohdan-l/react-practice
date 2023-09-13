import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const initialState = {
  cityName: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    searchCityValue: (state, { payload }) => {
      state.cityName = payload;
    },
  },
});

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1/weather?city=",
  }),
  endpoints: (builder) => ({
    getWeatherForCity: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetWeatherForCityQuery } = weatherApi;

// Action creators are generated for each case reducer function
export const { searchCityValue } = weatherSlice.actions;

export default weatherSlice.reducer;
