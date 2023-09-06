import axios from "axios";

const key = "A4/+HyAHkEeqJd+x3dWUFA==PGLxO0bXwWhnpRfE";

export const checkApi = async (ip) => {
  const baseUrl = "https://api.api-ninjas.com/v1/iplookup?address=";
  const url = `${baseUrl}${ip}`;

  const response = await axios.get(url, {
    headers: { "X-Api-Key": key },
  });

  return response;
};
