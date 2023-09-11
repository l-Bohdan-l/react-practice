import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Form,
  Input,
  InputWrapper,
  Label,
  Span,
  Wrapper,
} from "./WeatherSearch.styled";
import { searchCityValue } from "../../../redux/weatherSlice";
import { useState } from "react";

export const WeatherSearch = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
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
