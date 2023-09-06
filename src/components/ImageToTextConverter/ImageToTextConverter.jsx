import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import Status from "../../Constants";
import { imagetotextAPI } from "../../services/imagetotextAPI";
import {
  Input,
  Button,
  LabelStyled,
  Wrapper,
  BGWrapper,
  Form,
  InputWrapper,
  StyledLink,
  ResultWrapper,
} from "./ImageToTextConvert.styled";

export const ImageToTextConvert = (e) => {
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [parsedText, setParsedText] = useState([]);

  const inputRef = useRef("");
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    if (result) {
      result.map((word) => {
        setParsedText((prevState) => [...prevState, word.text]);
      });
    }
  }, [result]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      toast.error("No image choosen");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    imagetotextAPI(formData)
      .then((res) => {
        setStatus(Status.PENDING);
        setResult(res.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
        setStatus(Status.REJECTED);
        setError(error.response.data.error);
      })
      .finally(() => {
        setStatus(Status.RESOLVED);
      });
  };

  const handleChange = (e) => {
    setFileName(inputRef.current.files[0].name);
    setFile(inputRef.current.files[0]);
  };

  return (
    <BGWrapper>
      <h1>Convert your Image to Text</h1>
      <StyledLink to={backLinkRef.current}>Go Back</StyledLink>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <LabelStyled>
            Choose image
            <InputWrapper data-text={fileName ? fileName : "Select your file!"}>
              <Input
                ref={inputRef}
                onChange={handleChange}
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept="image/png, image/jpeg"
              />
            </InputWrapper>
          </LabelStyled>
          <Button type="submit">Send</Button>
        </Form>
        <ResultWrapper>
          <h3>Result</h3>
          {status === Status.IDLE && <p>Choose image to proceed</p>}
          {status === Status.PENDING && <p>Loading ...</p>}
          {status === Status.RESOLVED && (
            <div>
              <p>{parsedText.join(" ")}</p>
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
