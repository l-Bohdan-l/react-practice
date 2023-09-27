import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { nanoid } from "nanoid";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import Main from "./pages/Main/Main";
import { Error } from "./components/Error";
import CurrencyConverter from "./components/Currency/CurrencyConverter";
import IPLookupPage from "./pages/IPLookupPage/IPLookupPage";
import { ImageToTextPage } from "./pages/ImageToTextPage/ImageToTextPage";
import { WeatherPage } from "./pages/Weather/Weather";
import { persistor, store } from "./redux/store";
import { TicTacToePage } from "./pages/TicTacToePage/TicTacToePage";

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
      path: "/weather",
      element: <WeatherPage />,
      errorElement: <Error />,
    },
    {
      path: "/tic-tac-toe",
      element: <TicTacToePage />,
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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </PersistGate>
    </>
  );
}

export default App;
