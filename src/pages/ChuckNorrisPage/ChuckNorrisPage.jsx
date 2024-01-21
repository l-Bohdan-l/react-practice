import { ChuckNorrisHeader } from "../../components/ChuckNorris/ChuckNorrisHeader";
import { ChuckNorrisHero } from "../../components/ChuckNorris/ChuckNorrisHero";
import { useState } from "react";
import { chucknorrisAPI } from "../../services/chucknorrisAPI";
import Status from "../../Constants";
export default function ChuckNorrisPage() {
  const [quote, setQuote] = useState("");
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(Status.IDLE);

  const getQuote = () => {
    chucknorrisAPI()
      .then((res) => {
        setStatus(Status.PENDING);
        setQuote(res.data.joke);
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
  };
  return (
    <div>
      <ChuckNorrisHeader getQuote={getQuote} />
      <ChuckNorrisHero quote={quote} />
    </div>
  );
}
