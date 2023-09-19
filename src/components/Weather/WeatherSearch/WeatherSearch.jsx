import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { searchCityValue } from "../../../redux/weatherSlice";

import {
  Button,
  Form,
  Input,
  InputWrapper,
  Label,
  Span,
  Wrapper,
} from "./WeatherSearch.styled";

export const WeatherSearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchCityValue(value));
    setValue("");
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Input
            id="weatherSearch"
            type="text"
            onChange={handleChange}
            value={value}
            required
          />
          <Label htmlFor="weatherSearch">City</Label>
        </InputWrapper>
        <Button type="submit">
          <Span></Span>
          <Span></Span>
          <Span></Span>
          <Span></Span>
          Search
        </Button>
      </Form>
    </Wrapper>
  );
};
