import axios from "axios";

const key = "A4/+HyAHkEeqJd+x3dWUFA==PGLxO0bXwWhnpRfE";

export const imagetotextAPI = async (file) => {
  const baseUrl = "https://api.api-ninjas.com/v1/imagetotext";

  const response = await axios.post(baseUrl, file, {
    headers: { "X-Api-Key": key },
  });

  return response;
};
