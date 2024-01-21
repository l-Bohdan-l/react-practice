import chuck from "../../images/chuck.jpg";
import { ImgStyledWrapper, Quote } from "./ChuckNorris.styled";

export const ChuckNorrisHero = ({ quote }) => {
  return (
    <main>
      <ImgStyledWrapper>
        <img src={chuck} alt="Chuck Norris in Expendables" />
      </ImgStyledWrapper>
      {quote && <Quote>{quote}</Quote>}
    </main>
  );
};
