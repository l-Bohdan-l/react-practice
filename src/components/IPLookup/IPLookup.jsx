import { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  Input,
  Button,
  LabelStyled,
  Wrapper,
  BGWrapper,
  Form,
  StyledLink,
  ResultWrapper,
} from "./IPLookup.styled";
import ipValidation from "./ipValidation";
import Status from "../../Constants";
import { checkApi } from "../../services/checkIpAPI";

export const IPLookup = () => {
  const [ip, setIp] = useState("");
  const [ipAddress, setIPAddress] = useState("");
  const [status, setStatus] = useState(Status.IDLE);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => setIPAddress(data.ip))
      .catch((error) => console.log(error));
  }, []);

  const handleIpChange = (e) => {
    setIp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateIp = ipValidation(ip);
    if (validateIp === "Invalid IP") {
      toast.error("Invalid IP format");
      return;
    }
    checkApi(ip)
      .then((res) => {
        setStatus(Status.PENDING);
        setResult(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        setStatus(Status.REJECTED);
        setError(error.message);
      })
      .finally(() => {
        setStatus(Status.RESOLVED);
      });
    setIp("");
  };

  return (
    <BGWrapper>
      <h1>IP Lookup</h1>
      <StyledLink to={backLinkRef.current}>Go Back</StyledLink>
      <h2>Your IP Address is: {ipAddress}</h2>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <LabelStyled>
            Enter IP to search
            <Input
              onChange={handleIpChange}
              type="text"
              placeholder="Ip"
              maxLength="16"
              minLength="8"
              name="ip"
              required
              value={ip}
            />
          </LabelStyled>
          <Button type="submit">check IP</Button>
        </Form>
        <ResultWrapper>
          <h3>Result</h3>
          {status === Status.IDLE && <p>Enter IP to check</p>}
          {status === Status.PENDING && <p>Loading ...</p>}
          {status === Status.RESOLVED && result && (
            <div>
              <p>Country: {result.country}</p>
              <p>City: {result.city}</p>
              <p>Latitude: {result.lat}</p>
              <p>Longitude: {result.lon}</p>
              <p>Timezone: {result.timezone}</p>
            </div>
          )}
          {error && !result && (
            <div>
              <h3>Oops, something went wrong</h3>
              <p>{error}</p>
            </div>
          )}
        </ResultWrapper>
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BGWrapper>
  );
};
