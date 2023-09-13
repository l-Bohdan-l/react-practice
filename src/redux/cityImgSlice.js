import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '24097500-b1b25815474c0bcb76303e859';

// export const fetchImg = async (searchQuery='', page) => {
//     const url = `?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//     const response = await axios.get(url);
//     return response;
// };
const IMG_KEY = process.env.REACT_APP_API_IMG_KEY;

export const cityImgApi = createApi({
  reducerPath: "cityImgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pixabay.com/api/",
  }),
  prepareHeaders: (headers) => {},
  tagTypes: ["Weather"],
  endpoints: (builder) => ({
    getCityImg: builder.query({
      query: (name) => ({
        url: `?q=city%20${name}&page=1&key=${IMG_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      }),
    }),
  }),
});

export const { useGetCityImgQuery } = cityImgApi;
