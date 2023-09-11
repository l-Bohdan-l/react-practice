import axios from "axios";

const key = process.env.REACT_APP_API_NINJAS_KEY;

export const imagetotextAPI = async (file) => {
  const baseUrl = "https://api.api-ninjas.com/v1/imagetotext";

  const response = await axios.post(baseUrl, file, {
    headers: { "X-Api-Key": key },
  });

  return response;
};
