import React from "react";

const QuoteBlock = ({ getNewQuotes, quotes, quote }) => {
  return (
    <div className="quote-block">
      <div className="quote-generate-button-block">
        <button
          className="quote-generate-button"
          onClick={() => getNewQuotes()}
        >
          Quote Generate
        </button>
      </div>

      <div className="quote-text-block">
        <span>"</span>
        {quote?.text}
        <i>- {quote?.author}</i>
      </div>
    </div>
  );
};

export default QuoteBlock;
