import { useEffect, useState } from "react";
import QuoteBlock from "./components/QuoteBlock";

const getRandomQuotes = (quotes) => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quotes, setQuotes] = useState([]);
  console.log(quotes);
  const [quote, setQuote] = useState(null);
  console.log(quote);

  const getNewQuotes = () => {
    if (quotes && quotes.length > 0) {
      const newQuote = getRandomQuotes(quotes);
      setQuote(newQuote);
    }
  };
  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  return (
    <main className="App">
      <div className="title-app-block">
        <h1 className="titile">Quote Generate App</h1>
      </div>
      <QuoteBlock getNewQuotes={getNewQuotes} quote={quote} quotes={quotes} />
    </main>
  );
}
export default App;
