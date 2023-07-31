//https://v6.exchangerate-api.com/v6/YOUR-API-KEY/codes

import axios from "axios";

axios.defaults.baseURL = "https://v6.exchangerate-api.com/v6/";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchCurrency = async () => {
  const url = `${API_KEY}/codes`;
  const response = await axios.get(url);

  return response;
};

export const fetchConvert = async (amount, from, to) => {
  // https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT
  const url = `${API_KEY}/pair/${from}/${to}/${amount}`;
  const response = await axios.get(url);

  return response;
};
