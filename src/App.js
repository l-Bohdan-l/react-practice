import "./App.css";
import { useState, useEffect, lazy } from "react";
import "react-toastify/dist/ReactToastify.css";
import { nanoid } from "nanoid";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./pages/Main/Main";
import { Error } from "./components/Error";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import CurrencyConverter from "./components/Currency/CurrencyConverter";
import IPLookupPage from "./pages/IPLookupPage/IPLookupPage";
import { ImageToTextPage } from "./pages/ImageToTextPage/ImageToTextPage";

let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
    },
    {
      path: "/currency-converter",
      element: <CurrencyConverter />,
    },
    {
      path: "/ip",
      element: <IPLookupPage />,
      errorElement: <Error />,
    },
    {
      path: "/image-to-text",
      element: <ImageToTextPage />,
      errorElement: <Error />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ],
  { basename: "/react-practice" }
);

function App() {
  return (
    <>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </>
  );
}

export default App;
