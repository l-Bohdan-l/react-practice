import { createSlice } from "@reduxjs/toolkit";

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
