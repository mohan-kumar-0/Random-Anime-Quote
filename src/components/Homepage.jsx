import React, { useEffect, useState } from "react";
import { quotes } from "../data/quotes";
import './Homepage.css';

export const Homepage = () => {
    const allQuotes = quotes;
    const quoteCount = quotes.length;
    const [quote,setQuote] = useState(quotes[Math.floor(Math.random() * quoteCount)]);

    const changeQuote = () => {
        setQuote(allQuotes[Math.floor(Math.random() * quoteCount)]);
    }

    return (
        <div className="Homepage">
            <div>
                <h3>{quote?.Quote}</h3>
                <h3>- By {quote?.Character}</h3>
                <h3>- From {quote?.Anime}</h3>
                <button onClick={changeQuote}>Random Quote</button>
          </div>
        </div>
      );
}