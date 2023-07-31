import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { BsFlag } from "react-icons/bs";
import { ColorRing } from "react-loader-spinner";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

import {
  AmountInput,
  AmountLabel,
  BackBtn,
  Button,
  Container,
  ConvertLabel,
  FormStyled,
  Image,
  Result,
  ResultIdle,
  ResultWrapper,
  SelectStyled,
  // Form,
  SelectWrapper,
  Title,
} from "./CurrencyConverter.styled";
import { fetchCurrency, fetchConvert } from "../../services/fetchCurrency";
import Status from "../../Constants";

// import data from "../../currency.json";
import { countries } from "../../countries.js";
import { Formik, Form, Field } from "formik";
export default function CurrencyConverter() {
  const [amount, setAmount] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [currenciesCodes, setCurrenciesCodes] = useState([]);
  const [code, setCode] = useState("");
  const [firstFlag, setFirstFlag] = useState("ua");
  const [secondFlag, setSecondFlag] = useState("ua");
  const [result, setResult] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);
  const [convertFrom, setConvertFrom] = useState("");
  const [convertTo, setConvertTo] = useState("");

  useEffect(() => {
    const getCurrency = async () => {
      await fetchCurrency()
        .then((res) => {
          const data = res.data.supported_codes;
          setCurrencies(data);
        })
        .catch((error) => console.log(error));
    };
    getCurrency();
  }, []);

  useEffect(() => {
    const getCurrCodes = function () {
      currencies.map((el) => {
        return setCurrenciesCodes((prevState) => [...prevState, el[0]]);
      });
    };
    if (currencies) getCurrCodes();
  }, [currencies]);

  const handleChange = (e) => {
    const target = e.target.value;
    setAmount(target);
  };

  const selectHandleChange = async (e) => {
    const target = e.target.value;
    // console.log("target", target);
    // .selectedOptions[0].text
    setCode(target);
    const currentCurr = currencies.find((el) => el[0] === target);
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
        setConvertFrom(target);
        break;
      case "convertTo":
        setSecondFlag(country);
        setConvertTo(target);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e, { resetForm }) => {
    // e.preventDefault();
    const form = e.target;
    // console.log("form", form);
    // const amount = form.amount.value;
    // const convertFrom = form.convertFrom.value;
    // const convertTo = form.convertTo.value;
    // convertApi(amount, convertFrom, convertTo);
    await fetchConvert(amount, convertFrom, convertTo)
      .then((res) => {
        setStatus(Status.PENDING);
        const result = res.data.conversion_result;
        setResult(result.toFixed(2));
      })
      .catch((error) => console.log(error))
      .finally(() => setStatus(Status.RESOLVED));
    // form.resetForm();
    resetForm();
    setAmount(0);
    setConvertFrom("");
    setConvertTo("");
    setFirstFlag("ua");
    setSecondFlag("ua");
  };
  console.log("total", amount, firstFlag, secondFlag, result, status);
  return (
    <Container>
      <BackBtn to="/">Back</BackBtn>
      <Title>Currency Converter</Title>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          amount,
          convertFrom,
          convertTo,
        }}
      >
        <FormStyled>
          <AmountLabel>
            Amount
            <Field
              as={AmountInput}
              name="amount"
              type="number"
              value={amount}
              onChange={handleChange}
              variant="standard"
            />
          </AmountLabel>
          <ConvertLabel>
            From
            <SelectWrapper>
              {firstFlag ? (
                <Image
                  src={`https://flagcdn.com/16x12/${firstFlag
                    .toLowerCase()
                    .trim()}.png`}
                  width="16"
                  height="12"
                  alt="Ukraine"
                />
              ) : (
                <BsFlag />
              )}
              <div>
                {/* <Field                 
                  as="select"
                  name="convertFrom"
                  onChange={selectHandleChange}            
                > */}
                {/* <option value="" disabled>
                    --Choose currency --
                  </option> */}
                <SelectStyled
                  select
                  variant="standard"
                  // displayEmpty
                  // value={currenciesCodes}
                  name="convertFrom"
                  value={convertFrom}
                  onChange={selectHandleChange}
                  label="--Choose currency --"
                  fullWidth={true}
                >
                  {/* <MenuItem disabled value="">
                    <em> --Choose currency --</em>
                  </MenuItem> */}
                  {currenciesCodes &&
                    currenciesCodes.map((code, index) => {
                      return (
                        <MenuItem key={index} value={code}>
                          {code}
                        </MenuItem>
                      );
                    })}
                </SelectStyled>
                {/* </Field> */}
              </div>
            </SelectWrapper>
          </ConvertLabel>
          <ConvertLabel>
            To
            <SelectWrapper>
              {secondFlag ? (
                <Image
                  src={`https://flagcdn.com/16x12/${secondFlag
                    .toLowerCase()
                    .trim()}.png`}
                  alt=";"
                />
              ) : (
                <BsFlag />
              )}
              <div>
                <SelectStyled
                  select
                  variant="standard"
                  defaultValue="1"
                  // value={currenciesCodes}
                  name="convertTo"
                  value={convertTo}
                  onChange={selectHandleChange}
                  label="--Choose currency --"
                  fullWidth={true}
                >
                  {/* <MenuItem disabled selected value="1">
                    <em> --Choose currency --</em>
                  </MenuItem> */}
                  {currenciesCodes &&
                    currenciesCodes.map((code, index) => {
                      return (
                        <MenuItem key={index} value={code}>
                          {code}
                        </MenuItem>
                      );
                    })}
                </SelectStyled>
              </div>
            </SelectWrapper>
          </ConvertLabel>
          <Button type="submit">Convert</Button>
          {status === Status.PENDING && <ColorRing />}
          {status === Status.RESOLVED && <Result>Result: {result}</Result>}
          {status === Status.IDLE && (
            <ResultWrapper>
              <ResultIdle>
                Enter amount <br></br>and choose currency
              </ResultIdle>
            </ResultWrapper>
          )}
        </FormStyled>
      </Formik>
    </Container>
  );
}
