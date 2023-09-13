import { createSlice } from "@reduxjs/toolkit";
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const KEY = process.env.REACT_APP_API_NINJAS_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.api-ninjas.com/v1/",
  }),
  prepareHeaders: (headers) => {},
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getWeatherForCity: builder.query({
      query: (name) => ({
        url: `weather?city=${name}`,
        headers: { "X-Api-Key": KEY },
        contentType: "application/json",
      }),
      providesTags: ["Weather"],
    }),
  }),
});

export const { useGetWeatherForCityQuery } = weatherApi;

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

// Action creators are generated for each case reducer function
export const { searchCityValue } = weatherSlice.actions;

export default weatherSlice.reducer;
