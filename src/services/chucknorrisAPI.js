import axios from "axios";

const key = process.env.REACT_APP_API_NINJAS_KEY;

export const chucknorrisAPI = async () => {
  const baseUrl = "https://api.api-ninjas.com/v1/chucknorris";
  
  const response = await axios.get(baseUrl, {
    headers: { "X-Api-Key": key },
  });

  return response;
};
