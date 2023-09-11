import axios from "axios";

const key = process.env.REACT_APP_API_NINJAS_KEY;

export const checkApi = async (ip) => {
  const baseUrl = "https://api.api-ninjas.com/v1/iplookup?address=";
  const url = `${baseUrl}${ip}`;

  const response = await axios.get(url, {
    headers: { "X-Api-Key": key },
  });

  return response;
};
