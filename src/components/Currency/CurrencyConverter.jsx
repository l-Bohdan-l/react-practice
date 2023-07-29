import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import CurrencyAPI from "@everapi/currencyapi-js";
// import currencyapi from "@everapi/currencyapi-js";

import {
  AmountLabel,
  Button,
  Container,
  ConvertLabel,
  Form,
  SelectWrapper,
} from "./CurrencyConverter.styled";
// import { fetchCurrency } from "../../services/fetchCurrency";

import data from "../../currency.json";
import { countries } from "../../countries.js";
export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [currencies, setCurrencies] = useState(data);
  const [currenciesCodes, setCurrenciesCodes] = useState([]);
  const [code, setCode] = useState("");
  const [firstFlag, setFirstFlag] = useState(
    // "https://flagcdn.com/16x12/ua.png"
    "ua"
  );
  const [secondFlag, setSecondFlag] = useState(
    // "https://flagcdn.com/16x12/ua.png"
    "ua"
  );

  // axios.defaults.baseURL = "https://restcountries.com/v3.1/";

  // const currencyApi = new CurrencyAPI(process.env.REACT_APP_API_KEY);
  useEffect(() => {
    const getCurrCodes = function () {
      currencies.map((el) => {
        return setCurrenciesCodes((prev) => [...prev, el[0]]);
      });
    };
    getCurrCodes();
  }, [currencies]);

  const getCurrency = async () => {
    // const response = await currencyApi.currencies();
    // const data = response.data;
    // // console.log(data);
    // setCurrencies(data);
  };

  const handleChange = (e) => {
    const target = e.target.value;
    setAmount(target);
  };

  // useEffect(() => {
  //   const getFlag = async () => {
  //     const res = await axios.get(`currency/${code.toLowerCase()}`);
  //     const flag = res.data[0].flags.png;
  //     //   setFlag(flag);
  //     switch (code) {
  //     }
  //   };

  //   // getFlag();
  // }, [code]);

  const selectHandleChange = async (e) => {
    const target = e.target.selectedOptions[0].text;
    setCode(target);
    const currentCurr = currencies.find((el) => el[0] === target);
    console.log("curr", currentCurr);
    let country = "";
    for (const key in countries) {
      if (key.toLowerCase() === currentCurr[0].toLowerCase()) {
        country = countries[key];
        break;
      }
    }
    if (currentCurr[0] === "EUR") {
      country = "eu";
    }
    console.log("country", country);
    // const res = await axios.get(`currency/${target.toLowerCase()}`);
    // // const flag = res.data[0].flags.png;
    // const flag = res.data.find((el) => el.currencies[0] === target);

    // console.log("code", target, flag);
    // console.log(
    //   "handle",
    //   res.data.map((el) => el)
    // );
    switch (e.target.name) {
      case "convertFrom":
        setFirstFlag(country);
        break;
      case "convertTo":
        setSecondFlag(country);
        break;
      default:
        break;
    }
  };
  // const getFlag ()
  // const convertApi = async (amount, convertFrom, convertTo) => {
  //   const res = currencyApi
  //     .convert(amount, convertFrom, convertTo)
  //     .then((response) => {
  //       console.log("response", response);
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetchCurrency().then((res) => console.log(res.data.supported_codes));
    // const form = e.target;
    // console.log("form", form);
    // const amount = form.amount.value;
    // const convertFrom = form.convertFrom.value;
    // const convertTo = form.convertTo.value;
    // console.log("sudmit", amount, convertFrom, convertTo);
    // convertApi(amount, convertFrom, convertTo);
    // form.reset();
  };
  console.log("amount", amount);
  return (
    <Container>
      <Link to="/">Back</Link>
      <h1>Currency Converter</h1>
      <Form onSubmit={handleSubmit}>
        <AmountLabel>
          Amount
          <input
            value={amount}
            name="amount"
            onChange={handleChange}
            type="number"
          />
        </AmountLabel>
        <ConvertLabel>
          From
          <SelectWrapper>
            <img
              src={`https://flagcdn.com/16x12/${firstFlag
                .toLowerCase()
                .trim()}.png`}
              // src={firstFlag}
              width="16"
              height="12"
              alt="Ukraine"
            />
            <div>
              <select
                defaultValue=""
                name="convertFrom"
                onChange={selectHandleChange}
              >
                <option value="" disabled>
                  --Choose currency --{" "}
                </option>
                {currenciesCodes.map((code, index) => {
                  return (
                    <option value={code} key={index}>
                      {code}
                    </option>
                  );
                })}
              </select>
            </div>
          </SelectWrapper>
        </ConvertLabel>
        <ConvertLabel>
          To
          <SelectWrapper>
            <img
              src={`https://flagcdn.com/16x12/${secondFlag
                .toLowerCase()
                .trim()}.png`}
              alt=";"
            />
            {/* <img src={secondFlag} width="16" height="12" alt="Ukraine" /> */}
            <select
              defaultValue=""
              name="convertTo"
              onChange={selectHandleChange}
            >
              <option value="" disabled>
                --Choose currency --{" "}
              </option>
              {currenciesCodes.map((code, index) => {
                return (
                  <option value={code} key={index}>
                    {code}
                  </option>
                );
              })}
            </select>
          </SelectWrapper>
        </ConvertLabel>
        <Button type="submit">Convert</Button>
        <p>Result</p>
      </Form>
    </Container>
  );
}
