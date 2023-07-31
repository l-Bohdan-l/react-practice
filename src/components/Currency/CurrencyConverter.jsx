import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import CurrencyAPI from "@everapi/currencyapi-js";

import { BsFlag } from "react-icons/bs";

import {
  AmountLabel,
  Button,
  Container,
  ConvertLabel,
  Form,
  SelectWrapper,
} from "./CurrencyConverter.styled";
import { fetchCurrency, fetchConvert } from "../../services/fetchCurrency";

import data from "../../currency.json";
import { countries } from "../../countries.js";
export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [currencies, setCurrencies] = useState(data);
  const [currenciesCodes, setCurrenciesCodes] = useState([]);
  const [code, setCode] = useState("");
  const [firstFlag, setFirstFlag] = useState("ua");
  const [secondFlag, setSecondFlag] = useState("ua");
  const [result, setResult] = useState(0);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    // console.log("form", form);
    // const amount = form.amount.value;
    const convertFrom = form.convertFrom.value;
    const convertTo = form.convertTo.value;
    console.log("sudmit", amount, convertFrom, convertTo);
    // convertApi(amount, convertFrom, convertTo);
    await fetchConvert(amount, convertFrom, convertTo).then((res) => {
      const result = res.data.conversion_result;
      setResult(result.toFixed(2));
      console.log("res", result);
    });
    form.reset();
    setAmount(0);
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
            {firstFlag ? (
              <img
                src={`https://flagcdn.com/16x12/${firstFlag
                  .toLowerCase()
                  .trim()}.png`}
                // src={firstFlag}
                width="16"
                height="12"
                alt="Ukraine"
              />
            ) : (
              <BsFlag />
            )}
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
            {secondFlag ? (
              <img
                src={`https://flagcdn.com/16x12/${secondFlag
                  .toLowerCase()
                  .trim()}.png`}
                alt=";"
              />
            ) : (
              <BsFlag />
            )}
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
        {<p>{result}</p>}
      </Form>
    </Container>
  );
}
